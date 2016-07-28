through=require('through2');split=require('split');
stream=through(write,end);
lineNum=1;
function write(buffer,encoding,next){
  this.push((lineNum%2===0 ?buffer.toString().toUpperCase():buffer.toString().toLowerCase()) +"\n");
  lineNum++;
  next();
}
function end(done){
  done();
}
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
