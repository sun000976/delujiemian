var foo=require("./file.js")
var http=require("http")
var url=require("url")
var fs=require("fs")
  http.createServer((req,res)=>{
	  if(req.url=="/favicon.ico"){
		  return
	  }
	  res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
      var obj=url.parse(req.url,true).query;
// 	  if(obj.Username=="sunhaojie"&&obj.Password=="123456"){
// 		  res.end("用户名："+obj.Username+"密码"+obj.Password+"登录成功")
// 	  }else{
// 		  res.end("用户名或密码错误")
// 	  }


    // console.log(foo.Username)
	// console.log(foo.Password)
    //  if(obj.Username==foo.Username&&obj.Password==foo.Password){
	// 	 res.end("登录成功")
	//  }else{
	// 	 res.end("用户名或密码错误")
	//  }


	//   fs.readFile("js.json",(err,data)=>{
	// 	 if(err){
	// 		 console.log(err)
	// 		 return
	// 	 }else{
	// 		 var b=data.toString()
	// 		 var arr=eval(b)
	// 		 console.log(arr)
	// 		 for (let i=0;i<arr.length;i++) {
	// 			 console.log(arr[i])
	// 		 	if(obj.Username==arr[i].Username&&obj.Password==arr[i].Password){
	// 		 	      res.end("登录成功")			 
	// 		 	}
	// 		     console.log("读取成功")
	// 		 }
	// 		 res.end("用户名或密码错误")
	// 	 }
	//   })
     fs.readFile("js.json",(err,data)=>{
		 if(err){
			 console.log(err)
			 return
		 }else{
			 var b=data.toString()
			 var a=JSON.parse(b)
			console.log(a)
			 for (let s of a) {
				 console.log(s)
			 	if(obj.Username==s.Username&&obj.Password==s.Password){
			 	      res.end("登录成功")			 
			 	}
			     console.log("读取成功")
			 }
			 res.end("用户名或密码错误")
		 }
	  })
  }).listen(3000)