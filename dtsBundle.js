import dts from "dts-bundle";

dts.bundle({
  name: "PACKAGE_NAME",
  main: "dist/src/index.d.ts",
  out: "../index.d.ts",
});
