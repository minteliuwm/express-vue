const qs = require('qs');

let ajax = (options) => {
  let headers = options.headers || {};
  let contentType = headers['content-type'];

  if (!options.method) {
    options.method = 'GET';
  }

  if (options.data) {
    if (options.method === 'GET') {
      options.url += '?' + qs.stringify(options.data);
      options.data = '';
    }

    if (/x-www-form-urlencoded/.test(contentType)) {
      options.data = qs.stringify(options.data);
    } else if (/json/.test(contentType)) {
      options.data = JSON.stringify(options.data);
    }
  }

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);

    for (let k in options.headers) {
      xhr.setRequestHeader(k, options.headers[k]);
    }

    if (options.withCredentials) {
      xhr.withCredentials = true;
    }

    xhr.onload = () => {
      let status = xhr.status === undefined ? 200 : xhr.status;
      let r = { status };
      if(status === 200){
        let body = xhr.response || xhr.responseText || '';
        r.body = JSON.parse(body);
      }
      resolve(r);
    };
    xhr.onerror = () => {
      reject(new Error('网络异常'));
    };
    xhr.ontimeout = () => {
      reject(new Error('请求超时'));
    };

    xhr.send(options.data);
  });
};

export default ajax;
