/**
 * Created by jingzhefeng on 2017/5/24.
 */
var fs = require("fs");


exports.getAllImageLists = function (callback) {
    fs.readdir('./imageServer', function (err, dirs) {
        if(err){
            callback('Image Server Directory Not exist', null)
        }
        var len = dirs.length;
        var allImageLists = [];
        dirs.map(function (dir, i) {
            fs.stat(('./imageServer/' + dir), function (err, stats) {
                if(err) {
                    callback(('can not found file: ' + dir), null);
                }
                console.log(allImageLists);
                if(stats.isDirectory()){
                    allImageLists.push(dir);
                    if(i === len-1){
                        console.log(allImageLists);
                        return callback(null, allImageLists);
                    }
                }
            });
        });
    })
};
