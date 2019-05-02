const inquirer = require('inquirer');
const ContactController = require("./ContactController");


 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
       {
         type: "list",
         name: "mainMenuChoice",
         message: "Please choose from an option below: ",
         choices: [
           "Add new contact",
           "Exit"
         ]
       }
     ];
     this.book = new ContactController();
   }

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
            this.addContact();
            break;
         case "Get date":
            this.getDate();
            break;
         case "Remind me":
            this.remindMe();
            break;
         case "Exit":
            this.exit();
         default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch((err) => {
        console.log(err);
      });
   }

   clear(){
     console.log("\x1Bc");
   }

   addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount() {
    return this.contacts.length;
  }

  getDate() {
    this.clear();
    let x = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(x);
    this.main();
  }

  remindMe() {
    this.clear();
    console.log("Learning is a lifelong pursuit.");
    this.main();
  }
 }
