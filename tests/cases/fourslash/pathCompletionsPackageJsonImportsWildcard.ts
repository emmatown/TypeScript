/// <reference path="fourslash.ts" />

// @module: nodenext

// @Filename: /package.json
//// {
////   "imports": {
////     "#src/*": "./src/*.ts",
////   }
//// }

// @Filename: /index.ts
//// import { } from "/**/";

// @Filename: /src/a.ts
//// export const a = true;

// @Filename: /src/b.ts
//// export const b = true;

// @Filename: /src/c/d.ts
//// export const d = true;


verify.completions({
  marker: "",
  isNewIdentifierLocation: true,
  exact: [
    { name: "#src", kind: "directory", kindModifiers: "" },
  ]
});

edit.insert("#src/");

verify.completions({
  isNewIdentifierLocation: true,
  exact: [
    { name: "a", kind: "script", kindModifiers: "" },
    { name: "b", kind: "script", kindModifiers: "" },
    { name: "c", kind: "directory", kindModifiers: "" },
  ]
});
