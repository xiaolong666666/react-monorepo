import React, { useState } from "react";
import { Button } from "@xl/xl-react-design";
import Register from "./register";
import Login from "./login";

type Props = {};

const Education = (props: Props) => {
	const [logList, setLogList] = useState<Array<string>>([]);

	const showLog = (log: Array<string>) => setLogList(log);
	return (
		<div>
			<div className="flex gap-2">
				<Register showLog={showLog} />
				<Login showLog={showLog} />
				<Button onClick={() => showLog([])}>Clear</Button>
			</div>
			<div className="flex flex-col gap-2 m-4">
				{logList.map((log, idx) => (
					<div key={idx} className="text-xs text-slate-400">
						{log}
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
