const AWS = require('aws-sdk');

module.exports = {
    dynamoDB: new AWS.DynamoDB.DocumentClient(),
    TABLA_PERSONAS: process.env.TABLA_PERSONAS
}