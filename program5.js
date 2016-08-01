contact=require('concat-stream');
process.stdin.pipe(contact(function(body){
  process.stdout.write(body.toString().split('').reverse().join(''));
}));

/**
定义和用法
reverse() 方法用于颠倒数组中元素的顺序。
语法
arrayObject.reverse()
提示和注释
注释：该方法会改变原来的数组，而不会创建新的数组。
返回值：改变后的数组

定义和用法
join() 方法用于把数组中的所有元素放入一个字符串。
元素是通过指定的分隔符进行分隔的。
语法
arrayObject.join(separator)
参数	描述
separator	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
返回值：放入的字符串
**/


/**
var concat = require('concat-stream');
process.stdin.pipe(concat(function (src) {
  var s = src.toString().split('').reverse().join('');
  console.log(s);
}));
**/
