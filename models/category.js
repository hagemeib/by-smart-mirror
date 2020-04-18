var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // parentCategory: {
  //   type: Category,
  // }
});

module.exports = mongoose.model('Category', CategorySchema);
