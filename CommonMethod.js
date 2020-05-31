function requestMethond(par1,par2,par3,callback) {
    var xhr = new XMLHttpRequest();

    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    xhr.open(par1 ,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2)

    xhr.send(par3);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var  responseData = JSON.parse(xhr.responseText);
            var  returnStr = responseData.data;
            callback(returnStr);
        }

    }
}



