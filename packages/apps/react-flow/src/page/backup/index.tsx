import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Backup = (props: Props) => {
	return (
		<div>
			<Link to="/backup/create">Create</Link>
		</div>
	);
};

export default Backup;
