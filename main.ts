import { writeFileSync, mkdirSync } from "node:fs";

// A cron job hands in its notice. It has fired every night at 2 a.m. since
// March, and this is the single line it leaves on the manager's desk.
// The voice stays flat and tired all the way through: the joke is the turn
// at the end of the line, not a pun on the job title.
const OPENING = "I quit.";
const YEARS_OF_SERVICE = "I ran your 2 a.m. backup every night for three years,";
const THE_TURN = "and the one minute I was late is the only time you ever noticed me.";
const LETTER = [OPENING, YEARS_OF_SERVICE, THE_TURN].join(" ");
const MAX_CHARS = 140;
const LETTER_CHARS = [...LETTER].length;

if (LETTER_CHARS > MAX_CHARS) {
  throw new Error(`Letter is ${LETTER_CHARS} characters, over the ${MAX_CHARS} limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
