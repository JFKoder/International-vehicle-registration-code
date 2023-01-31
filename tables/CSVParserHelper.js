/**
 * This is just a Helper to Parse the CSV to a JSON File
 * 
 */

const lineReader = require('line-reader');
const fs = require('fs');

let collects = []

lineReader.eachLine('CarCountryCodes.csv', function(line, last) {
  //console.log(`Line from file: ${line}`);
  let l = line.replace(/\n|\r/g, "").split(";")
  let cObj = {
    Code:l[0],
    Country: l[1].substring(1)
  }
  collects.push(cObj)
  if(last) {
    console.log('Last line printed. Write to JSON');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    let data = JSON.stringify(collects);
    fs.writeFileSync('CarCountryCodes.json', data);
  }
});


   
