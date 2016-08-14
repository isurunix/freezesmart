var mongoose = require('mongoose');

var snapshotSchema = mongoose.Schema({
  user: String,
  items: [{name: String, qty: Number, exp: Date}],
  checkedAt: {type: Date, default: Date.now}
});

var Snap = mongoose.model('snapshot',snapshotSchema,'snapshot');
module.exports = Snap;
