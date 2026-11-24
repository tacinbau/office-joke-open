import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "The office printer has jammed on every deadline since 2019, so HR gave it Employee of the Month — turns out the only reliable colleague here runs on toner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
