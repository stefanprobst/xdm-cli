# xdm-cli

Same as [remark-cli](https://github.com/remarkjs/remark/tree/main/packages/remark-cli), but with plugins for handling MDX preconfigured.

I am using this for linting MDX files.

## How to use

Configure remark `plugins` and `settings` via `.xdmrc`, `.xdmrc.js` files, or via `xdmConfig` field in `package.json`. To reuse an existing `remark` config (`.remarkrc`, `.remarkrc.js` files, or `remarkConfig` field), pass the `--remark` flag.
