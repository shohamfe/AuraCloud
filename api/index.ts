import { createDemoApp } from "../api-server/src/demo/app.js";

// Vercel invokes this as a Node request handler; an Express app IS a
// (req, res) => void handler, so it can be exported directly.
export default createDemoApp();
