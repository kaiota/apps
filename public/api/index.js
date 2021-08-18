import ky from 'ky'
/**
 * 共通API
 */
export const commonApi = ky.create({prefixUrl:'api'});
/**
 * アプリケーションレイヤーAPI
 */
export const api = ky.create({prefixUrl:'api/app'});

export const withApi = async(vue,fn,fileError)=>{
    try{
        await fn();
    }catch(error){
        console.log(fileError)
        console.log(vue)
        // await errorHandler(vue,error,fileError)
    }
};