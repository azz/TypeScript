// @noImplicitReferences: true
// @declaration: true
// @typeRoots: /types
// @traceResolution: true
// @currentDirectory: /

// @filename: /types/lib/index.d.ts
declare namespace NS {
    export interface I {}
}

// @filename: /app.ts
/// <reference types="lib" />
interface J extends NS.I {}
