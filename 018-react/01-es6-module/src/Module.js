console.log("in Module.js")

//定义和导出模块


//方法一
export const a=1;
//方法二
const b=2;
export {b}
//方法三  import命令可以使用as关键字将输入的变量重命名。
const c=3
export {c}
//方法四  export时as关键字重命名变量d的名字为d1,所以在引入时用d1
const d=4
export {d as d1}
//方法五
/*
		一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
		正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
		export default导出的模块,import时变量名可以用随意合法的名称
*/
// export default 1
   //或
const e=1234
export default e