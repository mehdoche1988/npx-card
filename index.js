#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Mehdi Semlali"),
    handle: chalk.white("Mehdoche1988"),
    work: chalk.white("Webdev junior at BeCode.org"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("semmehdi"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~mehdoche1988"),
    github: chalk.gray("https://github.com/") + chalk.green("mehdoche1988"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mehdi-semlali-45581a76"),
    web: chalk.cyan("not yet"),
    npx: chalk.red("npx") + " " + chalk.white("mehdoche1988"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);