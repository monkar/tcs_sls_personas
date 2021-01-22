const { TABLA_PERSONAS, dynamoDB } = require('./commons');

module.exports = (id) => {
    console.log(`Obteniendo persona: ${id}.`);
    const params = {
        TableName: TABLA_PERSONAS,
        Key: {
            id: id
        }
    };
    return dynamoDB.get(params).promise()
        .catch(error => { throw new Error(error) });
};

