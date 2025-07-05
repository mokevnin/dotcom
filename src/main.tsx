import { createRoot } from "react-dom/client";
import "./stylesheets/application.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<App />,
);
