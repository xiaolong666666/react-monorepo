import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

type Props = {};

const GoBack = (props: Props) => {
	const navigate = useNavigate();
	return <Button onClick={() => navigate("/backup")}>GoBack</Button>;
};

export default GoBack;
