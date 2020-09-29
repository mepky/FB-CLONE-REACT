export function getFormBody(params) {

    let formBody = [],
        for (let property in params) {
            let encodedKey = encodedUrlComponent(property); //User ame => user%10name
            let encodedValue = encodeURIComponent(params[property]); //Aakash 123=>aakash%2020123
            formBody(encodedKey + '=' + encodedValue);
        }
    return formBody.join('&');
    //username=aakash&paasword will return via return
}