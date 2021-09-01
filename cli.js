#!/usr/bin/env node

import { createRequire } from "module";
import { args } from "unified-args";
import { remark } from "remark";
import { remarkMarkAndUnravel } from "xdm/lib/plugin/remark-mark-and-unravel.js";
import { remarkMdx } from "xdm/lib/plugin/remark-mdx.js";

const require = createRequire(import.meta.url);
const proc = require("remark/package.json");
const cli = require("./package.json");

const processor = remark().use(remarkMdx).use(remarkMarkAndUnravel);
const extensions = ["mdx"];

args({
  processor: processor,
  name: proc.name,
  description: cli.description,
  version: [
    proc.name + ": " + proc.version,
    cli.name + ": " + cli.version,
  ].join(", "),
  pluginPrefix: proc.name,
  packageField: proc.name + "Config",
  rcName: "." + proc.name + "rc",
  ignoreName: "." + proc.name + "ignore",
  extensions,
});
