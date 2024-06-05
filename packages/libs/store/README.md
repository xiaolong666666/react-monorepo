# store

在 localStorage & sessionStorage 存储一些数据

```js
const valStr = window.localStorage.getItem("key");
let val;

try {
	val = JSON.parse(valStr);
} catch (err) {
	// ...error
}

if (val && val instanceof Array) {
	val.push("xxx");
}

const newValStr = JSON.stringify(val);

window.localStorage.setItem("key", newValStr);
```

开发一个库提供 简单的 API

```js
const store = CreateLocalStore(); // CreateSessionStore()
store.push("key", "xxx");
store.get("key");
```
