http=require('http');
through=require('through2');
server=http.createServer(function(req,res){
  if (req.method === 'POST') {
    req.pipe(through(write)).pipe(res);
  }else {
    res.end('send me a POST\n');
  }

  function write(buf, _, next){
    this.push(buf.toString().toUpperCase());
    next();
  }
});
server.listen(process.argv[2]);
