// 登录方式切换
// 获取相应ID
// 设置相对应的表单隐藏和显示
var note=document.getElementById('note')
var ident=document.getElementById('ident')
var noteB=document.getElementById('note-box')
var identB=document.getElementById('ident-box')
var notes=document.getElementById('notes')
var idents=document.getElementById('idents')
note.onclick=function(){
	identB.style.display="none"
	noteB.style.display="block"
}
ident.onclick=function(){
	identB.style.display="block"
	noteB.style.display="none"
}

notes.onclick=function(){
	identB.style.display="none"
	noteB.style.display="block"
}
idents.onclick=function(){
	identB.style.display="block"
	noteB.style.display="none"
}





// 短信登录表单验证
// 获取对象
// 设置验证码输入框获得焦点事件
// 并满足 当tel框不为空并输入正确时;登录按钮和获取验证码框高亮
var myform=document.form
var phone=myform.phone
var yzm=myform.yzm
var sub=myform.submit
var gets=document.getElementById("gets")
var port=document.getElementById("port")

// 验证号码错误并提示
var r=/^1[34578]\d{9}$/;
yzm.onfocus=function(){
	if (r.test(phone.value)) {
		sub.style.backgroundColor="#18a9b9"
		gets.style.color="#18a9b9"
		gets.style.borderColor="#18a9b9"
	}else{
		zzc.style.display="block"
		port.innerText="请正确填写手机号码"
	}
	console.log(phone.value)
}
// 点击获取验证码倒计时开始
gets.onclick=function(){
	// 当号码栏输入错误并且为空时，弹出遮罩层提示框，正确时调用倒计时函数
	if (!r.test(phone.value)) {
		zzc.style.display="block"
		port.innerText="请正确填写手机号码"
	}else{
		times();
	}
	// 倒计时函数
		function times(){
			var wait=10;
		    var time=setInterval(function(){
	          wait--;
	          gets.innerText=wait+ "s后重发";
	         if (wait==0) {
	         	wait=10;
	         	clearInterval(time);
	         	gets.innerText="重新获取验证码";
	         }     
		},1000)
	}	
}





// 账号登录表单验证
// 获取对象
// 设置账号栏输入要求
// 当账号栏失去焦点后判断输入是否正确，错误时弹出遮罩层提示框
// 点击遮罩层的确定，遮罩层隐藏
var meform=document.meform
var id=meform.ident
var pwd=meform.pwd
var zzc=document.getElementById("zzc")
var sure=document.getElementById("sure")
var regs=document.getElementById("reg")
var subs=document.getElementById("sub")
// console.log(subs)
        // 键盘事件设置当输入的密码长度大于4时并且账号输入正确时 登录按钮高亮
		pwd.onkeyup=function(){
			if (pwd.value.length>4 && id.value!=="") {
				subs.style.backgroundColor="#18a9b9"
			}
		}
        // 遮罩层的弹出和输入正确后跳转首页
		pwd.onfocus=function(){
        var reg=/^(([a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+)|(1[34578]\d{9}))$/
		var reg2=/^[0-9a-zA-Z]{6,12}$/;
		if(reg.test(id.value)==false){
	        zzc.style.display="block"
		}
		else if (reg.test(id.value)==true) {
            regs.href="index.html"
            console.log(regs)
		}
	}


// 遮罩层点击确定隐藏
sure.onclick=function(){
     zzc.style.display="none"
}



