//@ts-check
import axios from 'axios'
import qs from 'qs'
import q from 'q'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

class BaseRequest {
    constructor () {}

    send ({
              url,
              type = 'get',
              timeout = 10000,
              headers = {}
          }, body = {}) {
        let options = {
            url: url,
            method: type.toLocaleLowerCase(),
            timeout: timeout,
            headers: headers
        }

        try {
            // 处理 post 参数格式
            if (options.method === 'post') {
                options.data = qs.stringify(body)
            } else if (options.method === 'get') {
                options.params = body
            } else {
                options.data = body
            }
            return q.resolve(axios(options))
        } catch (e) {
            q.reject(e)
        }

    }
}

export default BaseRequest
