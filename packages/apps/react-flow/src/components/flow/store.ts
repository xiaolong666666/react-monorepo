export enum FLOW_SIGN {
	BACKUP = "backup",
}

export default {
	[FLOW_SIGN.BACKUP]: [
		{
			title: "backup_1",
			components: ["checkForm", "preForm"],
			operations: ["next", "cancel"],
		},
		{
			title: "backup_2",
			components: ["backUpForm", "limitForm"],
			operations: ["prev", "next", "cancel"],
		},
		{
			title: "backup_3",
			components: ["basicInfo"],
			operations: ["prev", "next", "cancel"],
		},
		{
			title: "backup_4",
			components: ["result"],
			operations: ["goback"],
		},
	],
};
