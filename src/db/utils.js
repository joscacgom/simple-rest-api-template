const fs = require('fs');

const saveToDb = (data) => {
    fs.writeFileSync("./src/db/db.json", JSON.stringify(data,null,2),
    {encoding: 'utf8'});
};

module.exports={
    saveToDb
}