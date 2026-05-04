module.exports = [
"[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+provider@3.0.10/node_modules/@ai-sdk/provider/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/errors/ai-sdk-error.ts
__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a, _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2, _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3, _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4, _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5, _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6, _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7, _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8, _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9, _b9;
var LoadSettingError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10, _b10;
var NoContentGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11, _b11;
var NoSuchModelError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12, _b12;
var TooManyEmbeddingValuesForCallError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13, _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
    constructor({ value, cause, context }){
        let contextPrefix = "Type validation failed";
        if (context == null ? void 0 : context.field) {
            contextPrefix += ` for ${context.field}`;
        }
        if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
            contextPrefix += " (";
            const parts = [];
            if (context.entityName) {
                parts.push(context.entityName);
            }
            if (context.entityId) {
                parts.push(`id: "${context.entityId}"`);
            }
            contextPrefix += parts.join(", ");
            contextPrefix += ")";
        }
        super({
            name: name12,
            message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
        this.context = context;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value and context, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @param {TypeValidationContext} params.context - Optional context about what is being validated.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause, context }) {
        var _a15, _b15, _c;
        if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a15 = cause.context) == null ? void 0 : _a15.field) === (context == null ? void 0 : context.field) && ((_b15 = cause.context) == null ? void 0 : _b15.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) {
            return cause;
        }
        return new _TypeValidationError({
            value,
            cause,
            context
        });
    }
};
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14, _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && (val === void 0 || isJSONValue(val)));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && (val === void 0 || isJSONValue(val)));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+provider@2.0.0/node_modules/@ai-sdk/provider/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/errors/ai-sdk-error.ts
__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError extends Error {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
_a = symbol;
var AISDKError = _AISDKError;
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
_a2 = symbol2;
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
_a3 = symbol3;
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
_a4 = symbol4;
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidPromptError = class extends AISDKError {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
_a5 = symbol5;
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
_a6 = symbol6;
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var JSONParseError = class extends AISDKError {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
_a7 = symbol7;
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var LoadAPIKeyError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
_a8 = symbol8;
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var LoadSettingError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
_a9 = symbol9;
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoContentGeneratedError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
_a10 = symbol10;
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var NoSuchModelError = class extends AISDKError {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
_a11 = symbol11;
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
_a12 = symbol12;
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _TypeValidationError = class _TypeValidationError extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name12,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause }) {
        return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
            value,
            cause
        });
    }
};
_a13 = symbol13;
var TypeValidationError = _TypeValidationError;
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
_a14 = symbol14;
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/eventsource-parser@3.0.8/node_modules/eventsource-parser/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseError",
    ()=>ParseError,
    "createParser",
    ()=>createParser
]);
class ParseError extends Error {
    constructor(message, options){
        super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
    }
}
const LF = 10, CR = 13, SPACE = 32;
function noop(_arg) {}
function createParser(callbacks) {
    if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks, pendingFragments = [];
    let isFirstChunk = !0, id, data = "", dataLines = 0, eventType;
    function feed(chunk) {
        if (isFirstChunk && (isFirstChunk = !1, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
            const trailing2 = processLines(chunk);
            trailing2 !== "" && pendingFragments.push(trailing2);
            return;
        }
        if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
            pendingFragments.push(chunk);
            return;
        }
        pendingFragments.push(chunk);
        const input = pendingFragments.join("");
        pendingFragments.length = 0;
        const trailing = processLines(input);
        trailing !== "" && pendingFragments.push(trailing);
    }
    function processLines(chunk) {
        let searchIndex = 0;
        if (chunk.indexOf("\r") === -1) {
            let lfIndex = chunk.indexOf(`
`, searchIndex);
            for(; lfIndex !== -1;){
                if (searchIndex === lfIndex) {
                    dataLines > 0 && onEvent({
                        id,
                        event: eventType,
                        data
                    }), id = void 0, data = "", dataLines = 0, eventType = void 0, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
                    continue;
                }
                const firstCharCode = chunk.charCodeAt(searchIndex);
                if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
                    const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
                    if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
                        onEvent({
                            id,
                            event: eventType,
                            data: value
                        }), id = void 0, data = "", eventType = void 0, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
                        continue;
                    }
                    data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                } else isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || void 0 : parseLine(chunk, searchIndex, lfIndex);
                searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
            }
            return chunk.slice(searchIndex);
        }
        for(; searchIndex < chunk.length;){
            const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
            let lineEnd = -1;
            if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) break;
            parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
        }
        return chunk.slice(searchIndex);
    }
    function parseLine(chunk, start, end) {
        if (start === end) {
            dispatchEvent();
            return;
        }
        const firstCharCode = chunk.charCodeAt(start);
        if (isDataPrefix(chunk, start, firstCharCode)) {
            const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
            data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
            return;
        }
        if (isEventPrefix(chunk, start, firstCharCode)) {
            eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
            return;
        }
        if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
            const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
            id = value2.includes("\0") ? void 0 : value2;
            return;
        }
        if (firstCharCode === 58) {
            if (onComment) {
                const line2 = chunk.slice(start, end);
                onComment(line2.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
            }
            return;
        }
        const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex === -1) {
            processField(line, "", line);
            return;
        }
        const field = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
        processField(field, value, line);
    }
    function processField(field, value, line) {
        switch(field){
            case "event":
                eventType = value || void 0;
                break;
            case "data":
                data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        dataLines > 0 && onEvent({
            id,
            event: eventType,
            data
        }), id = void 0, data = "", dataLines = 0, eventType = void 0;
    }
    function reset(options = {}) {
        if (options.consume && pendingFragments.length > 0) {
            const incompleteLine = pendingFragments.join("");
            parseLine(incompleteLine, 0, incompleteLine.length);
        }
        isFirstChunk = !0, id = void 0, data = "", dataLines = 0, eventType = void 0, pendingFragments.length = 0;
    }
    return {
        feed,
        reset
    };
}
function isDataPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/eventsource-parser@3.0.8/node_modules/eventsource-parser/dist/stream.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventSourceParserStream",
    ()=>EventSourceParserStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$eventsource$2d$parser$40$3$2e$0$2e$8$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/eventsource-parser@3.0.8/node_modules/eventsource-parser/dist/index.js [app-route] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$eventsource$2d$parser$40$3$2e$0$2e$8$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createParser"])({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error) {
                        onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
                    },
                    onRetry,
                    onComment
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+groq@3.0.38_zod@4.1.13/node_modules/@ai-sdk/groq/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/groq-provider.ts
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "browserSearch",
    ()=>browserSearch,
    "createGroq",
    ()=>createGroq,
    "groq",
    ()=>groq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+provider@3.0.10/node_modules/@ai-sdk/provider/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+provider-utils@4.0.26_zod@4.1.13/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/index.js [app-route] (ecmascript)");
