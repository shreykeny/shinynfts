const lp_data = require('./veryveryfinalOutput.json');

const array = require('./final.json');

function isCherries(fruit) {
    return fruit.ID;
}

lp_data.forEach((element) => {
    console.log("e", element.ID);
    let i = array.find((s) => s === element.ID);
    console.log(i)
})