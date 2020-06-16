const   fs = require('fs'),
        path = './gulp/tasks',
        arrayPathFills =  fs.readdirSync(path).map(cell => cell = path+'/'+cell)
module.exports = arrayPathFills