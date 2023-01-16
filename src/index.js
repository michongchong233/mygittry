// 引入axios
import axios from 'axios';

// 處理一般異步請求
axios.get('https://randomuser.me/api/')
.then(resolve => {
    console.log('1. request success : ')
    console.log(resolve.data)
}, reject => {
    console.log('1. request reject')
})

// 處理并發請求
axios.all([
    axios.get('https://randomuser.me/api/'),
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', {
        email: 'mickeytest233@gmail.com',
        password: '1234'
    }),
]).then(resolve => { // 一次取得所有請求的響應內容
    console.log('2. request success : ')
    for(let i = 0; i < resolve.length; i ++){
        console.log(resolve[i])
    }
}).catch(exception => {
    console.log('2. request exception')
    console.log(exception)
})

// axios全局配置
axios.defaults.baseURL = 'https://randomuser.me/'
axios.defaults.timeout = 5000
axios.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded'
axios.get('api/')
.then(resolve => {
    console.log('3. request success : ')
    console.log(resolve.data)
}, reject => {
    console.log('3. request reject')
})

// axios實例
// 實例配置會覆蓋全局配置
let instance01 = axios.create({
    baseURL: 'https://randomuser.me/',
    timeout: 5000,
})
instance01.get('api/')
.then(resolve => {
    console.log('4. request success : ')
    console.log(resolve.data)
}, reject => {
    console.log('4. request reject')
})

// 建立實列化對象時有指定請求方法，可以直接調用
let instance02 = axios.create({
    baseURL: 'https://randomuser.me/',
    method: 'get',
    timeout: 5000,
})
instance02().then()


// axios實例
let instance03 = axios.create({
    baseURL: 'https://randomuser.me/',
    timeout: 5000,
})

// 請求欄截器
instance03.interceptors.request.use(
    config => { // 處理攔截的函數
        console.log('interceptor request start')
        return config // 請求放行
    }, exception => { // 處理攔截時有異常的函數
        console.log(exception)
    }
)

// 響應攔截器
instance03.interceptors.response.use(
    response => {
        console.log('interceptor response start')
        return response // 響應放行
    }, exception => {
        console.log(exception)
    }
)

// 發送請求
instance03.get('api/')
.then(resolve => {
    console.log('5. request success : ')
    console.log(resolve.data)
}, reject => {
    console.log('5. request reject')
})
