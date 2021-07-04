#!/usr/bin/env node

import { createRequire } from "module";
import start from "unified-args";
import remark from "remark";
import { remarkMarkAndUnravel } from "xdm/lib/plugin/remark-mark-and-unravel.js";
import { remarkMdx } from "xdm/lib/plugin/remark-mdx.js";

const require = createRequire(import.meta.url);
const proc = require("xdm/package.json");
const cli = require("./package.json");

const processor = remark().use(remarkMdx).use(remarkMarkAndUnravel);
const extensions = ["mdx"];

let name = proc.name;
process.argv = process.argv.filter((arg) => {
  if (arg === "--remark") {
    name = "remark";
    return false;
  }
  return true;
});

start({
  processor: processor,
  name: proc.name,
  description: cli.description,
  version: [
    proc.name + ": " + proc.version,
    cli.name + ": " + cli.version,
  ].join(", "),
  pluginPrefix: name,
  presetPrefix: name + "-preset",
  packageField: name + "Config",
  rcName: "." + name + "rc",
  ignoreName: "." + name + "ignore",
  extensions: extensions,
});
