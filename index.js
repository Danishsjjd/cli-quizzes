#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
import figlet from "figlet";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
let playerName;

async function welcome() {
	const glitch = chalkAnimation.glitch("Welcome to quize game.");
	await sleep();
	await sleep();
	glitch.stop();
	const rainbow = chalkAnimation.rainbow("Hi! I'm Danish Sajjad");
	await sleep();
	rainbow.stop();
}

async function askName() {
	const answer = await inquirer.prompt({
		name: "Player_Name",
		type: "input",
		message: "What is your name",
		default() {
			return "Player";
		},
	});
	playerName = answer.Player_Name;
	console.log(`
${playerName} currently I'm processing on your computer
${chalk.bgBlue("Keep in mind:")}
    If you give wrong answer I'll ${chalk.bgRed("kick out")} you \n`);
	const spinner = createSpinner("loading").start();
	await sleep();
	spinner.stop();
}

async function handleAnswer(isCorrect) {
	const spinner = createSpinner("Checking...").start();
	await sleep();
	if (isCorrect) {
		spinner.success({ text: `${chalk.bgBlue(playerName + "!")} Good job` });
	} else {
		spinner.error({
			text: `${playerName} your answer is wrong. so, as I said you are ${chalk.bgRed(
				"kick out"
			)}`,
		});
		process.exit(1);
	}
}
function good(){
    console.clear()
    const msg = `${playerName} confirmed jannati h. confirmed jannati h`
    figlet(msg, (err, data)=>{
        console.log(gradient.pastel.multiline(data))
    })
}
async function Q1() {
	const answer = await inquirer.prompt({
		name: "question_1",
		type: "list",
		message: "The first Surah in the Holy Quran is?",
		choices: [
			"1. Surat-AL-Fatihah",
			"2. Surat-AL-Bakqarah",
			"3. Surat-AL-Imran",
			"4. Surat-AL-Ikhlas",
		],
	});
	return handleAnswer(answer.question_1 === "1. Surat-AL-Fatihah");
}
async function Q2() {
	const answer = await inquirer.prompt({
		name: "question_2",
		type: "list",
		message: "The shortest Surah in the Holy Quran is?",
		choices: [
			"1. Surat-AN-Nisa",
			"2. Surat-AL-Ahzab",
			"3. Surat-AL-bakqarah",
			"4. Surat-AL-Kusar",
		],
	});
	return handleAnswer(answer.question_2 === "4. Surat-AL-Kusar");
}
async function Q3() {
	const answer = await inquirer.prompt({
		name: "question_3",
		type: "list",
		message: "The name of forth Kalimah is?",
		choices: [
			"1. Kalima Tayyaba",
			"2. Kalima Tauheed",
			"3. Kalima Tamjeed",
			"4. Kalima Shahadat",
		],
	});
	return handleAnswer(answer.question_3 === "2. Kalima Tauheed");
}

await welcome();
await askName();
await Q1();
await Q2();
await Q3();
good()