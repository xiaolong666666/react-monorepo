import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Performance } from "@/utils/track";
import "./index.less";

// 性能监控
Performance.init();

const root = ReactDOM.createRoot(document.getElementById("app") as Element);

root.render(<App />);
