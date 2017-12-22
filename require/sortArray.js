/**
 * Created by Administrator on 2017/12/22.
 */
define(['isArray'],function (isArrray) {
    function sortArray(arr) {
        if(isArrray(arr)){
            return arr.sort(function (a,b) {
                return a-b;
            });
        }else{
            return "请输入数组!";
        }
    }
    return sortArray;
});