import axios from 'axios';
import { Toast } from 'mint-ui';
import global_  from './globalVariable';

axios.defaults.timeout = 20000;
axios.defaults.baseURL ='';

//http request 拦截器
axios.interceptors.request.use(

    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        let token = global_.getUrlParam('token') || '';
      // let token='oX-MQwYTvbFYQUsgAG79VEQKUC6U';
        if(!token){
            token = window.localStorage.getItem('token') || '';
        }else {
            localStorage.setItem('token',token)
        }

        config.data = JSON.stringify(config.data);
        config.headers = {
            // 'Content-Type':'application/x-www-form-urlencoded',
             'Content-Type':'application/json;charset=utf-8',
              'token':token

        };

        // Toast.loading({
        //     mask: true,
        //     message: '加载中...',
        //     duration:0
        // });
        // if(token){
        //   config.params = {'token':token}
        // }

        return config;
    },
    error => {
        return Promise.reject(err);
    }
);



//http response 拦截器 判断是注册
axios.interceptors.response.use(
    response => {
        if(response.data.code ==1020000){
            var urlink=window.location.href.split('#')[1];
            if(urlink!='/startpage'){
                localStorage.setItem('urlink',urlink)
            }
            window.location.href = global_.wwwUrl+'#/startpage';
        }

        return response;
    },
    error => {
        return Promise.reject(error)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(global_.apiUrl+url,{
            params:params

        })
            .then(response => {
                if(response.data.code==200){
                    resolve(response.data);
                }else {
                    Toast({
                        duration: 1500,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'text',
                        message: response.data.msg
                    });
                    resolve(response.data);
                }

                // Toast.clear


            })
            .catch(err => {
                reject(err)


            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data){
    return new Promise((resolve,reject) => {
        axios.post(global_.apiUrl+url,data)
            .then(response => {
                if(response.data.code==200){
                    resolve(response.data);
                }else {
                    Toast({
                        duration: 1500,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'text',
                        message: response.data.msg
                    });
                    resolve(response.data);
                }
                // Toast.clear
            },err => {
                reject(err)
            })

    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){

    return new Promise((resolve,reject) => {
        axios.patch(global_.apiUrl+url,data)
            .then(response => {
                if(response.data.code==200){
                    resolve(response.data);
                }else {
                    Toast({
                        duration: 1500,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'text',
                        message: response.data.msg
                    });
                    resolve(response.data);
                }
                // Toast.clear
            },err => {

                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(global_.apiUrl+url,data)
            .then(response => {
                if(response.data.code==200){
                    resolve(response.data);
                }else {
                    Toast({
                        duration: 1500,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'text',
                        message: response.data.msg
                    });
                    resolve(response.data);
                }
                // Toast.clear
            },err => {

                reject(err)
            })
    })
}


