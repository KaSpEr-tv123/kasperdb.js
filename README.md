# kasperdb

`kasperdb` is a simple and easy-to-use database library for Node.js.

## Installation

```bash
npm install kasperdb
```
## Usage

```javascript
const { DB } = require("kasperdb");
const db = new DB({ filename: "database/example", extension: ".db" });
```
## Functions
### Save Data to File
```javascript
db.saveData("money", { username: "example username", count: 0 });
```
### Get Data from File 

1. Get full data from file:
```javascript
const data = db.getData();
console.log(data.money.count);
```

2. Get data by key:
```javascript
const data = db.getData("money");
console.log(data.count);
```
## Dependencies
- [fs](https://nodejs.org/api/fs.html): File system module.
- [msgpack-lite](https://www.npmjs.com/package/msgpack-lite): MessagePack implementation for Node.js.
