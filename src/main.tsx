import { createRoot } from "react-dom/client";
import "./stylesheets/application.scss";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";

const vdom = (
  <MantineProvider>
    <App />
  </MantineProvider>
);

createRoot(document.getElementById("root")!).render(vdom);
