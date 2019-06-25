


/**
 * 修饰器通用的处理方式
 * @param value
 * @returns {Function}
 */
 const sendGA = (value:string)=>{
    return function(){
        console.log("打点的页面为------>",value)
    }
}


export default sendGA;


