contact=require('concat-stream');
process.stdin.pipe(contact(function(body){
  process.stdout.write(body.toString().split('').reverse().join(''));
}));

/**
������÷�
reverse() �������ڵߵ�������Ԫ�ص�˳��
�﷨
arrayObject.reverse()
��ʾ��ע��
ע�ͣ��÷�����ı�ԭ�������飬�����ᴴ���µ����顣
����ֵ���ı�������

������÷�
join() �������ڰ������е�����Ԫ�ط���һ���ַ�����
Ԫ����ͨ��ָ���ķָ������зָ��ġ�
�﷨
arrayObject.join(separator)
����	����
separator	��ѡ��ָ��Ҫʹ�õķָ��������ʡ�Ըò�������ʹ�ö�����Ϊ�ָ�����
����ֵ��������ַ���
**/


/**
var concat = require('concat-stream');
process.stdin.pipe(concat(function (src) {
  var s = src.toString().split('').reverse().join('');
  console.log(s);
}));
**/
