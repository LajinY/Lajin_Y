// const http= require('http');
// const server=http.createServer((req,res)=>
// {
//   console.log(req.url,req.headers);
//   res.setHeader("Content-Type","text/html");
//   res.write('<htm>');
//   res.write('<head><title>my js code</title></head>');
//   res.write('<body>hi bros</body>');
//   res.write('</htm>');

// })
// server.listen(8000);

const http= require('http');
const server=http.createServer((req,res)=>
{
  const url=req.url;
  console.log("url is",url);
  if(url==='/')
  {
    console.log("inside the if condition");
    res.setHeader("Content-Type","text/html");
    res.write('<htm>');
    res.write('<head><title>my js code</title></head>');
    res.write('<body><form action="/www.google.com" method="post"><input type="text"><button type="submit">submit</button></form></body>');
    res.write('</htm>');
    return res.end();
  }
  res.setHeader("Content-Type","text/html");
  res.write('<htm>');
  res.write('<head><title>my js code</title></head>');
  res.write('<body>hi bros</body>');
  res.write('</htm>');

})
server.listen(3000);




