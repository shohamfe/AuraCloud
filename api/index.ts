import type { IncomingMessage, ServerResponse } from "node:http";

type Handler = (req: IncomingMessage, res: ServerResponse) => void;

let app: Handler | null = null;

// Everything is resolved lazily inside the handler: a top-level import or
// top-level await would crash the module before any error could be caught,
// which is exactly what made earlier failures surface as an opaque
// FUNCTION_INVOCATION_FAILED with no way to see the cause.
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  try {
    if (!app) {
      const { createDemoApp } = await import("../api-server/src/demo/app.js");
      app = createDemoApp() as unknown as Handler;
    }
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        demoInitFailed: true,
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      }),
    );
    return;
  }

  app(req, res);
}
