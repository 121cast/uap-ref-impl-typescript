# uap-ref-impl-typescript 

This is a fork of the UAParser Javascript library [uap-ref-impl](https://github.com/ua-parser/uap-ref-impl) converted to TypeScript.

### Implementation difference

This fork handles replacement values of empty strings (`''`) differently to the `uap-ref-impl` as the [specification is ambigious about empty strings](https://github.com/ua-parser/uap-core/issues/510).

This fork aligns with the [C# implementation](https://github.com/ua-parser/uap-csharp) which carries a replacement value of empty strings (`''`) to the output, rather than treating it as a falsey value and falling back to the default value (usually `'Other'` or `null`).

### Install
```
$ npm install github:121cast/uap-ref-impl-typescript
```
