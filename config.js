
/**
 * Global Configs.
 * 如果开启了mongoDB,将下面代码注释去掉，
 * 并将dbUserName, dbPassword和dbName都
 * 替换成分配得到的值。即可查看 mongoDB
 * 测试程序。否则则开启hello world程序。
 ***/
var mongo = require("mongoskin"),
	dbuser = "yrVkrVLEwSJk",
	dbpwd = "kRGCdu7BYK",
	db = "HtgiXbypWJTR",
	host = "127.0.0.1",
	port = "20088";
//dbUserName:dbPassword@127.0.0.1:20088/dbName
var db_url = exports.db_url = dbuser + ":" + dbpwd + "@" + host + ":" + port + "/" + db + "";
exports.db = mongo.db(db_url);
