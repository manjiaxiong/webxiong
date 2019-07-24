//buffer是一个存放二进制数据的容器（类似于数组）
const buf1=Buffer.from('z');
console.log(buf1)//<Buffer 7a>
const buf2=Buffer.from('好');
console.log(buf2)//<Buffer 7a>
//一个英文字母(数字)=2个16进制数=1bit
//一个汉字=6个16进制数=3bit
/*
1个0或1个1代表1bit(位)
8bit(位) = 1B(字节) = 2个16进制数
*/


const buf3=Buffer.alloc(10)//必须指定长度(类似于数组)

buf3[0]=11;//十进制在bufer里面变成16位进制<Buffer 0b 00 00 00 00 00 00 00 00 00>
//0xh后面接16位进制
buf3[1]=0xab;//<Buffer 0b ab 00 00 00 00 00 00 00 00>
console.log(buf3);
//toString
const buf4=Buffer.alloc(3)
buf4[0]=0xe5; 
buf4[1]=0xa5; 
buf4[2]=0xbd;
console.log(buf4.toString('utf-8'));