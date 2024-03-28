#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.blueBright.italic("Wellcome To My ATM"));
let myBalance = 10000; // 💸
console.log(chalk.magentaBright.bold(`your current balance is ${myBalance} 💸`));
let mypinCode = 9876;

async function atm_func(){
let pinCode = await inquirer.prompt([
	{
		type: "number",
		message: "enter your pin code",
		name: "mypin"
	}
])
if (pinCode.mypin === mypinCode) {
	console.log(chalk.redBright("Correct pin code."))

	// Select options//
	let SelectOptions = await inquirer.prompt([
		{
			type: "list",
			message: "select one option",
			name: "options",
			choices: ["withdraw", "check balance", "fast cash"]
		}
	]);
	//WITHDRAW//
	if (SelectOptions.options === "withdraw") {
		let myAmount = await inquirer.prompt([
			{
				type: "number",
				message: "enter your amount",
				name: "amount"
			}
		]);
		if (myAmount.amount < myBalance && myAmount.amount > 0) {
			console.log(chalk.blue(`\nWithdraw $${myAmount.amount}💸 from your account.`));
			console.log(chalk.magenta(`\nYour Current Balance is: $${myBalance - myAmount.amount}💸`));
		}
		 else {
			console.log(chalk.red.bold(`\n⚠️ Insufficient balance or Invalid Amount.`));
		}
	}
	//CHECK BALANCE//
	else if (SelectOptions.options === "check balance") {
		console.log(chalk.magentaBright.bold(`yor current balance is ${myBalance}💸`))
	}
	//FAST CASH//
	if (SelectOptions.options === "fast cash") {
		let myAmount = await inquirer.prompt(
			[
				{
					type: "list",
					message: "enter your amount",
					name: "amount",
					choices: ["2000", "5000", "10000"]
				}
			]
		);
		myBalance -= myAmount.amount
		console.log(chalk.magentaBright.bold(` your remaining balance is ${myBalance} 💸`))
	}

}

else {
	console.log(chalk.redBright("enter your correct pin code."))
};
}
atm_func();