;
;
;
;
;
// src/convert-groq-usage.ts
function convertGroqUsage(usage) {
    var _a, _b, _c, _d;
    if (usage == null) {
        return {
            inputTokens: {
                total: void 0,
                noCache: void 0,
                cacheRead: void 0,
                cacheWrite: void 0
            },
            outputTokens: {
                total: void 0,
                text: void 0,
                reasoning: void 0
            },
            raw: void 0
        };
    }
    const promptTokens = (_a = usage.prompt_tokens) != null ? _a : 0;
    const completionTokens = (_b = usage.completion_tokens) != null ? _b : 0;
    const reasoningTokens = (_d = (_c = usage.completion_tokens_details) == null ? void 0 : _c.reasoning_tokens) != null ? _d : void 0;
    const textTokens = reasoningTokens != null ? completionTokens - reasoningTokens : completionTokens;
    return {
        inputTokens: {
            total: promptTokens,
            noCache: promptTokens,
            cacheRead: void 0,
            cacheWrite: void 0
        },
        outputTokens: {
            total: completionTokens,
            text: textTokens,
            reasoning: reasoningTokens
        },
        raw: usage
    };
}
;
;
function convertToGroqChatMessages(prompt) {
    var _a;
    const messages = [];
    for (const { role, content } of prompt){
        switch(role){
            case "system":
                {
                    messages.push({
                        role: "system",
                        content
                    });
                    break;
                }
            case "user":
                {
                    if (content.length === 1 && content[0].type === "text") {
                        messages.push({
                            role: "user",
                            content: content[0].text
                        });
                        break;
                    }
                    messages.push({
                        role: "user",
                        content: content.map((part)=>{
                            switch(part.type){
                                case "text":
                                    {
                                        return {
                                            type: "text",
                                            text: part.text
                                        };
                                    }
                                case "file":
                                    {
                                        if (!part.mediaType.startsWith("image/")) {
                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                functionality: "Non-image file content parts"
                                            });
                                        }
                                        const mediaType = part.mediaType === "image/*" ? "image/jpeg" : part.mediaType;
                                        return {
                                            type: "image_url",
                                            image_url: {
                                                url: part.data instanceof URL ? part.data.toString() : `data:${mediaType};base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data)}`
                                            }
                                        };
                                    }
                            }
                        })
                    });
                    break;
                }
            case "assistant":
                {
                    let text = "";
                    let reasoning = "";
                    const toolCalls = [];
                    for (const part of content){
                        switch(part.type){
                            // groq supports reasoning for tool-calls in multi-turn conversations
                            // https://github.com/vercel/ai/issues/7860
                            case "reasoning":
                                {
                                    reasoning += part.text;
                                    break;
                                }
                            case "text":
                                {
                                    text += part.text;
                                    break;
                                }
                            case "tool-call":
                                {
                                    toolCalls.push({
                                        id: part.toolCallId,
                                        type: "function",
                                        function: {
                                            name: part.toolName,
                                            arguments: JSON.stringify(part.input)
                                        }
                                    });
                                    break;
                                }
                        }
                    }
                    messages.push({
                        role: "assistant",
                        content: text,
                        ...reasoning.length > 0 ? {
                            reasoning
                        } : null,
                        ...toolCalls.length > 0 ? {
                            tool_calls: toolCalls
                        } : null
                    });
                    break;
                }
            case "tool":
                {
                    for (const toolResponse of content){
                        if (toolResponse.type === "tool-approval-response") {
                            continue;
                        }
                        const output = toolResponse.output;
                        let contentValue;
                        switch(output.type){
                            case "text":
                            case "error-text":
                                contentValue = output.value;
                                break;
                            case "execution-denied":
                                contentValue = (_a = output.reason) != null ? _a : "Tool execution denied.";
                                break;
                            case "content":
                            case "json":
                            case "error-json":
                                contentValue = JSON.stringify(output.value);
                                break;
                        }
                        messages.push({
                            role: "tool",
                            tool_call_id: toolResponse.toolCallId,
                            content: contentValue
                        });
                    }
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    return messages;
}
// src/get-response-metadata.ts
function getResponseMetadata({ id, model, created }) {
    return {
        id: id != null ? id : void 0,
        modelId: model != null ? model : void 0,
        timestamp: created != null ? new Date(created * 1e3) : void 0
    };
}
;
var groqLanguageModelOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    reasoningFormat: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
        "parsed",
        "raw",
        "hidden"
    ]).optional(),
    /**
   * Specifies the reasoning effort level for model inference.
   * @see https://console.groq.com/docs/reasoning#reasoning-effort
   */ reasoningEffort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
        "none",
        "default",
        "low",
        "medium",
        "high"
    ]).optional(),
    /**
   * Whether to enable parallel function calling during tool use. Default to true.
   */ parallelToolCalls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * A unique identifier representing your end-user, which can help OpenAI to
   * monitor and detect abuse. Learn more.
   */ user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
    /**
   * Whether to use structured outputs.
   *
   * @default true
   */ structuredOutputs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * Whether to use strict JSON schema validation.
   * When true, the model uses constrained decoding to guarantee schema compliance.
   * Only used when structured outputs are enabled and a schema is provided.
   *
   * @default true
   */ strictJsonSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * Service tier for the request.
   * - 'on_demand': Default tier with consistent performance and fairness
   * - 'performance': Prioritized tier for latency-sensitive workloads
   * - 'flex': Higher throughput tier optimized for workloads that can handle occasional request failures
   * - 'auto': Uses on_demand rate limits, then falls back to flex tier if exceeded
   *
   * @default 'on_demand'
   */ serviceTier: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
        "on_demand",
        "performance",
        "flex",
        "auto"
    ]).optional()
});
;
;
var groqErrorDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })
});
var groqFailedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
    errorSchema: groqErrorDataSchema,
    errorToMessage: (data)=>data.error.message
});
;
// src/groq-browser-search-models.ts
var BROWSER_SEARCH_SUPPORTED_MODELS = [
    "openai/gpt-oss-20b",
    "openai/gpt-oss-120b"
];
function isBrowserSearchSupportedModel(modelId) {
    return BROWSER_SEARCH_SUPPORTED_MODELS.includes(modelId);
}
function getSupportedModelsString() {
    return BROWSER_SEARCH_SUPPORTED_MODELS.join(", ");
}
// src/groq-prepare-tools.ts
function prepareTools({ tools, toolChoice, modelId }) {
    tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
    const toolWarnings = [];
    if (tools == null) {
        return {
            tools: void 0,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const groqTools2 = [];
    for (const tool of tools){
        if (tool.type === "provider") {
            if (tool.id === "groq.browser_search") {
                if (!isBrowserSearchSupportedModel(modelId)) {
                    toolWarnings.push({
                        type: "unsupported",
                        feature: `provider-defined tool ${tool.id}`,
                        details: `Browser search is only supported on the following models: ${getSupportedModelsString()}. Current model: ${modelId}`
                    });
                } else {
                    groqTools2.push({
                        type: "browser_search"
                    });
                }
            } else {
                toolWarnings.push({
                    type: "unsupported",
                    feature: `provider-defined tool ${tool.id}`
                });
            }
        } else {
            groqTools2.push({
                type: "function",
                function: {
                    name: tool.name,
                    description: tool.description,
                    parameters: tool.inputSchema,
                    ...tool.strict != null ? {
                        strict: tool.strict
                    } : {}
                }
            });
        }
    }
    if (toolChoice == null) {
        return {
            tools: groqTools2,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const type = toolChoice.type;
    switch(type){
        case "auto":
        case "none":
        case "required":
            return {
                tools: groqTools2,
                toolChoice: type,
                toolWarnings
            };
        case "tool":
            return {
                tools: groqTools2,
                toolChoice: {
                    type: "function",
                    function: {
                        name: toolChoice.toolName
                    }
                },
                toolWarnings
            };
        default:
            {
                const _exhaustiveCheck = type;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                    functionality: `tool choice type: ${_exhaustiveCheck}`
                });
            }
    }
}
// src/map-groq-finish-reason.ts
function mapGroqFinishReason(finishReason) {
    switch(finishReason){
        case "stop":
            return "stop";
        case "length":
            return "length";
        case "content_filter":
            return "content-filter";
        case "function_call":
        case "tool_calls":
            return "tool-calls";
        default:
            return "other";
    }
}
// src/groq-chat-language-model.ts
var GroqChatLanguageModel = class {
    constructor(modelId, config){
        this.specificationVersion = "v3";
        this.supportedUrls = {
            "image/*": [
                /^https?:\/\/.*$/
            ]
        };
        this.modelId = modelId;
        this.config = config;
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences, responseFormat, seed, stream, tools, toolChoice, providerOptions }) {
        var _a, _b, _c;
        const warnings = [];
        const groqOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "groq",
            providerOptions,
            schema: groqLanguageModelOptions
        });
        const structuredOutputs = (_a = groqOptions == null ? void 0 : groqOptions.structuredOutputs) != null ? _a : true;
        const strictJsonSchema = (_b = groqOptions == null ? void 0 : groqOptions.strictJsonSchema) != null ? _b : true;
        if (topK != null) {
            warnings.push({
                type: "unsupported",
                feature: "topK"
            });
        }
        if ((responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && !structuredOutputs) {
            warnings.push({
                type: "unsupported",
                feature: "responseFormat",
                details: "JSON response format schema is only supported with structuredOutputs"
            });
        }
        const { tools: groqTools2, toolChoice: groqToolChoice, toolWarnings } = prepareTools({
            tools,
            toolChoice,
            modelId: this.modelId
        });
        return {
            args: {
                // model id:
                model: this.modelId,
                // model specific settings:
                user: groqOptions == null ? void 0 : groqOptions.user,
                parallel_tool_calls: groqOptions == null ? void 0 : groqOptions.parallelToolCalls,
                // standardized settings:
                max_tokens: maxOutputTokens,
                temperature,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
                stop: stopSequences,
                seed,
                // response format:
                response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? structuredOutputs && responseFormat.schema != null ? {
                    type: "json_schema",
                    json_schema: {
                        schema: responseFormat.schema,
                        strict: strictJsonSchema,
                        name: (_c = responseFormat.name) != null ? _c : "response",
                        description: responseFormat.description
                    }
                } : {
                    type: "json_object"
                } : void 0,
                // provider options:
                reasoning_format: groqOptions == null ? void 0 : groqOptions.reasoningFormat,
                reasoning_effort: groqOptions == null ? void 0 : groqOptions.reasoningEffort,
                service_tier: groqOptions == null ? void 0 : groqOptions.serviceTier,
                // messages:
                messages: convertToGroqChatMessages(prompt),
                // tools:
                tools: groqTools2,
                tool_choice: groqToolChoice
            },
            warnings: [
                ...warnings,
                ...toolWarnings
            ]
        };
    }
    async doGenerate(options) {
        var _a, _b;
        const { args, warnings } = await this.getArgs({
            ...options,
            stream: false
        });
        const body = JSON.stringify(args);
        const { responseHeaders, value: response, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(this.config.headers(), options.headers),
            body: args,
            failedResponseHandler: groqFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(groqChatResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const choice = response.choices[0];
        const content = [];
        const text = choice.message.content;
        if (text != null && text.length > 0) {
            content.push({
                type: "text",
                text
            });
        }
        const reasoning = choice.message.reasoning;
        if (reasoning != null && reasoning.length > 0) {
            content.push({
                type: "reasoning",
                text: reasoning
            });
        }
        if (choice.message.tool_calls != null) {
            for (const toolCall of choice.message.tool_calls){
                content.push({
                    type: "tool-call",
                    toolCallId: (_a = toolCall.id) != null ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                    toolName: toolCall.function.name,
                    input: toolCall.function.arguments
                });
            }
        }
        return {
            content,
            finishReason: {
                unified: mapGroqFinishReason(choice.finish_reason),
                raw: (_b = choice.finish_reason) != null ? _b : void 0
            },
            usage: convertGroqUsage(response.usage),
            response: {
                ...getResponseMetadata(response),
                headers: responseHeaders,
                body: rawResponse
            },
            warnings,
            request: {
                body
            }
        };
    }
    async doStream(options) {
        const { args, warnings } = await this.getArgs({
            ...options,
            stream: true
        });
        const body = JSON.stringify({
            ...args,
            stream: true
        });
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(this.config.headers(), options.headers),
            body: {
                ...args,
                stream: true
            },
            failedResponseHandler: groqFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(groqChatChunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const toolCalls = [];
        let finishReason = {
            unified: "other",
            raw: void 0
        };
        let usage = void 0;
        let isFirstChunk = true;
        let isActiveText = false;
        let isActiveReasoning = false;
        let providerMetadata;
        return {
            stream: response.pipeThrough(new TransformStream({
                start (controller) {
                    controller.enqueue({
                        type: "stream-start",
                        warnings
                    });
                },
                transform (chunk, controller) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
                    if (options.includeRawChunks) {
                        controller.enqueue({
                            type: "raw",
                            rawValue: chunk.rawValue
                        });
                    }
                    if (!chunk.success) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    if ("error" in value) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: value.error
                        });
                        return;
                    }
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata(value)
                        });
                    }
                    if (((_a = value.x_groq) == null ? void 0 : _a.usage) != null) {
                        usage = value.x_groq.usage;
                    }
                    const choice = value.choices[0];
                    if ((choice == null ? void 0 : choice.finish_reason) != null) {
                        finishReason = {
                            unified: mapGroqFinishReason(choice.finish_reason),
                            raw: choice.finish_reason
                        };
                    }
                    if ((choice == null ? void 0 : choice.delta) == null) {
                        return;
                    }
                    const delta = choice.delta;
                    if (delta.reasoning != null && delta.reasoning.length > 0) {
                        if (!isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-start",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = true;
                        }
                        controller.enqueue({
                            type: "reasoning-delta",
                            id: "reasoning-0",
                            delta: delta.reasoning
                        });
                    }
                    if (delta.content != null && delta.content.length > 0) {
                        if (isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-end",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = false;
                        }
                        if (!isActiveText) {
                            controller.enqueue({
                                type: "text-start",
                                id: "txt-0"
                            });
                            isActiveText = true;
                        }
                        controller.enqueue({
                            type: "text-delta",
                            id: "txt-0",
                            delta: delta.content
                        });
                    }
                    if (delta.tool_calls != null) {
                        if (isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-end",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = false;
                        }
                        for (const toolCallDelta of delta.tool_calls){
                            const index = toolCallDelta.index;
                            if (toolCalls[index] == null) {
                                if (toolCallDelta.type !== "function") {
                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidResponseDataError"]({
                                        data: toolCallDelta,
                                        message: `Expected 'function' type.`
                                    });
                                }
                                if (toolCallDelta.id == null) {
                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidResponseDataError"]({
                                        data: toolCallDelta,
                                        message: `Expected 'id' to be a string.`
                                    });
                                }
                                if (((_b = toolCallDelta.function) == null ? void 0 : _b.name) == null) {
                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidResponseDataError"]({
                                        data: toolCallDelta,
                                        message: `Expected 'function.name' to be a string.`
                                    });
                                }
                                controller.enqueue({
                                    type: "tool-input-start",
                                    id: toolCallDelta.id,
                                    toolName: toolCallDelta.function.name
                                });
                                toolCalls[index] = {
                                    id: toolCallDelta.id,
                                    type: "function",
                                    function: {
                                        name: toolCallDelta.function.name,
                                        arguments: (_c = toolCallDelta.function.arguments) != null ? _c : ""
                                    },
                                    hasFinished: false
                                };
                                const toolCall2 = toolCalls[index];
                                if (((_d = toolCall2.function) == null ? void 0 : _d.name) != null && ((_e = toolCall2.function) == null ? void 0 : _e.arguments) != null) {
                                    if (toolCall2.function.arguments.length > 0) {
                                        controller.enqueue({
                                            type: "tool-input-delta",
                                            id: toolCall2.id,
                                            delta: toolCall2.function.arguments
                                        });
                                    }
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isParsableJson"])(toolCall2.function.arguments)) {
                                        controller.enqueue({
                                            type: "tool-input-end",
                                            id: toolCall2.id
                                        });
                                        controller.enqueue({
                                            type: "tool-call",
                                            toolCallId: (_f = toolCall2.id) != null ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                                            toolName: toolCall2.function.name,
                                            input: toolCall2.function.arguments
                                        });
                                        toolCall2.hasFinished = true;
                                    }
                                }
                                continue;
                            }
                            const toolCall = toolCalls[index];
                            if (toolCall.hasFinished) {
                                continue;
                            }
                            if (((_g = toolCallDelta.function) == null ? void 0 : _g.arguments) != null) {
                                toolCall.function.arguments += (_i = (_h = toolCallDelta.function) == null ? void 0 : _h.arguments) != null ? _i : "";
                            }
                            controller.enqueue({
                                type: "tool-input-delta",
                                id: toolCall.id,
                                delta: (_j = toolCallDelta.function.arguments) != null ? _j : ""
                            });
                            if (((_k = toolCall.function) == null ? void 0 : _k.name) != null && ((_l = toolCall.function) == null ? void 0 : _l.arguments) != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isParsableJson"])(toolCall.function.arguments)) {
                                controller.enqueue({
                                    type: "tool-input-end",
                                    id: toolCall.id
                                });
                                controller.enqueue({
                                    type: "tool-call",
                                    toolCallId: (_m = toolCall.id) != null ? _m : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                                    toolName: toolCall.function.name,
                                    input: toolCall.function.arguments
                                });
                                toolCall.hasFinished = true;
                            }
                        }
                    }
                },
                flush (controller) {
                    if (isActiveReasoning) {
                        controller.enqueue({
                            type: "reasoning-end",
                            id: "reasoning-0"
                        });
                    }
                    if (isActiveText) {
                        controller.enqueue({
                            type: "text-end",
                            id: "txt-0"
                        });
                    }
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage: convertGroqUsage(usage),
                        ...providerMetadata != null ? {
                            providerMetadata
                        } : {}
                    });
                }
            })),
            request: {
                body
            },
            response: {
                headers: responseHeaders
            }
        };
    }
};
var groqChatResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
            reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
            tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal("function"),
                function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
                })
            })).nullish()
        }),
        index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish()
    })),
    usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
        completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
        total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
        prompt_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish()
        }).nullish(),
        completion_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            reasoning_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish()
        }).nullish()
    }).nullish()
});
var groqChatChunkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
        created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
        choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            delta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
                reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
                tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal("function").optional(),
                    function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
                        arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish()
                    })
                })).nullish()
            }).nullish(),
            finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullable().optional(),
            index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number()
        })),
        x_groq: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
                completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
                total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
                prompt_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish()
                }).nullish(),
                completion_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    reasoning_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish()
                }).nullish()
            }).nullish()
        }).nullish()
    }),
    groqErrorDataSchema
]);
;
;
;
;
var groqTranscriptionModelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        language: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
        prompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
        responseFormat: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
        temperature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().min(0).max(1).nullish(),
        timestampGranularities: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()).nullish()
    })));
