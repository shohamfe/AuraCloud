import type { IncomingMessage, ServerResponse } from "node:http";

type Handler = (req: IncomingMessage, res: ServerResponse) => void;

let app: Handler | null = null;
let initError: unknown = null;

try {
  const { createDemoApp } = await import("../api-server/src/demo/app.js");
  app = createDemoApp() as unknown as Handler;
} catch (err) {
  initError = err;
}

// Temporary diagnostic wrapper: reports the real init error in the response
// body instead of Vercel's opaque FUNCTION_INVOCATION_FAILED, since this
// session's Vercel connection can't read build/runtime logs (403 on every
// log endpoint tried). Revert to a plain `export default createDemoApp();`
// once the demo is confirmed working.
export default function handler(req: IncomingMessage, res: ServerResponse): void {
  if (initError) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        diagnosticError: true,
        message: initError instanceof Error ? initError.message : String(initError),
        stack: initError instanceof Error ? initError.stack : undefined,
      }),
    );
    return;
  }
  if (!app) {
    res.statusCode = 500;
    res.end("app failed to initialize with no error captured");
    return;
  }
  app(req, res);
}
