// Dad Joke Showdown entry: writes one original dad joke to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I refused to turn the thermostat up — money doesn't grow on trees. So I turned it down two degrees and called it cool parenting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
