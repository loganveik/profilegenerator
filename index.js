const generate = require("./profgen");
// ---------------------------------------
const axios = require("axios");
const inquirer = require("inquirer");
// ---------------------------------------
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// ---------------------------------------
// const pdf = require('html-pdf');
// const html = generate(data);
// const options = { format: 'Letter' };
// -----------------------------------------------------
async function getInfo(){
    try {
        let { username } = await inquirer.prompt({
            message: "Enter your Github username:",
            name: "username"
        });
        let { color } = await inquirer.prompt({
            message: "Enter your favorite color:",
            name: "color"
        });
        let { data } = await axios.get(
            `https://api.github.com/users/${username}`
        );
        writeFileAsync('new.html', generate(data,color), function(err){
            if(err){
                console.log(err);
            } else{
                console.log("success");
            }
        });
        // pdf.create(html, options).toFile('./githubprofile.pdf', function(err, res) {
        //     if (err) return console.log(err);
        //     console.log(res); // { filename: '/app/businesscard.pdf' }
        //   });
    }
    catch(err){
        console.log(err)
    }
};
getInfo();