import { AsyncTrackQueue } from "./async-track-queue";

interface TrackData {
	seqId: number;
	id: string;
	timestamp: number;
	msg?: string;
	eventName?: string;
}

export interface UserTrackData {
	msg?: string;
	eventName?: string;
}

export class BaseTrack extends AsyncTrackQueue<TrackData> {
	private seqId = 0;

	// 收集一波数据，某个时机一起发送
	public track(data: UserTrackData) {
		this.addTrack({
			seqId: this.seqId++,
			id: `${Math.random()}`,
			timestamp: Date.now(),
			...data,
		});
	}

	protected consumeTaskQueue(data: Array<TrackData>): Promise<unknown> {
		// 1px gif 方案
		// return new Promise<void>((resolve) => {
		// 	const img = new Image();
		// 	img.src = `https://www.xiaolong.com/logs.gif?data=${JSON.stringify(data)}`;
		// 	img.onload = () => {
		// 		resolve();
		// 	};
		// });

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(data.map((item) => item.msg));
			});
		}).then((res) => console.log("埋点上报", res));
	}
}
