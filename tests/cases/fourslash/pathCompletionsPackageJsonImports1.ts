/// <reference path="fourslash.ts" />

// @module: nodenext

// @Filename: /package.json
//// {
////   "imports": {
////     "#a": "./a.js",
////   }
//// }

// @Filename: /index.ts
//// import { } from "/**/";

// @Filename: /a.ts
//// export const a = true;

verify.completions({
  marker: "",
  isNewIdentifierLocation: true,
  exact: [
    { name: "#a", kind: "script", kindModifiers: "" },
  ]
});
