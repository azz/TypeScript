//// [tests/cases/compiler/typeReferenceDirectives15.ts] ////

//// [index.d.ts]
declare namespace NS {
    export interface I {}
}

//// [app.ts]
/// <reference types="lib" />
interface J extends NS.I {}


//// [app.js]


//// [app.d.ts]
/// <reference types="lib" />
interface J extends NS.I {
}
