import BaseRequest from './BaseRequest'
import Apis from '../apis/index'
import apiConfig from '../apis/apiConfig'

class QuRequest extends BaseRequest {
    constructor() {
        super()
        this.Apis = Apis
        // this.apiDomain = new ApiDomain()
    }

    getUrl(api) {
        let NODE_ENV = process.env.NODE_ENV
        let apiConfig_env = apiConfig[NODE_ENV]
        let url_prefix = ''
        for(let obj in apiConfig_env){
            if(obj == api.project){
                url_prefix =apiConfig_env[obj].default
            }
        }


        return `${url_prefix}${api._path}`
        


        if(api.project){}
        
        
        // return this.apiDomain.getUrl(api)
    }

    nativeSend(api, data = {}) {
        data = Object.assign({
            // token: Auth.getToken(),
            dtu: 200
        }, data)
        let selectDate = data

        // if (api.project === 'perm') {
        //     data.project = 'perm';
        // }
        // Debugger.save(api.url, api.type, qs.stringify(data))

        return super.send({
            url: api.url,
            type: api.type,
            timeout: api.timeout,
            headers: api.headers
        }, data).then((response) => {
            let res = response.data
            if (res.code == 0 || res.code == -2101) {
                return res
            } else if (res.code == -126) {
                // todo 清除登录状态，避免登录状态失效后死循环问题
                // Auth.setToken('59dcBr2WPpSiQP8fBj8l7R8ar522i_CSC5gPqBArfCgmx-H3ZO3v7TjldBRfYqRcXFf6Dx7N7iyHZ5_apw')
                setTimeout(() => {
                    // location.href = '/'
                }, 2000)
                throw new Error('登陆状态失效, 请登陆')
            } else {
                if(res.code == -2&&selectDate.codePass){
                    return res
                }      

                throw {
                    message: `请求失败code: ${res.code}, message: ${ message || '未知原因' }，接口开发者：${ api.author }`,
                    stack: new Error().stack,
                    code: res.code
                }
            }
        }, (error) => {
            let status = 0
            if (error.response) {
                status = error.response.status
            } else if (error.request) {
                status = error.request.status
            }
            throw new Error(`网络错误[${ status }](${ api.url }):${ error.message }`)
        })
    }

    send(api, data = {}) {
        let url = this.getUrl(api)
        return this.nativeSend({
            url: url,
            type: api.type,
            timeout: api.timeout,
            headers: api.headers,
            author: api._author || '',
            project: data.project || api.project
        }, data)
    }

    getBranch() {
        return this.apiDomain.getBranchMap()
    }

    isProduct() {
        return this.apiDomain.isProduct()
    }
}

export default QuRequest
