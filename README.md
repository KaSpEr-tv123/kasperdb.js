# kasperdb.js

The database is easy to use, just as simple as possible

# Mini Docs

## Creating an Instance of a Class

```javascript
const { DB } = require("kasperdb");
const db = new DB({filename: "database/example", extension: ".db"});
```

## Functions of class
### save data to file
```javascript
db.saveData("money", {username: "example username", count: 0});
```
### get data from file
1 way:
```javascript
const data = db.getData(); \\ get full data from file
console.log(data.money.count);
```
2 way:
```javascript
const data = db.getData("money"); \\ get data from kay
console.log(data.count);
```
