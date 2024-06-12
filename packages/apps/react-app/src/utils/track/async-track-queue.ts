import { debounce } from "lodash";

interface RequiredData {
	timestamp?: number | string;
}

class TaskQueueStorableHelper<T extends RequiredData> {
	private static instance: TaskQueueStorableHelper<any> | null = null;

	// 单例模式
	public static getInstance<T extends RequiredData>() {
		if (!this.instance) {
			this.instance = new TaskQueueStorableHelper<T>();
		}

		return this.instance;
	}

	private STORAGE_KEY = "xiaolong_local_store";
	private store: any = null;

	constructor() {
		const localStore = localStorage.getItem(this.STORAGE_KEY);
		if (localStore) {
			try {
				this.store = JSON.parse(localStore);
			} catch (e) {}
		}
	}

	get queue() {
		return this.store?.queue || [];
	}

	set queue(value: Array<T>) {
		this.store = {
			...this.store,
			queue: value.sort(
				(a, b) => Number(a.timestamp) - Number(b.timestamp),
			),
		};
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.store));
	}
}

export abstract class AsyncTrackQueue<T> {
	private get storableService() {
		return TaskQueueStorableHelper.getInstance();
	}

	private set queue(value: Array<T>) {
		this.storableService.queue = value;
		if (value.length) {
			this.debounceRun();
		}
	}

	public addTrack(data: T | Array<T>) {
		this.queue = (this.storableService.queue || []).concat(data);
	}

	protected debounceRun = debounce(this.run.bind(this), 500);

	private run() {
		const currentQueue = this.storableService.queue;
		if (currentQueue.length) {
			this.queue = [];
			this.consumeTaskQueue(currentQueue);
		}
	}

	protected abstract consumeTaskQueue(data: Array<T>): Promise<unknown>;
}
