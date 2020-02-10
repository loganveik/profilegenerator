const generate = require("./profgen");
// ---------------------------------------
const axios = require("axios");
const inquirer = require("inquirer");
// ---------------------------------------
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// ---------------------------------------
const pdf = require('html-pdf');
const options = {format: 'Letter'}
// const html = fs.readFileSync('./new.html', 'utf8');
// -----------------------------------------------------
async function getInfo(){
    try {
        let { username } = await inquirer.prompt({
            message: "Enter your Github username:",
            name: "username"
        });
        let { data } = await axios.get(
            `https://api.github.com/users/${username}`
        );
        writeFileAsync('new.html', generate(data), function(err){
            if(err){
                console.log(err);
            } else{
                console.log("success");
            }
        });
        // pdf.create(html, options).toFile('./githubProfileInfo.pdf', function(err, res) {
        //     if (err) return console.log(err);
        //     console.log(res);
        // });
    }
    catch(err){
        console.log(err)
    }
};
getInfo();