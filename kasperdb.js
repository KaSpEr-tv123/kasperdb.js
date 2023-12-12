const fs = require('fs');
const msgpack = require('msgpack-lite');

class DB {
  constructor(args) {
    if (args.extension) {
      this.filename = args.filename + args.extension;
    } else {
      this.filename = args.filename + ".db"
    }
    
    if (args.data) {
      const binaryData = msgpack.encode(args.data);
      fs.writeFileSync(this.filename, binaryData);
    }
  }

  on(event, func) {
    if (event == "getData") this.onGetData = func;
    if (event == "saveData") this.onSaveData = func;
  }

  saveData(key, value) {
    let data = this.getData();
    data[key] = value;
    const binaryData = msgpack.encode(data);
    fs.writeFileSync(this.filename, binaryData);
    if (this.onSaveData) this.onSaveData({
        key: key,
        value: value,
        filename: this.filename
      });
  }

  getData(key=null) {
    const readBinaryData = fs.readFileSync(this.filename);
    const decodedObject = msgpack.decode(readBinaryData);
    if (key != null) {
      if (this.onGetData) this.onGetData({
        key: key,
        data: decodedObject[key],
        filename: this.filename
      });
      return decodedObject[key]
    } else {
      if (this.onGetData) this.onGetData({
        key: "[null]",
        data: decodedObject,
        filename: this.filename
      });
      return decodedObject
    }
  }
}

module.exports.DB = DB