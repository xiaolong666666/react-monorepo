import React from "react";
import { Form, Input, Checkbox } from "antd";
import { useCollectDelay } from "@xl/flow";

type Props = {};

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
	style: { maxWidth: 600 },
};

const CheckForm = (props: Props) => {
	const [form] = Form.useForm();
	useCollectDelay(form, "checkInfo");

	return (
		<Form
			name="check-form"
			form={form}
			{...layout}
			initialValues={{ remember: false }}
			autoComplete="off"
		>
			<Form.Item<FieldType>
				label="Username"
				name="username"
				rules={[
					{ required: true, message: "Please input your username!" },
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item<FieldType>
				label="Password"
				name="password"
				rules={[
					{ required: true, message: "Please input your password!" },
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item<FieldType>
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>
		</Form>
	);
};

export default CheckForm;
