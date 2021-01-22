const { TABLA_PERSONAS, dynamoDB } = require('./commons');


module.exports = () => {
    console.log("Listando personas.");
    const params = {
        TableName: TABLA_PERSONAS,
    };
    return dynamoDB.scan(params).promise()
        .catch(error => { throw new Error(error) });
};