// src/groq-transcription-model.ts
var GroqTranscriptionModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v3";
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs({ audio, mediaType, providerOptions }) {
        var _a, _b, _c, _d, _e;
        const warnings = [];
        const groqOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "groq",
            providerOptions,
            schema: groqTranscriptionModelOptions
        });
        const formData = new FormData();
        const blob = audio instanceof Uint8Array ? new Blob([
            audio
        ]) : new Blob([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertBase64ToUint8Array"])(audio)
        ]);
        formData.append("model", this.modelId);
        const fileExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mediaTypeToExtension"])(mediaType);
        formData.append("file", new File([
            blob
        ], "audio", {
            type: mediaType
        }), `audio.${fileExtension}`);
        if (groqOptions) {
            const transcriptionModelOptions = {
                language: (_a = groqOptions.language) != null ? _a : void 0,
                prompt: (_b = groqOptions.prompt) != null ? _b : void 0,
                response_format: (_c = groqOptions.responseFormat) != null ? _c : void 0,
                temperature: (_d = groqOptions.temperature) != null ? _d : void 0,
                timestamp_granularities: (_e = groqOptions.timestampGranularities) != null ? _e : void 0
            };
            for(const key in transcriptionModelOptions){
                const value = transcriptionModelOptions[key];
                if (value !== void 0) {
                    if (Array.isArray(value)) {
                        for (const item of value){
                            formData.append(`${key}[]`, String(item));
                        }
                    } else {
                        formData.append(key, String(value));
                    }
                }
            }
        }
        return {
            formData,
            warnings
        };
    }
    async doGenerate(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        const currentDate = (_c = (_b = (_a = this.config._internal) == null ? void 0 : _a.currentDate) == null ? void 0 : _b.call(_a)) != null ? _c : /* @__PURE__ */ new Date();
        const { formData, warnings } = await this.getArgs(options);
        const { value: response, responseHeaders, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postFormDataToApi"])({
            url: this.config.url({
                path: "/audio/transcriptions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(this.config.headers(), options.headers),
            formData,
            failedResponseHandler: groqFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(groqTranscriptionResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        return {
            text: response.text,
            segments: (_e = (_d = response.segments) == null ? void 0 : _d.map((segment)=>({
                    text: segment.text,
                    startSecond: segment.start,
                    endSecond: segment.end
                }))) != null ? _e : [],
            language: (_f = response.language) != null ? _f : void 0,
            durationInSeconds: (_g = response.duration) != null ? _g : void 0,
            warnings,
            response: {
                timestamp: currentDate,
                modelId: this.modelId,
                headers: responseHeaders,
                body: rawResponse
            }
        };
    }
};
var groqTranscriptionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
    x_groq: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }),
    // additional properties are returned when `response_format: 'verbose_json'` is
    task: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().nullish(),
    segments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        seek: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        end: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number()),
        temperature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        avg_logprob: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        compression_ratio: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number(),
        no_speech_prob: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number()
    })).nullish()
});
;
;
var browserSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderToolFactory"])({
    id: "groq.browser_search",
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({})
});
// src/groq-tools.ts
var groqTools = {
    browserSearch
};
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "3.0.38" : "TURBOPACK unreachable";
// src/groq-provider.ts
function createGroq(options = {}) {
    var _a;
    const baseURL = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL)) != null ? _a : "https://api.groq.com/openai/v1";
    const getHeaders = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$4$2e$0$2e$26_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadApiKey"])({
                apiKey: options.apiKey,
                environmentVariableName: "GROQ_API_KEY",
                description: "Groq"
            })}`,
            ...options.headers
        }, `ai-sdk/groq/${VERSION}`);
    const createChatModel = (modelId)=>new GroqChatLanguageModel(modelId, {
            provider: "groq.chat",
            url: ({ path })=>`${baseURL}${path}`,
            headers: getHeaders,
            fetch: options.fetch
        });
    const createLanguageModel = (modelId)=>{
        if (new.target) {
            throw new Error("The Groq model function cannot be called with the new keyword.");
        }
        return createChatModel(modelId);
    };
    const createTranscriptionModel = (modelId)=>{
        return new GroqTranscriptionModel(modelId, {
            provider: "groq.transcription",
            url: ({ path })=>`${baseURL}${path}`,
            headers: getHeaders,
            fetch: options.fetch
        });
    };
    const provider = function(modelId) {
        return createLanguageModel(modelId);
    };
    provider.specificationVersion = "v3";
    provider.languageModel = createLanguageModel;
    provider.chat = createChatModel;
    provider.embeddingModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "embeddingModel"
        });
    };
    provider.textEmbeddingModel = provider.embeddingModel;
    provider.imageModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$3$2e$0$2e$10$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "imageModel"
        });
    };
    provider.transcription = createTranscriptionModel;
    provider.transcriptionModel = createTranscriptionModel;
    provider.tools = groqTools;
    return provider;
}
var groq = createGroq();
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/get-context.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_context_exports = {};
__export(get_context_exports, {
    SYMBOL_FOR_REQ_CONTEXT: ()=>SYMBOL_FOR_REQ_CONTEXT,
    getContext: ()=>getContext
});
module.exports = __toCommonJS(get_context_exports);
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function getContext() {
    const fromSymbol = globalThis;
    return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    SYMBOL_FOR_REQ_CONTEXT,
    getContext
});
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/token-error.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_error_exports = {};
__export(token_error_exports, {
    VercelOidcTokenError: ()=>VercelOidcTokenError
});
module.exports = __toCommonJS(token_error_exports);
class VercelOidcTokenError extends Error {
    constructor(message, cause){
        super(message);
        this.name = "VercelOidcTokenError";
        this.cause = cause;
    }
    toString() {
        if (this.cause) {
            return `${this.name}: ${this.message}: ${this.cause}`;
        }
        return `${this.name}: ${this.message}`;
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    VercelOidcTokenError
});
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_vercel_oidc_token_exports = {};
__export(get_vercel_oidc_token_exports, {
    getVercelOidcToken: ()=>getVercelOidcToken,
    getVercelOidcTokenSync: ()=>getVercelOidcTokenSync
});
module.exports = __toCommonJS(get_vercel_oidc_token_exports);
var import_get_context = __turbopack_context__.r("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/get-context.js [app-route] (ecmascript)");
var import_token_error = __turbopack_context__.r("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/token-error.js [app-route] (ecmascript)");
async function getVercelOidcToken() {
    let token = "";
    let err;
    try {
        token = getVercelOidcTokenSync();
    } catch (error) {
        err = error;
    }
    try {
        const [{ getTokenPayload, isExpired }, { refreshToken }] = await Promise.all([
            await __turbopack_context__.A("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/token-util.js [app-route] (ecmascript, async loader)"),
            await __turbopack_context__.A("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/token.js [app-route] (ecmascript, async loader)")
        ]);
        if (!token || isExpired(getTokenPayload(token))) {
            await refreshToken();
            token = getVercelOidcTokenSync();
        }
    } catch (error) {
        if (err?.message && error instanceof Error) {
            error.message = `${err.message}
