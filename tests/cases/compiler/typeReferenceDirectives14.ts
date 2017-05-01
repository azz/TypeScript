// @noImplicitReferences: true
// @declaration: true
// @typeRoots: /types
// @traceResolution: true
// @currentDirectory: /

// @filename: /types/lib/indirect.d.ts
declare interface I {}

// @filename: /types/lib/index.d.ts
/// <reference path="indirect.d.ts" />

// @filename: /app.ts
/// <reference types="lib" />
interface J extends I {}