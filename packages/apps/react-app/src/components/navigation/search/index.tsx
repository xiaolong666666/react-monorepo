import React from "react";

type Props = {};

const Search = (props: Props) => {
	return (
		<div className="flex items-center">
			<input
				type="text"
				placeholder="台湾当归"
				className="w-96 h-8 px-4 border rounded-full border-slate-200 bg-slate-50 text-sm focus:outline-slate-200"
			/>
			<button className="w-16 h-8 mx-4 text-sm text-white rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300">
				提问
			</button>
		</div>
	);
};

export default Search;