${error.message}`;
        }
        throw new import_token_error.VercelOidcTokenError(`Failed to refresh OIDC token`, error);
    }
    return token;
}
function getVercelOidcTokenSync() {
    const token = (0, import_get_context.getContext)().headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
    if (!token) {
        throw new Error(`The 'x-vercel-oidc-token' header is missing from the request. Do you have the OIDC option enabled in the Vercel project settings?`);
    }
    return token;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getVercelOidcToken,
    getVercelOidcTokenSync
});
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var src_exports = {};
__export(src_exports, {
    getContext: ()=>import_get_context.getContext,
    getVercelOidcToken: ()=>import_get_vercel_oidc_token.getVercelOidcToken,
    getVercelOidcTokenSync: ()=>import_get_vercel_oidc_token.getVercelOidcTokenSync
});
module.exports = __toCommonJS(src_exports);
var import_get_vercel_oidc_token = __turbopack_context__.r("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js [app-route] (ecmascript)");
var import_get_context = __turbopack_context__.r("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/get-context.js [app-route] (ecmascript)");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getContext,
    getVercelOidcToken,
    getVercelOidcTokenSync
});
}),
"[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+gateway@2.0.18_zod@4.1.13/node_modules/@ai-sdk/gateway/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/gateway-provider.ts
__turbopack_context__.s([
    "GatewayAuthenticationError",
    ()=>GatewayAuthenticationError,
    "GatewayError",
    ()=>GatewayError,
    "GatewayInternalServerError",
    ()=>GatewayInternalServerError,
    "GatewayInvalidRequestError",
    ()=>GatewayInvalidRequestError,
    "GatewayModelNotFoundError",
    ()=>GatewayModelNotFoundError,
    "GatewayRateLimitError",
    ()=>GatewayRateLimitError,
    "GatewayResponseError",
    ()=>GatewayResponseError,
    "createGateway",
    ()=>createGatewayProvider,
    "createGatewayProvider",
    ()=>createGatewayProvider,
    "gateway",
    ()=>gateway
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+provider-utils@3.0.18_zod@4.1.13/node_modules/@ai-sdk/provider-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
// src/errors/as-gateway-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$2$2e$0$2e$0$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@ai-sdk+provider@2.0.0/node_modules/@ai-sdk/provider/dist/index.mjs [app-route] (ecmascript)");
// src/errors/create-gateway-error.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/index.js [app-route] (ecmascript)");
// src/vercel-environment.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$oidc$40$3$2e$0$2e$5$2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NIMO/node_modules/.pnpm/@vercel+oidc@3.0.5/node_modules/@vercel/oidc/dist/index.js [app-route] (ecmascript)");
;
;
;
// src/errors/gateway-error.ts
var marker = "vercel.ai.gateway.error";
var symbol = Symbol.for(marker);
var _a, _b;
var GatewayError = class _GatewayError extends (_b = Error, _a = symbol, _b) {
    constructor({ message, statusCode = 500, cause }){
        super(message);
        this[_a] = true;
        this.statusCode = statusCode;
        this.cause = cause;
    }
    /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */ static isInstance(error) {
        return _GatewayError.hasMarker(error);
    }
    static hasMarker(error) {
        return typeof error === "object" && error !== null && symbol in error && error[symbol] === true;
    }
};
// src/errors/gateway-authentication-error.ts
var name = "GatewayAuthenticationError";
var marker2 = `vercel.ai.gateway.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2, _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2 = GatewayError, _a2 = symbol2, _b2) {
    constructor({ message = "Authentication failed", statusCode = 401, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a2] = true;
        // used in isInstance
        this.name = name;
        this.type = "authentication_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol2 in error;
    }
    /**
   * Creates a contextual error message when authentication fails
   */ static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause }) {
        let contextualMessage;
        if (apiKeyProvided) {
            contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
        } else if (oidcTokenProvided) {
            contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
        } else {
            contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
        }
        return new _GatewayAuthenticationError({
            message: contextualMessage,
            statusCode,
            cause
        });
    }
};
// src/errors/gateway-invalid-request-error.ts
var name2 = "GatewayInvalidRequestError";
var marker3 = `vercel.ai.gateway.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3, _b3;
var GatewayInvalidRequestError = class extends (_b3 = GatewayError, _a3 = symbol3, _b3) {
    constructor({ message = "Invalid request", statusCode = 400, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a3] = true;
        // used in isInstance
        this.name = name2;
        this.type = "invalid_request_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol3 in error;
    }
};
// src/errors/gateway-rate-limit-error.ts
var name3 = "GatewayRateLimitError";
var marker4 = `vercel.ai.gateway.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4, _b4;
var GatewayRateLimitError = class extends (_b4 = GatewayError, _a4 = symbol4, _b4) {
    constructor({ message = "Rate limit exceeded", statusCode = 429, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a4] = true;
        // used in isInstance
        this.name = name3;
        this.type = "rate_limit_exceeded";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol4 in error;
    }
};
;
;
var name4 = "GatewayModelNotFoundError";
var marker5 = `vercel.ai.gateway.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var modelNotFoundParamSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })));
var _a5, _b5;
var GatewayModelNotFoundError = class extends (_b5 = GatewayError, _a5 = symbol5, _b5) {
    constructor({ message = "Model not found", statusCode = 404, modelId, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a5] = true;
        // used in isInstance
        this.name = name4;
        this.type = "model_not_found";
        this.modelId = modelId;
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol5 in error;
    }
};
// src/errors/gateway-internal-server-error.ts
var name5 = "GatewayInternalServerError";
var marker6 = `vercel.ai.gateway.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6, _b6;
var GatewayInternalServerError = class extends (_b6 = GatewayError, _a6 = symbol6, _b6) {
    constructor({ message = "Internal server error", statusCode = 500, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a6] = true;
        // used in isInstance
        this.name = name5;
        this.type = "internal_server_error";
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol6 in error;
    }
};
// src/errors/gateway-response-error.ts
var name6 = "GatewayResponseError";
var marker7 = `vercel.ai.gateway.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7, _b7;
var GatewayResponseError = class extends (_b7 = GatewayError, _a7 = symbol7, _b7) {
    constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause } = {}){
        super({
            message,
            statusCode,
            cause
        });
        this[_a7] = true;
        // used in isInstance
        this.name = name6;
        this.type = "response_error";
        this.response = response;
        this.validationError = validationError;
    }
    static isInstance(error) {
        return GatewayError.hasMarker(error) && symbol7 in error;
    }
};
;
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
    const parseResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
        value: response,
        schema: gatewayErrorResponseSchema
    });
    if (!parseResult.success) {
        return new GatewayResponseError({
            message: `Invalid error response format: ${defaultMessage}`,
            statusCode,
            response,
            validationError: parseResult.error,
            cause
        });
    }
    const validatedResponse = parseResult.value;
    const errorType = validatedResponse.error.type;
    const message = validatedResponse.error.message;
    switch(errorType){
        case "authentication_error":
            return GatewayAuthenticationError.createContextualError({
                apiKeyProvided: authMethod === "api-key",
                oidcTokenProvided: authMethod === "oidc",
                statusCode,
                cause
            });
        case "invalid_request_error":
            return new GatewayInvalidRequestError({
                message,
                statusCode,
                cause
            });
        case "rate_limit_exceeded":
            return new GatewayRateLimitError({
                message,
                statusCode,
                cause
            });
        case "model_not_found":
            {
                const modelResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
                    value: validatedResponse.error.param,
                    schema: modelNotFoundParamSchema
                });
                return new GatewayModelNotFoundError({
                    message,
                    statusCode,
                    modelId: modelResult.success ? modelResult.value.modelId : void 0,
                    cause
                });
            }
        case "internal_server_error":
            return new GatewayInternalServerError({
                message,
                statusCode,
                cause
            });
        default:
            return new GatewayInternalServerError({
                message,
                statusCode,
                cause
            });
    }
}
var gatewayErrorResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
            param: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].unknown().nullish(),
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number()
            ]).nullish()
        })
    })));
// src/errors/as-gateway-error.ts
function asGatewayError(error, authMethod) {
    var _a8;
    if (GatewayError.isInstance(error)) {
        return error;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$2$2e$0$2e$0$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
        return createGatewayErrorFromResponse({
            response: extractApiCallResponse(error),
            statusCode: (_a8 = error.statusCode) != null ? _a8 : 500,
            defaultMessage: "Gateway request failed",
            cause: error,
            authMethod
        });
    }
    return createGatewayErrorFromResponse({
        response: {},
        statusCode: 500,
        defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
        cause: error,
        authMethod
    });
}
// src/errors/extract-api-call-response.ts
function extractApiCallResponse(error) {
    if (error.data !== void 0) {
        return error.data;
    }
    if (error.responseBody != null) {
        try {
            return JSON.parse(error.responseBody);
        } catch (e) {
            return error.responseBody;
        }
    }
    return {};
}
;
;
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safeValidateTypes"])({
        value: headers[GATEWAY_AUTH_METHOD_HEADER],
        schema: gatewayAuthMethodSchema
    });
    return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal("api-key"),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal("oidc")
    ])));
;
;
var GatewayFetchMetadata = class {
    constructor(config){
        this.config = config;
    }
    async getAvailableModels() {
        try {
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${this.config.baseURL}/config`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayAvailableModelsResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
    async getCredits() {
        try {
            const baseUrl = new URL(this.config.baseURL);
            const { value } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
                url: `${baseUrl.origin}/v1/credits`,
                headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers()),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayCreditsResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                fetch: this.config.fetch
            });
            return value;
        } catch (error) {
            throw await asGatewayError(error);
        }
    }
};
var gatewayAvailableModelsResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        models: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
            description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
            pricing: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                output: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                input_cache_read: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish(),
                input_cache_write: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().nullish()
            }).transform(({ input, output, input_cache_read, input_cache_write })=>({
                    input,
                    output,
                    ...input_cache_read ? {
                        cachedInputTokens: input_cache_read
                    } : {},
                    ...input_cache_write ? {
                        cacheCreationInputTokens: input_cache_write
                    } : {}
                })).nullish(),
            specification: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                specificationVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal("v2"),
                provider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
            }),
            modelType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
                "language",
                "embedding",
                "image"
            ]).nullish()
        }))
    })));
var gatewayCreditsResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        balance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        total_used: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }).transform(({ balance, total_used })=>({
            balance,
            totalUsed: total_used
        }))));
;
;
var GatewayLanguageModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v2";
        this.supportedUrls = {
            "*/*": [
                /.*/
            ]
        };
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs(options) {
        const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
        return {
            args: this.maybeEncodeFileParts(optionsWithoutSignal),
            warnings: []
        };
    }
    async doGenerate(options) {
        const { args, warnings } = await this.getArgs(options);
        const { abortSignal } = options;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: args,
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                ...responseBody,
                request: {
                    body: args
                },
                response: {
                    headers: responseHeaders,
                    body: rawResponse
                },
                warnings
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    async doStream(options) {
        const { args, warnings } = await this.getArgs(options);
        const { abortSignal } = options;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { value: response, responseHeaders } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: args,
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                stream: response.pipeThrough(new TransformStream({
                    start (controller) {
                        if (warnings.length > 0) {
                            controller.enqueue({
                                type: "stream-start",
                                warnings
                            });
                        }
                    },
                    transform (chunk, controller) {
                        if (chunk.success) {
                            const streamPart = chunk.value;
                            if (streamPart.type === "raw" && !options.includeRawChunks) {
                                return;
                            }
                            if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                                streamPart.timestamp = new Date(streamPart.timestamp);
                            }
                            controller.enqueue(streamPart);
                        } else {
                            controller.error(chunk.error);
                        }
                    }
                })),
                request: {
                    body: args
                },
                response: {
                    headers: responseHeaders
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    isFilePart(part) {
        return part && typeof part === "object" && "type" in part && part.type === "file";
    }
    /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */ maybeEncodeFileParts(options) {
        for (const message of options.prompt){
            for (const part of message.content){
                if (this.isFilePart(part)) {
                    const filePart = part;
                    if (filePart.data instanceof Uint8Array) {
                        const buffer = Uint8Array.from(filePart.data);
                        const base64Data = Buffer.from(buffer).toString("base64");
                        filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
                    }
                }
            }
        }
        return options;
    }
    getUrl() {
        return `${this.config.baseURL}/language-model`;
    }
    getModelConfigHeaders(modelId, streaming) {
        return {
            "ai-language-model-specification-version": "2",
            "ai-language-model-id": modelId,
            "ai-language-model-streaming": String(streaming)
        };
    }
};
;
;
var GatewayEmbeddingModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v2";
        this.maxEmbeddingsPerCall = 2048;
        this.supportsParallelCalls = true;
    }
    get provider() {
        return this.config.provider;
    }
    async doEmbed({ values, headers, abortSignal, providerOptions }) {
        var _a8;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    input: values.length === 1 ? values[0] : values,
                    ...providerOptions ? {
                        providerOptions
                    } : {}
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayEmbeddingResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                embeddings: responseBody.embeddings,
                usage: (_a8 = responseBody.usage) != null ? _a8 : void 0,
                providerMetadata: responseBody.providerMetadata,
                response: {
                    headers: responseHeaders,
                    body: rawValue
                }
            };
        } catch (error) {
            throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/embedding-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-embedding-model-specification-version": "2",
            "ai-model-id": this.modelId
        };
    }
};
var gatewayEmbeddingResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazyValidator"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        embeddings: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number())),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
            tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number()
        }).nullish(),
        providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].unknown())).optional()
    })));
