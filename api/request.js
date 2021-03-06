const API_BASE_URL = "http://10.86.33.5:5003/v1";
//const API_BASE_URL = "http://127.0.0.1:5003/v1";

const request = (method, url, data,header = {}) => {
  let _url = API_BASE_URL + url
  let token = wx.getStorageSync('jwt_token');
  let auth = {}
  if(token){
    auth['Authorization'] = `${token}`
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json',
        ...auth
      },
      success(request) {
        console.log(request)
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

export{
  request
}