# validCore

-   一个标准的 plugin 形式
-   plugin 标准【开发者制定】

## 标准能力

### 默认阶段

steps

-   stepInfo
-   stepValid
-   stepPost

### 默认插件

#### phoneValidPlugin

-   params1：全局上下文 [compilation]
-   params1：正则

#### postUrlPlugin

-   params1：全局上下文 [compilation]
-   params1：提交地址

## API

### addPlugin

-   Promise的形式
-   正常函数形式

### usePlugin

## 测试用例

```js
const core = new ValidCore();

core.addPlugin("stepInfo", (ctx) => {
	console.log("stepInfo1");
	ctx.login.push("stepInfo1");
	return ctx;
});

core.addPlugin("stepInfo", (ctx) => {
	console.log("stepInfo2");
	ctx.login.push("stepInfo2");
	return ctx;
});

core.addPlugin("stepInfo", (ctx) => {
	console.log("stepInfo3");
	ctx.login.push("stepInfo3");
	return ctx;
});

core.usePlugin("stepPost", "postUrlPlugin", "http://192.168.31.144:3006");

core.addPlugin("stepPost", (ctx) => {
	console.log("所有日志：", ctx.login);
});

core.run();
```

```js
/**
* 所有的 plugin 必须是 promise 形式
* @param {\*} ctx 全局上下文
* @param {\*} 插件可选参数，在使用特定插件时传入
* @returns
* /
```
