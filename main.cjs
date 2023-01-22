const crypto = require("crypto")
function aesEncode(data,key,iv){
    const cipher = crypto.createCipheriv("aes-128-cbc",key,iv)
    let src = cipher.update(data,'utf-8','hex')
    return src+=cipher.final('hex')
}

function aesDecode(data,key,iv){
    const cipher = crypto.createDecipheriv("aes-128-cbc",key,iv)
    let src = cipher.update(data,'hex','utf-8')
    return src+=cipher.final('utf-8')

}
console.log(aesDecode("a1bdc9452db467e79029772d536a6166","jia6712954524600","qwertyuioplkjhgf"))
// var mysql = require("mysql")
// var connection = mysql.createConnection({
//     host: "120.76.117.92",
//     user: "root",
//     password: "jia67129",
//     port: "33717",
//     database: "database"
// })
// connection.connect();
// var sql = "INSERT INTO muyu (aco,pwd,count) VALUES (?,?,?)"
// connection.query(sql,['admin','111','112'], (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(res)
//     return;
// })
// connection.end()