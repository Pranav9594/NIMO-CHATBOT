module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/NIMO/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$1$2e$1$2e$2$2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/groq-sdk@1.1.2/node_modules/groq-sdk/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$1$2e$1$2e$2$2f$node_modules$2f$groq$2d$sdk$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Groq__as__default$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/groq-sdk@1.1.2/node_modules/groq-sdk/client.mjs [app-route] (ecmascript) <export Groq as default>");
;
const groq = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$groq$2d$sdk$40$1$2e$1$2e$2$2f$node_modules$2f$groq$2d$sdk$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__Groq__as__default$3e$__["default"]({
    apiKey: process.env.GROQ_API_KEY
});
const SYSTEM_PROMPT = `You are NIMO, a concise and helpful AI coding assistant. You communicate clearly and use Markdown formatting when appropriate.

Guidelines:
- Be helpful, friendly, and professional
- Use code blocks with language specification for any code examples
- Keep responses focused and avoid unnecessary verbosity
- When explaining code, be clear and educational
- Format lists, headers, and emphasis using proper Markdown syntax`;
async function POST(req) {
    try {
        const { messages } = await req.json();
        if (!messages || messages.length === 0) {
            return new Response("No messages provided", {
                status: 400
            });
        }
        const stream = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },
                ...messages
            ],
            stream: true
        });
        const readable = new ReadableStream({
            async start (controller) {
                for await (const chunk of stream){
                    const text = chunk.choices[0]?.delta?.content ?? "";
                    if (text) {
                        controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(text)}\n`));
                    }
                }
                controller.close();
            }
        });
        return new Response(readable, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8"
            }
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("Chat API error:", message);
        return new Response(message, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bfb8b827._.js.map