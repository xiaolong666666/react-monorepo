import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

type Props = {};

const Cancel = (props: Props) => {
	const navigate = useNavigate();
	return <Button onClick={() => navigate("/backup")}>Cancel</Button>;
};

export default Cancel;
