import { FC, RefObject, useEffect, useRef, useState } from "react";
import { getInfiniteLoad } from "../api/request";

// 监听
export const useObserver = (
	fn: (v: boolean) => void,
	ref: RefObject<HTMLDivElement>,
) => {
	useEffect(() => {
		const intersectionObserver = new IntersectionObserver((entries) => {
			fn(entries[0].isIntersecting);
		});

		ref.current && intersectionObserver.observe(ref.current);

		return () => {
			ref.current && intersectionObserver.unobserve(ref.current);
		};
	}, []);
};

interface InfiniteLoadProps {
	url: string;
	pageSize: number;
	ref: RefObject<HTMLDivElement>;
}

// 无限加载
export const useInfiniteLoad = ({
	url,
	pageSize = 6,
	ref,
}: InfiniteLoadProps) => {
	const [list, setList] = useState<any[]>([]);
	const lockRef = useRef<boolean>(false);
	const listRef = useRef<Array<any>>([]);

	useObserver((flag) => {
		if (flag && !lockRef.current) {
			lockRef.current = true;
			getInfiniteLoad({
				url,
				startNum: listRef.current.length,
				pageSize,
			})
				.then((res) => {
					listRef.current = [...listRef.current, ...res.list];
					setList(listRef.current);
				})
				.finally(() => {
					lockRef.current = false;
				});
		}
	}, ref);

	return list;
};
