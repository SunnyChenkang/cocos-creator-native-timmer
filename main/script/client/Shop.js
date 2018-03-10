//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES
import Thrift from '../commons/net/thrift'

var Shop_listPropTradingItems_args = function(args) {
  this.tradingType = null;
  if (args) {
    if (args.tradingType !== undefined && args.tradingType !== null) {
      this.tradingType = args.tradingType;
    }
  }
};
Shop_listPropTradingItems_args.prototype = {};
Shop_listPropTradingItems_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.tradingType = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Shop_listPropTradingItems_args.prototype.write = function(output) {
  output.writeStructBegin('Shop_listPropTradingItems_args');
  if (this.tradingType !== null && this.tradingType !== undefined) {
    output.writeFieldBegin('tradingType', Thrift.Type.STRING, 1);
    output.writeString(this.tradingType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Shop_listPropTradingItems_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
Shop_listPropTradingItems_result.prototype = {};
Shop_listPropTradingItems_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Shop_listPropTradingItems_result.prototype.write = function(output) {
  output.writeStructBegin('Shop_listPropTradingItems_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Shop_exchangeProp_args = function(args) {
  this.uid = null;
  this.propNum = null;
  this.tradingType = null;
  if (args) {
    if (args.uid !== undefined && args.uid !== null) {
      this.uid = args.uid;
    }
    if (args.propNum !== undefined && args.propNum !== null) {
      this.propNum = args.propNum;
    }
    if (args.tradingType !== undefined && args.tradingType !== null) {
      this.tradingType = args.tradingType;
    }
  }
};
Shop_exchangeProp_args.prototype = {};
Shop_exchangeProp_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.uid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.propNum = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.tradingType = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Shop_exchangeProp_args.prototype.write = function(output) {
  output.writeStructBegin('Shop_exchangeProp_args');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.I32, 1);
    output.writeI32(this.uid);
    output.writeFieldEnd();
  }
  if (this.propNum !== null && this.propNum !== undefined) {
    output.writeFieldBegin('propNum', Thrift.Type.I32, 2);
    output.writeI32(this.propNum);
    output.writeFieldEnd();
  }
  if (this.tradingType !== null && this.tradingType !== undefined) {
    output.writeFieldBegin('tradingType', Thrift.Type.STRING, 3);
    output.writeString(this.tradingType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Shop_exchangeProp_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
Shop_exchangeProp_result.prototype = {};
Shop_exchangeProp_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Shop_exchangeProp_result.prototype.write = function(output) {
  output.writeStructBegin('Shop_exchangeProp_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ShopClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
ShopClient.prototype = {};
ShopClient.prototype.listPropTradingItems = function(tradingType, callback) {
  this.send_listPropTradingItems(tradingType, callback); 
  if (!callback) {
    return this.recv_listPropTradingItems();
  }
};

ShopClient.prototype.send_listPropTradingItems = function(tradingType, callback) {
  this.output.writeMessageBegin('listPropTradingItems', Thrift.MessageType.CALL, this.seqid);
  var args = new Shop_listPropTradingItems_args();
  args.tradingType = tradingType;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_listPropTradingItems();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ShopClient.prototype.recv_listPropTradingItems = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Shop_listPropTradingItems_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'listPropTradingItems failed: unknown result';
};
ShopClient.prototype.exchangeProp = function(uid, propNum, tradingType, callback) {
  this.send_exchangeProp(uid, propNum, tradingType, callback); 
  if (!callback) {
    return this.recv_exchangeProp();
  }
};

ShopClient.prototype.send_exchangeProp = function(uid, propNum, tradingType, callback) {
  this.output.writeMessageBegin('exchangeProp', Thrift.MessageType.CALL, this.seqid);
  var args = new Shop_exchangeProp_args();
  args.uid = uid;
  args.propNum = propNum;
  args.tradingType = tradingType;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_exchangeProp();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

ShopClient.prototype.recv_exchangeProp = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Shop_exchangeProp_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'exchangeProp failed: unknown result';
};

module.exports.default = ShopClient;