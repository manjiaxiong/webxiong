const fs=require('fs');
const rs=fs.createReadStream('./rs.txt');
const ws=fs.createWriteStream('./ws.txt');
rs.pipe(ws)//把rs写入ws