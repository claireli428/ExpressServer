/**
 * Created by jingzhefeng on 2017/5/24.
 */
var imageListsModel = require("../models/imageListsModel.js");

exports.showImageLists = function (req, res) {
  imageListsModel.getAllImageLists(function (err, allImageLists) {
      res.render('index', {'imagelists': allImageLists});
  });
};