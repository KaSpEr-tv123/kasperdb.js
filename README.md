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

## Event Handling with `on` Function
### Listen for Data Retrieval Event
```javascript
db.on("getData", (eventData) => {
  console.log(`Data retrieved from key ${eventData.key} in file ${eventData.filename}`);
});
```
Attributes in `eventData` for event `getData`:
- key
- data
- filename

### Listen for Data Save Event
```javascript
db.on("saveData", (eventData) => {
  console.log(`Data saved with key ${eventData.key} in file ${eventData.filename}`);
});
```
Attributes in `eventData` for event `saveData`:
- key
- value
- filename

## Dependencies
- [fs](https://nodejs.org/api/fs.html): File system module.
- [msgpack-lite](https://www.npmjs.com/package/msgpack-lite): MessagePack implementation for Node.js.