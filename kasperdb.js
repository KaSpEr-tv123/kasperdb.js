const fs = require('fs');
const msgpack = require('msgpack-lite');

class DB {
  constructor(args) {
    this.filename = args.filename + args.extension;
    
    if (args.data) {
      const binaryData = msgpack.encode(args.data);
      fs.writeFileSync(this.filename, binaryData);
    }
  }

  saveData(kay, value) {
    let data = this.getData();
    data[kay] = value;
    const binaryData = msgpack.encode(data);
    fs.writeFileSync(this.filename, binaryData);
  }

  getData(key=null) {
    const readBinaryData = fs.readFileSync(this.filename);
    const decodedObject = msgpack.decode(readBinaryData);
    if (key != null) {
      return decodedObject[key]
    } else {
      return decodedObject
    }
  }
}

module.exports.DB = DB