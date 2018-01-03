/*
* @Author: Zoe
* @Date:   2017-12-28 16:33:23
* @Last Modified by:   Zoe
* @Last Modified time: 2017-12-28 18:39:55
*/
var register = {
    checkr : function(){
        //获取注册页面中的用户名 和 密码
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var passwords = $('input[name="passwords"]').val();

        if(!username){
            dialog.error('用户名不能为空');
        }
        if(!password){
            dialog.error('密码不能为空');
        }
        if(!passwords){
            dialog.error('确认密码不能为空');
        }
        if(passwords!=password){
            dialog.error('二次密码输入错误');
        }

        var url = "/index.php?c=user&a=checkr";
        var data = {'username':username,'password':password,'passwords':passwords};
        //执行异步请求 $.post
        $.post(url,data,function(result){
            if(result.status == 0){
                return dialog.error(result.message);
            }
            if(result.status == 1){
                return dialog.success(result.message,'/index.html');
            }
        },'JSON');

    }
}