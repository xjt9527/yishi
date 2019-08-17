import ApiInfo from "./ApiInfo.js";

class QukanApiInfo extends ApiInfo {
    constructor({
                    path,
                    type = "get",
                    timeout = 15000,
                    headers,
                    project = "qukan",
                    author = "未定义"
                }) {
        super({
            path,
            type,
            timeout,
            headers,
            project,
            author
        });
    }
}

export default {
    test: {
        test: new QukanApiInfo({
            description: "测试api",
            path: "test",
            type: "get",
            author: ""
        }),
        one: new QukanApiInfo({
            description: "测试api",
            path: "one",
            type: "get",
            author: ""
        })
    }
};
