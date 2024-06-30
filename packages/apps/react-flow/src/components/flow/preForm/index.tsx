import React from "react";
import { Form, Input, Select } from "antd";
import { useCollectDelay } from "@xl/flow";

type Props = {};

const { Option } = Select;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
	style: { maxWidth: 600 },
};

const PreForm = (props: Props) => {
	const [form] = Form.useForm();
	useCollectDelay(form, "preInfo");
	return (
		<Form name="pre-form" form={form} {...layout}>
			<Form.Item name="note" label="Note" rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name="gender"
				label="Gender"
				rules={[{ required: true }]}
			>
				<Select
					placeholder="Select a option and change input text above"
					allowClear
				>
					<Option value="male">male</Option>
					<Option value="female">female</Option>
					<Option value="other">other</Option>
				</Select>
			</Form.Item>
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) =>
					prevValues.gender !== currentValues.gender
				}
			>
				{({ getFieldValue }) =>
					getFieldValue("gender") === "other" ? (
						<Form.Item
							name="customizeGender"
							label="Customize Gender"
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
					) : null
				}
			</Form.Item>
		</Form>
	);
};

export default PreForm;
