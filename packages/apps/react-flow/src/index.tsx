import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./styles/tailwind.less";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
