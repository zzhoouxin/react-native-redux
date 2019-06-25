import config from './../config'

export interface IResponse<T> {
    code: T;
    obj: T;
    ext: T;
}


const TIME_OUT = 20;

const Common = async <T = any>(input: RequestInfo, init?: RequestInit): Promise<IResponse<T>> => {
    //封装请求信息
    let headers: HeadersInit = {};
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
    const request: RequestInit = {
        method: 'POST',
        headers,
        ...init,
    };
    // 添加网络超时机制
    const timeoutId = setTimeout(() => {
        return {res: null, err: new Error('timeout')};
    }, TIME_OUT * 1000);

    try {
        const response = await fetch(input, request);
        clearTimeout(timeoutId);
        const responseData: IResponse<any> = await response.json();
        console.log('%c%s', 'color: #45BE89;font-size:12px', '|----返回值:', responseData);
        return responseData;
    } catch (error) {
        clearTimeout(timeoutId);
        // const msgText: string = '网络请求失败,请检查网络';
        // return {code: -1, obj: null, ext: {msg: msgText}};
    }
};

const Post = <T>(url: string, body?: object) => {
    let postUrl = config.HOST + url;
    // console.warn('请求接口地址------:' + postUrl);
    // console.warn('请求接口参数------:' + JSON.stringify(body));
    return Common<T>(postUrl, {method: 'POST', body: JSON.stringify(body)});
};

function Get<T>(url: string) {
    return Common<T>(url, {method: 'GET'});
}

export default {
    Common,
    Post,
    Get,
};
