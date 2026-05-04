(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/tailwind-merge@2.5.5/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.0.0_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]";
const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
    outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
};
const sizeStyles = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "size-9",
    "icon-sm": "size-8",
    "icon-lg": "size-10"
};
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, variantStyles[variant], sizeStyles[size], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/button.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@radix-ui+react-dialog@1.1._b6ccfee2cb9853d0e0e14d06e0f67455/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b6ccfee2cb9853d0e0e14d06e0f67455$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/chat-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ChatHeader({ onClear, hasMessages, chatSessions, onLoadSession, onDeleteSession, onNewChat }) {
    _s();
    const [showClearDialog, setShowClearDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHistoryDialog, setShowHistoryDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteHistoryDialog, setShowDeleteHistoryDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionToDelete, setSessionToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClearClick = ()=>{
        setShowClearDialog(true);
    };
    const handleConfirmClear = ()=>{
        onClear();
        setShowClearDialog(false);
    };
    const formatDate = (timestamp)=>{
        const date = new Date(timestamp);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const handleDeleteHistoryClick = (e, sessionId)=>{
        e.stopPropagation();
        setSessionToDelete(sessionId);
        setShowDeleteHistoryDialog(true);
    };
    const handleConfirmDeleteHistory = ()=>{
        if (sessionToDelete) {
            onDeleteSession(sessionToDelete);
            setSessionToDelete(null);
        }
        setShowDeleteHistoryDialog(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-4 py-3 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                    className: "h-5 w-5 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: "NIMO"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "AI Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: onNewChat,
                                className: "text-muted-foreground hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    "New Chat"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>setShowHistoryDialog(true),
                                className: "text-muted-foreground hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    "History"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            hasMessages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleClearClick,
                                className: "text-muted-foreground hover:text-destructive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    "Clear"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showClearDialog,
                onOpenChange: setShowClearDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Clear Chat"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Are you sure you want to delete this chat? This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "flex gap-2 sm:gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowClearDialog(false),
                                    children: "No, Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleConfirmClear,
                                    children: "Yes, Delete"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showHistoryDialog,
                onOpenChange: setShowHistoryDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-lg max-h-[80vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Chat History"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "View and restore your previous conversations"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto max-h-[50vh] space-y-2 py-4",
                            children: chatSessions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-muted-foreground py-8",
                                children: "No chat history yet. Start a conversation!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this) : chatSessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer group",
                                    onClick: ()=>{
                                        onLoadSession(session);
                                        setShowHistoryDialog(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-sm text-foreground truncate",
                                                    children: session.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        formatDate(session.timestamp),
                                                        " · ",
                                                        session.messages.length,
                                                        " messages"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "h-8 w-8 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive",
                                            onClick: (e)=>handleDeleteHistoryClick(e, session.id),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, session.id, true, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showDeleteHistoryDialog,
                onOpenChange: setShowDeleteHistoryDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Delete History"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Are you sure you want to delete this history? This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "flex gap-2 sm:gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowDeleteHistoryDialog(false),
                                    children: "No, Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleConfirmDeleteHistory,
                                    children: "Yes, Delete"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/chat-header.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ChatHeader, "kKD9rjpWOPWos14ptDc+M/x5PQs=");
_c = ChatHeader;
var _c;
__turbopack_context__.k.register(_c, "ChatHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/code-block.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CodeBlock({ code, language }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-3 overflow-hidden rounded-lg border border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-code-bg px-4 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: language
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCopy,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors", "text-muted-foreground hover:bg-muted hover:text-foreground"),
                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Copied!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Copy"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "overflow-x-auto bg-code-bg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "font-mono text-sm text-code-foreground",
                    children: code
                }, void 0, false, {
                    fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/code-block.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(CodeBlock, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = CodeBlock;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/markdown-renderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownRenderer",
    ()=>MarkdownRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/code-block.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MarkdownRenderer({ content }) {
    _s();
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkdownRenderer.useMemo[blocks]": ()=>parseMarkdown(content)
    }["MarkdownRenderer.useMemo[blocks]"], [
        content
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prose prose-sm max-w-none text-inherit",
        children: blocks.map((block, index)=>{
            if (block.type === "code") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$code$2d$block$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                    code: block.content,
                    language: block.language || "text"
                }, index, false, {
                    fileName: "[project]/Desktop/NIMO/components/markdown-renderer.tsx",
                    lineNumber: 23,
                    columnNumber: 18
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm leading-relaxed",
                dangerouslySetInnerHTML: {
                    __html: formatInlineMarkdown(block.content)
                }
            }, index, false, {
                fileName: "[project]/Desktop/NIMO/components/markdown-renderer.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/markdown-renderer.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(MarkdownRenderer, "nd6C4hmDbs2/EoxuL7agDZQb4A4=");
_c = MarkdownRenderer;
function parseMarkdown(content) {
    const blocks = [];
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;
    while((match = codeBlockRegex.exec(content)) !== null){
        // Add text before the code block
        if (match.index > lastIndex) {
            const textContent = content.slice(lastIndex, match.index).trim();
            if (textContent) {
                blocks.push({
                    type: "text",
                    content: textContent
                });
            }
        }
        // Add the code block
        blocks.push({
            type: "code",
            language: match[1] || "text",
            content: match[2].trim()
        });
        lastIndex = match.index + match[0].length;
    }
    // Add remaining text
    if (lastIndex < content.length) {
        const textContent = content.slice(lastIndex).trim();
        if (textContent) {
            blocks.push({
                type: "text",
                content: textContent
            });
        }
    }
    return blocks;
}
function formatInlineMarkdown(text) {
    return text// Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')// Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")// Inline code
    .replace(/`([^`]+)`/g, '<code class="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-foreground">$1</code>')// Line breaks
    .replace(/\n/g, "<br />")// Headers
    .replace(/^### (.*?)$/gm, '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>').replace(/^## (.*?)$/gm, '<h2 class="text-lg font-semibold mt-4 mb-2">$1</h2>').replace(/^# (.*?)$/gm, '<h1 class="text-xl font-semibold mt-4 mb-2">$1</h1>')// Lists
    .replace(/^- (.*?)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/^(\d+)\. (.*?)$/gm, '<li class="ml-4 list-decimal">$2</li>');
}
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/message-bubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageBubble",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$markdown$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/markdown-renderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/ui/textarea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MessageBubble({ message, onEdit }) {
    _s();
    const isUser = message.role === "user";
    const content = message.content || "";
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editedContent, setEditedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(content);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageBubble.useEffect": ()=>{
            setEditedContent(content);
        }
    }["MessageBubble.useEffect"], [
        content
    ]);
    const handleSaveEdit = ()=>{
        const trimmed = editedContent.trim();
        if (trimmed && trimmed !== content && onEdit) {
            onEdit(message.id, trimmed);
            setIsEditing(false);
        } else if (trimmed === content) {
            setIsEditing(false);
        }
    };
    const handleCancelEdit = ()=>{
        setEditedContent(content);
        setIsEditing(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Escape") {
            handleCancelEdit();
        } else if (e.key === "Enter" && e.ctrlKey) {
            handleSaveEdit();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-3 group", isUser ? "flex-row-reverse" : "flex-row"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", isUser ? "bg-primary" : "bg-secondary"),
                children: isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "h-4 w-4 text-primary-foreground"
                }, void 0, false, {
                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                    className: "h-4 w-4 text-secondary-foreground"
                }, void 0, false, {
                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 max-w-[80%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl px-4 py-3 shadow-sm", isUser ? "bg-primary text-primary-foreground" : "bg-card border border-border text-card-foreground"),
                        children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    value: editedContent,
                                    onChange: (e)=>setEditedContent(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    className: "min-h-[60px] bg-background text-foreground border-border resize-none",
                                    autoFocus: true,
                                    placeholder: "Edit your message..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            onClick: handleCancelEdit,
                                            className: "h-7 px-2 text-muted-foreground hover:text-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                "Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: handleSaveEdit,
                                            className: "h-7 px-2",
                                            disabled: !editedContent.trim(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                "Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Ctrl+Enter to save, Esc to cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this) : isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed whitespace-pre-wrap",
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$markdown$2d$renderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRenderer"], {
                            content: content
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    isUser && !isEditing && onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "ghost",
                        onClick: ()=>setIsEditing(true),
                        className: "h-6 px-2 text-xs text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity self-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                className: "h-3 w-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            "Edit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/message-bubble.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(MessageBubble, "NTs5USWI5OWXgH9XosYOc+A2pns=");
_c = MessageBubble;
var _c;
__turbopack_context__.k.register(_c, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/typing-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingIndicator",
    ()=>TypingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                    className: "h-4 w-4 text-secondary-foreground"
                }, void 0, false, {
                    fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-6 w-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full border-2 border-primary/20"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-1 rounded-full bg-primary/10 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-4 w-4 text-primary animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground",
                                children: "NIMO is thinking..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/typing-indicator.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TypingIndicator;
var _c;
__turbopack_context__.k.register(_c, "TypingIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/chat-messages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessages",
    ()=>ChatMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$message$2d$bubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/message-bubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/typing-indicator.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ChatMessages({ messages, isLoading, onEditMessage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$message$2d$bubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageBubble"], {
                    message: message,
                    onEdit: onEditMessage
                }, message.id, false, {
                    fileName: "[project]/Desktop/NIMO/components/chat-messages.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypingIndicator"], {}, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/chat-messages.tsx",
                lineNumber: 24,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/chat-messages.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ChatMessages;
var _c;
__turbopack_context__.k.register(_c, "ChatMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/chat-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInput",
    ()=>ChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ChatInput({ input, isLoading, onInputChange, onSubmit }) {
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (input.trim() && !isLoading) {
                const form = e.currentTarget.form;
                if (form) {
                    form.requestSubmit();
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t border-border bg-card p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "mx-auto max-w-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end gap-3 rounded-2xl border border-border bg-background p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: input,
                            onChange: (e)=>onInputChange(e.target.value),
                            onKeyDown: handleKeyDown,
                            placeholder: isLoading ? "Waiting for response..." : "Type your message...",
                            rows: 1,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2 text-sm", "placeholder:text-muted-foreground focus:outline-none", isLoading && "opacity-50 cursor-not-allowed"),
                            disabled: isLoading
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            size: "icon",
                            disabled: !input.trim() || isLoading,
                            className: "h-10 w-10 shrink-0 rounded-xl",
                            children: [
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                                    lineNumber: 52,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                                    lineNumber: 52,
                                    columnNumber: 73
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: isLoading ? "Sending..." : "Send message"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-center text-xs text-muted-foreground",
                    children: isLoading ? "Generating response..." : "Press Enter to send, Shift+Enter for new line"
                }, void 0, false, {
                    fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/chat-input.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/welcome-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeScreen",
    ()=>WelcomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/lucide-react@0.454.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
;
function WelcomeScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col items-center justify-center py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "h-8 w-8 text-primary"
                }, void 0, false, {
                    fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-2 text-2xl font-semibold text-foreground",
                children: "Welcome to NIMO"
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-10 max-w-md text-center text-muted-foreground",
                children: "Your AI coding assistant. Ask me anything about programming, and I'll help you out."
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-full max-w-lg gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-1 font-medium text-foreground",
                                children: "Code Help"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Get help with debugging, refactoring, or understanding code."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-1 font-medium text-foreground",
                                children: "Explanations"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Clear explanations of concepts with practical examples."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/welcome-screen.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = WelcomeScreen;
var _c;
__turbopack_context__.k.register(_c, "WelcomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/chat-interface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInterface",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/chat-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$chat$2d$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/chat-messages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$chat$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/chat-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$welcome$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/components/welcome-screen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const STORAGE_KEY = "nimo-chat-history";
const SESSIONS_KEY = "nimo-chat-sessions";
function ChatInterface() {
    _s();
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatSessions, setChatSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentSessionId, setCurrentSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            const savedSessions = localStorage.getItem(SESSIONS_KEY);
            if (savedSessions) {
                try {
                    const parsed = JSON.parse(savedSessions);
                    if (Array.isArray(parsed)) {
                        setChatSessions(parsed);
                    }
                } catch (e) {
                    console.error("Failed to parse saved sessions:", e);
                }
            }
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setMessages(parsed);
                    }
                } catch (e) {
                    console.error("Failed to parse saved messages:", e);
                }
            }
            setIsHydrated(true);
        }
    }["ChatInterface.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (isHydrated && messages.length > 0) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
            }
        }
    }["ChatInterface.useEffect"], [
        messages,
        isHydrated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (isHydrated) {
                localStorage.setItem(SESSIONS_KEY, JSON.stringify(chatSessions));
            }
        }
    }["ChatInterface.useEffect"], [
        chatSessions,
        isHydrated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["ChatInterface.useEffect"], [
        messages,
        isLoading
    ]);
    const getSessionTitle = (messageList)=>{
        const firstUserMessage = messageList.find((m)=>m.role === "user");
        if (!firstUserMessage) return "Chat";
        const text = firstUserMessage.content || "";
        if (!text) return "Chat";
        return text.length > 50 ? text.slice(0, 50) + "..." : text;
    };
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[sendMessage]": async (userMessage)=>{
            if (!userMessage.trim() || isLoading) return;
            const userMsg = {
                id: Date.now().toString(),
                role: "user",
                content: userMessage.trim()
            };
            setMessages({
                "ChatInterface.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        userMsg
                    ]
            }["ChatInterface.useCallback[sendMessage]"]);
            setIsLoading(true);
            const assistantId = (Date.now() + 1).toString();
            const assistantMsg = {
                id: assistantId,
                role: "assistant",
                content: ""
            };
            setMessages({
                "ChatInterface.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        assistantMsg
                    ]
            }["ChatInterface.useCallback[sendMessage]"]);
            try {
                abortControllerRef.current = new AbortController();
                await new Promise({
                    "ChatInterface.useCallback[sendMessage]": (resolve)=>setTimeout(resolve, 1500)
                }["ChatInterface.useCallback[sendMessage]"]);
                const response = await fetch("/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        messages: [
                            ...messages,
                            userMsg
                        ].map({
                            "ChatInterface.useCallback[sendMessage]": (m)=>({
                                    role: m.role,
                                    content: m.content
                                })
                        }["ChatInterface.useCallback[sendMessage]"])
                    }),
                    signal: abortControllerRef.current.signal
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const reader = response.body?.getReader();
                const decoder = new TextDecoder();
                if (!reader) {
                    throw new Error("No reader available");
                }
                let fullContent = "";
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value, {
                        stream: true
                    });
                    const lines = chunk.split("\n");
                    for (const line of lines){
                        if (line.startsWith("0:")) {
                            try {
                                const text = JSON.parse(line.slice(2));
                                fullContent += text;
                                setMessages({
                                    "ChatInterface.useCallback[sendMessage]": (prev)=>prev.map({
                                            "ChatInterface.useCallback[sendMessage]": (m)=>m.id === assistantId ? {
                                                    ...m,
                                                    content: fullContent
                                                } : m
                                        }["ChatInterface.useCallback[sendMessage]"])
                                }["ChatInterface.useCallback[sendMessage]"]);
                            } catch  {
                            // Skip invalid JSON
                            }
                        }
                    }
                }
            } catch (error) {
                if (error.name === "AbortError") {
                // Request was aborted, do nothing
                } else {
                    console.error("Error sending message:", error);
                    setMessages({
                        "ChatInterface.useCallback[sendMessage]": (prev)=>prev.map({
                                "ChatInterface.useCallback[sendMessage]": (m)=>m.id === assistantId ? {
                                        ...m,
                                        content: "Sorry, I encountered an error. Please try again."
                                    } : m
                            }["ChatInterface.useCallback[sendMessage]"])
                    }["ChatInterface.useCallback[sendMessage]"]);
                }
            } finally{
                setIsLoading(false);
                abortControllerRef.current = null;
            }
        }
    }["ChatInterface.useCallback[sendMessage]"], [
        messages,
        isLoading
    ]);
    const handleClearChat = ()=>{
        if (messages.length > 0) {
            const title = getSessionTitle(messages);
            const newSession = {
                id: Date.now().toString(),
                title,
                timestamp: Date.now(),
                messages: messages
            };
            setChatSessions((prev)=>[
                    newSession,
                    ...prev
                ].slice(0, 20));
        }
        setMessages([]);
        setCurrentSessionId(null);
        localStorage.removeItem(STORAGE_KEY);
    };
    const handleLoadSession = (session)=>{
        if (messages.length > 0 && currentSessionId !== session.id) {
            const title = getSessionTitle(messages);
            const newSession = {
                id: currentSessionId || Date.now().toString(),
                title,
                timestamp: Date.now(),
                messages: messages
            };
            setChatSessions((prev)=>{
                const filtered = prev.filter((s)=>s.id !== currentSessionId);
                return [
                    newSession,
                    ...filtered
                ].slice(0, 20);
            });
        }
        setMessages(session.messages);
        setCurrentSessionId(session.id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session.messages));
    };
    const handleDeleteSession = (id)=>{
        setChatSessions((prev)=>prev.filter((s)=>s.id !== id));
    };
    const handleNewChat = ()=>{
        if (messages.length > 0) {
            const title = getSessionTitle(messages);
            const newSession = {
                id: currentSessionId || Date.now().toString(),
                title,
                timestamp: Date.now(),
                messages: messages
            };
            setChatSessions((prev)=>{
                const filtered = prev.filter((s)=>s.id !== currentSessionId);
                return [
                    newSession,
                    ...filtered
                ].slice(0, 20);
            });
        }
        setMessages([]);
        setCurrentSessionId(null);
        localStorage.removeItem(STORAGE_KEY);
    };
    const handleEditMessage = (messageId, newContent)=>{
        if (isLoading) return;
        const messageIndex = messages.findIndex((m)=>m.id === messageId);
        if (messageIndex === -1) return;
        const messagesBeforeEdit = messages.slice(0, messageIndex);
        setMessages(messagesBeforeEdit);
        setTimeout(()=>{
            sendMessage(newContent);
        }, 50);
    };
    const onFormSubmit = async (e)=>{
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;
        const message = inputValue.trim();
        setInputValue("");
        sendMessage(message);
    };
    const onInputChange = (value)=>{
        setInputValue(value);
    };
    if (!isHydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen flex-col items-center justify-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-12 w-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full border-4 border-primary/20"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-semibold text-foreground",
                            children: "NIMO"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-muted-foreground",
                            children: "Loading your chat..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
            lineNumber: 270,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex h-screen max-w-4xl flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHeader"], {
                onClear: handleClearChat,
                hasMessages: messages.length > 0,
                chatSessions: chatSessions,
                onLoadSession: handleLoadSession,
                onDeleteSession: handleDeleteSession,
                onNewChat: handleNewChat
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-scroll flex-1 overflow-y-auto px-4 py-6 md:px-6",
                children: [
                    messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$welcome$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomeScreen"], {}, void 0, false, {
                        fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$chat$2d$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessages"], {
                        messages: messages,
                        isLoading: isLoading,
                        onEditMessage: handleEditMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$components$2f$chat$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                input: inputValue,
                isLoading: isLoading,
                onInputChange: onInputChange,
                onSubmit: onFormSubmit
            }, void 0, false, {
                fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NIMO/components/chat-interface.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, this);
}
_s(ChatInterface, "nc1h8+DsOYnaES7uOcC6Yx9FkqU=");
_c = ChatInterface;
var _c;
__turbopack_context__.k.register(_c, "ChatInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NIMO/components/comet-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CometBackground",
    ()=>CometBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/next@16.0.7_@opentelemetry+_1f004dc8bdb3bb0ab1c2c17a5f8594b6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CometBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CometBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resizeCanvas = {
                "CometBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["CometBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            const comets = [];
            const createComet = {
                "CometBackground.useEffect.createComet": ()=>{
                    const angle = Math.PI / 4 + Math.random() * Math.PI / 6 // 45-75 degrees
                    ;
                    return {
                        x: Math.random() * canvas.width * 1.5,
                        y: -50 - Math.random() * 200,
                        length: 80 + Math.random() * 120,
                        speed: 3 + Math.random() * 4,
                        opacity: 0.15 + Math.random() * 0.25,
                        angle,
                        thickness: 1 + Math.random() * 1.5
                    };
                }
            }["CometBackground.useEffect.createComet"];
            // Initialize comets
            for(let i = 0; i < 8; i++){
                const comet = createComet();
                comet.y = Math.random() * canvas.height;
                comet.x = Math.random() * canvas.width;
                comets.push(comet);
            }
            const animate = {
                "CometBackground.useEffect.animate": ()=>{
                    ctx.fillStyle = "rgba(10, 10, 15, 0.15)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    comets.forEach({
                        "CometBackground.useEffect.animate": (comet, index)=>{
                            // Calculate end point based on angle
                            const endX = comet.x - Math.cos(comet.angle) * comet.length;
                            const endY = comet.y - Math.sin(comet.angle) * comet.length;
                            // Create gradient for comet tail
                            const gradient = ctx.createLinearGradient(comet.x, comet.y, endX, endY);
                            gradient.addColorStop(0, `rgba(140, 180, 200, ${comet.opacity})`);
                            gradient.addColorStop(0.3, `rgba(100, 150, 180, ${comet.opacity * 0.6})`);
                            gradient.addColorStop(1, "rgba(100, 150, 180, 0)");
                            // Draw comet
                            ctx.beginPath();
                            ctx.moveTo(comet.x, comet.y);
                            ctx.lineTo(endX, endY);
                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = comet.thickness;
                            ctx.lineCap = "round";
                            ctx.stroke();
                            // Draw bright head
                            ctx.beginPath();
                            ctx.arc(comet.x, comet.y, comet.thickness, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(200, 220, 240, ${comet.opacity * 1.5})`;
                            ctx.fill();
                            // Update position
                            comet.x += Math.cos(comet.angle) * comet.speed;
                            comet.y += Math.sin(comet.angle) * comet.speed;
                            // Reset if off screen
                            if (comet.y > canvas.height + 100 || comet.x > canvas.width + 200) {
                                comets[index] = createComet();
                            }
                        }
                    }["CometBackground.useEffect.animate"]);
                    requestAnimationFrame(animate);
                }
            }["CometBackground.useEffect.animate"];
            animate();
            return ({
                "CometBackground.useEffect": ()=>{
                    window.removeEventListener("resize", resizeCanvas);
                }
            })["CometBackground.useEffect"];
        }
    }["CometBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$opentelemetry$2b$_1f004dc8bdb3bb0ab1c2c17a5f8594b6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)"
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/NIMO/components/comet-background.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(CometBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CometBackground;
var _c;
__turbopack_context__.k.register(_c, "CometBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_NIMO_432d94a7._.js.map