var num=1;
function add(){
	num++;
}
module.exports={
	get num(){
		return num;
	},
	add,
};