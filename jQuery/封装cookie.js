/**
 * Created by Administrator on 2017/12/3.
 */

function setCookie(key, value, expires) {
    var str=key+'='+value+';';
    if(expires){
        var date=new Date();
        date.setDate(date.getDate()+expires);
        str+='expires='+date;
    }
    document.cookie=str;
}
//setCookie('skin','skin_1',30);

function getCookie(key) {
    var str=document.cookie;
    var arr=str.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split('=');
        if(arr1[0]==key){
            return arr1[1];
        }
    }
}
// console.log(getCookie('skin'));

function removeCookie(key) {
    setCookie(key,'',-1);
}
//removeCookie('skin');
