
const apiUrl='http://wxlc.micmark.com/api/v1/';
const imgUrl='http://wxlc.micmark.com';
//const wwwUrl='http://wxlc.micmark.com/';
const wwwUrl='http://localhost:8080/';
const gotoUrl='http://wxlc.micmark.com/';
const userInfo=null;
const token='';
const classlist=[];//分类列表
const adveradmin=false;//广告管理
const  memberdiypages=[];//会员配置
const  indexdiypages=[];//首页配置

function getUrlParam(name){  // 获取url参数值
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //构造一个含有目标参数的正则表达式对象
    var str = window.location.href.split("?")[1];
    if(str){
        var r = str.substr(0).match(reg);
        //匹配目标参数
        if (r != null)
            return decodeURI(r[2]);
        return '';
    }
    else{
        return ''
    }
}

export default
{
    apiUrl,//api地址
    imgUrl,//域名地址
    wwwUrl,//网站
    gotoUrl,
    userInfo,//用户信息
    token,//用户token
    classlist,
    adveradmin,
    memberdiypages,
    indexdiypages,
    getUrlParam:getUrlParam
}
