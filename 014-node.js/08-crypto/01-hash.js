const crypto=require('crypto');
// const hash=crypto.createHash('md5');
// const hash=crypto.createHash('sha256');
const hash=crypto.createHash('sha512');//里面的都是算法
//md5->不可逆算法
//需要加密的明文
hash.update('123456');
//输出密文
console.log(hash.digest('hex'));