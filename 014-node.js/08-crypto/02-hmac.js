const crypto=require('crypto');
const hmac=crypto.createHmac('sha512','scqc');
//md5->不可逆算法
//需要加密的明文
hmac.update('123456');
//输出密文
console.log(hmac.digest('hex'));