;
;
var GatewayImageModel = class {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v2";
        // Set a very large number to prevent client-side splitting of requests
        this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
    }
    get provider() {
        return this.config.provider;
    }
    async doGenerate({ prompt, n, size, aspectRatio, seed, providerOptions, headers, abortSignal }) {
        var _a8;
        const resolvedHeaders = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers());
        try {
            const { responseHeaders, value: responseBody, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
                url: this.getUrl(),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.o11yHeaders)),
                body: {
                    prompt,
                    n,
                    ...size && {
                        size
                    },
                    ...aspectRatio && {
                        aspectRatio
                    },
                    ...seed && {
                        seed
                    },
                    ...providerOptions && {
                        providerOptions
                    }
                },
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(gatewayImageResponseSchema),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
                    errorSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any(),
                    errorToMessage: (data)=>data
                }),
                ...abortSignal && {
                    abortSignal
                },
                fetch: this.config.fetch
            });
            return {
                images: responseBody.images,
                // Always base64 strings from server
                warnings: (_a8 = responseBody.warnings) != null ? _a8 : [],
                providerMetadata: responseBody.providerMetadata,
                response: {
                    timestamp: /* @__PURE__ */ new Date(),
                    modelId: this.modelId,
                    headers: responseHeaders
                }
            };
        } catch (error) {
            throw asGatewayError(error, await parseAuthMethod(resolvedHeaders));
        }
    }
    getUrl() {
        return `${this.config.baseURL}/image-model`;
    }
    getModelConfigHeaders() {
        return {
            "ai-image-model-specification-version": "2",
            "ai-model-id": this.modelId
        };
    }
};
var providerMetadataEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].unknown()).optional()
}).catchall(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].unknown());
var gatewayImageResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()),
    // Always base64 strings over the wire
    warnings: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal("other"),
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).optional(),
    providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(), providerMetadataEntrySchema).optional()
});
;
;
async function getVercelRequestId() {
    var _a8;
    return (_a8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$oidc$40$3$2e$0$2e$5$2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContext"])().headers) == null ? void 0 : _a8["x-vercel-id"];
}
;
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "2.0.18" : "TURBOPACK unreachable";
// src/gateway-provider.ts
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
    var _a8, _b8;
    let pendingMetadata = null;
    let metadataCache = null;
    const cacheRefreshMillis = (_a8 = options.metadataCacheRefreshMillis) != null ? _a8 : 1e3 * 60 * 5;
    let lastFetchTime = 0;
    const baseURL = (_b8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL)) != null ? _b8 : "https://ai-gateway.vercel.sh/v1/ai";
    const getHeaders = async ()=>{
        const auth = await getGatewayAuthToken(options);
        if (auth) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
                Authorization: `Bearer ${auth.token}`,
                "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
                [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
                ...options.headers
            }, `ai-sdk/gateway/${VERSION}`);
        }
        throw GatewayAuthenticationError.createContextualError({
            apiKeyProvided: false,
            oidcTokenProvided: false,
            statusCode: 401
        });
    };
    const createO11yHeaders = ()=>{
        const deploymentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_DEPLOYMENT_ID"
        });
        const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_ENV"
        });
        const region = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
            settingValue: void 0,
            environmentVariableName: "VERCEL_REGION"
        });
        return async ()=>{
            const requestId = await getVercelRequestId();
            return {
                ...deploymentId && {
                    "ai-o11y-deployment-id": deploymentId
                },
                ...environment && {
                    "ai-o11y-environment": environment
                },
                ...region && {
                    "ai-o11y-region": region
                },
                ...requestId && {
                    "ai-o11y-request-id": requestId
                }
            };
        };
    };
    const createLanguageModel = (modelId)=>{
        return new GatewayLanguageModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    const getAvailableModels = async ()=>{
        var _a9, _b9, _c;
        const now = (_c = (_b9 = (_a9 = options._internal) == null ? void 0 : _a9.currentDate) == null ? void 0 : _b9.call(_a9).getTime()) != null ? _c : Date.now();
        if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
            lastFetchTime = now;
            pendingMetadata = new GatewayFetchMetadata({
                baseURL,
                headers: getHeaders,
                fetch: options.fetch
            }).getAvailableModels().then((metadata)=>{
                metadataCache = metadata;
                return metadata;
            }).catch(async (error)=>{
                throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
            });
        }
        return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
    };
    const getCredits = async ()=>{
        return new GatewayFetchMetadata({
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        }).getCredits().catch(async (error)=>{
            throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
        });
    };
    const provider = function(modelId) {
        if (new.target) {
            throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
        }
        return createLanguageModel(modelId);
    };
    provider.getAvailableModels = getAvailableModels;
    provider.getCredits = getCredits;
    provider.imageModel = (modelId)=>{
        return new GatewayImageModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    provider.languageModel = createLanguageModel;
    provider.textEmbeddingModel = (modelId)=>{
        return new GatewayEmbeddingModel(modelId, {
            provider: "gateway",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            o11yHeaders: createO11yHeaders()
        });
    };
    return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
    const apiKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$18_zod$40$4$2e$1$2e$13$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
        settingValue: options.apiKey,
        environmentVariableName: "AI_GATEWAY_API_KEY"
    });
    if (apiKey) {
        return {
            token: apiKey,
            authMethod: "api-key"
        };
    }
    try {
        const oidcToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NIMO$2f$node_modules$2f2e$pnpm$2f40$vercel$2b$oidc$40$3$2e$0$2e$5$2f$node_modules$2f40$vercel$2f$oidc$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getVercelOidcToken"])();
        return {
            token: oidcToken,
            authMethod: "oidc"
        };
    } catch (e) {
        return null;
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=6f591__pnpm_70bed44a._.js.map