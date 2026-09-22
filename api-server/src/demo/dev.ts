import { createDemoApp } from "./app.js";

const PORT = Number(process.env.DEMO_PORT) || 3100;
createDemoApp().listen(PORT, () => {
  console.log(`Demo API listening on http://localhost:${PORT}`);
});
