//A simple tool to generate a private key while offline

var keythereum = require("keythereum");

var dk = keythereum.create();

var keyObject = keythereum.dump('password', dk.privateKey, dk.salt, dk.iv);

var computePrivateKey=keythereum.recover('password',keyObject);
var privateKey = computePrivateKey.toString('hex');

console.log('Address:                    '+ keyObject.address);
console.log('PK: '+privateKey);