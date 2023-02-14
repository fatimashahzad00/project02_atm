import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawl"],
        message: "Select your transaction: ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Select your amount: ",
        when(answers) {
            return answers.transactionType == "Withdrawl";
        },
    },
]);
// console.log(answers);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is : ", remaining);
    }
    else {
        console.log("Insufficient balance");
    }
}
