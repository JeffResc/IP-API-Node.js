var http = require("http")

module.exports = {
    lookup: function(ip, fields, cb) {
    	http.get('http://ip-api.com/json/' + encodeURIComponent(ip) + '?fields=' + encodeURIComponent(fields), res => {
    		res.on('data', chunk => {
    			cb(JSON.parse(chunk.toString()))
    		})
    	}).on("error", () => {
    		cb("")
    	})
    }
};
