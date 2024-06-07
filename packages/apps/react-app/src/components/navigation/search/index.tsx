import React, {
	ChangeEventHandler,
	FocusEventHandler,
	KeyboardEventHandler,
	useMemo,
	useRef,
	useState,
} from "react";
import { CreateLocalStore } from "@xl/store";

type Props = {};

const store: any = new CreateLocalStore();
const KEY = "HISTORY__LIST";

const Search = (props: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState<string>("");
	const [historyList, setHistoryList] = useState<string[]>([]);
	const [focusIdx, setFocusIdx] = useState<number>(-1);
	const isHistoryListVisible = useMemo(
		() => historyList.length > 0,
		[historyList],
	);
	const placeholder =
		useMemo(() => historyList[focusIdx], [historyList, focusIdx]) ??
		"台湾当归";

	// 历史数据的过滤
	const onFilter = (e: any) => {
		const history: Array<string> = store.get(KEY) ?? [];
		const list = history
			.reduce(
				(pre: Array<string>, current: string) =>
					pre.includes(current) ? pre : [...pre, current],
				[],
			)
			.filter((v) => !e.target.value || v.includes(e.target.value))
			.slice(0, 5);
		setHistoryList(list);
	};

	const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
		onFilter(e);
	};

	const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
		setHistoryList([]);
		setFocusIdx(-1);
	};

	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
		onFilter(e);
	};

	const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
		switch (e.key) {
			case "Enter": {
				if (focusIdx !== -1) {
					setValue(historyList[focusIdx]);
				}
				onSearch(
					e,
					focusIdx !== -1 ? historyList[focusIdx] : undefined,
				);
				onBlur();
				break;
			}
			case "ArrowUp": {
				if (focusIdx === 0) {
					setFocusIdx(historyList.length - 1);
				} else {
					setFocusIdx((idx) => idx - 1);
				}
				break;
			}
			case "ArrowDown": {
				if (focusIdx === historyList.length - 1) {
					setFocusIdx(0);
				} else {
					setFocusIdx((idx) => idx + 1);
				}
				break;
			}
			default:
				break;
		}
	};

	const onSearch = (e: Event, v: string | undefined) => {
		if (v || value) {
			store.unshift(KEY, v || value);
		}
	};
	return (
		<div className="flex items-center">
			<input
				ref={inputRef}
				type="text"
				placeholder={placeholder}
				value={value}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChange}
				onKeyDown={onKeyDown}
				className="w-96 h-8 px-4 border rounded-full border-slate-200 bg-slate-50 text-sm focus:outline-slate-200"
			/>
			<button
				onClick={onSearch}
				className="w-16 h-8 mx-4 text-sm text-slate-50 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300"
			>
				提问
			</button>
			{isHistoryListVisible && (
				<div
					className="fixed top-11 z-10 w-96 p-2 bg-white border border-gray-200 rounded-md shadow-sm"
					style={{
						left: inputRef.current?.getBoundingClientRect().x,
					}}
				>
					{historyList.map((v, idx) => (
						<div
							key={v}
							onMouseOver={() => setFocusIdx(idx)}
							className={`${focusIdx == idx ? "text-blue-600 bg-slate-100" : "text-slate-600"} h-8 px-1 rounded-sm flex items-center hover:cursor-pointer`}
						>
							{v}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
