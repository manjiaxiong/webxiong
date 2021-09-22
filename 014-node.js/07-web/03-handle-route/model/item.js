const path=require('path');
const fs=require('fs');
const util=require('util');
const dataPath = path.normalize(__dirname+'./../data/item.json');
const readFile=util.promisify(fs.readFile)
async function get(){
	const data=await readFile(dataPath);
	const arr=JSON.parse(data);
	return arr
}
module.exports={
	get
}