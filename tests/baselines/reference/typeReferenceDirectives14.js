//// [tests/cases/compiler/typeReferenceDirectives14.ts] ////

//// [indirect.d.ts]
declare interface I {}

//// [index.d.ts]
/// <reference path="indirect.d.ts" />

//// [app.ts]
/// <reference types="lib" />
interface J extends I {}

//// [app.js]


//// [app.d.ts]
/// <reference types="lib" />
interface J extends I {
}
