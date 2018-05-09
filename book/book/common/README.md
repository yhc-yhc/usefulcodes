# common
---
* success :
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
* error :
```
{
    "status": 20201,
    "message": "No Face Found",
    "result": {
        "router": "/face/list"
    }
}
```
* errorDes :
```
{
    "status": 20502,
    "des": {
        "2": "服务级错误（1为系统级错误, 2为服务错误，3为用户提示）",
        "05": "服务模块代码",
        "02": "具体错误代码",
        "servce-desc": "00 sync, 01 face 02 user 03 photo 04 order 05 pay 06 card"
    }
}
```
* system :

|code|des|
| ------------- |:-------------:|
| 10001 | "System error" | 
| 10002 | "Service unavailable" | 
| 10003 | "Remote service error" | 
| 10004 | "IP limit" | 
| 10005 | "Permission denied, need login again" | 
| 10006 | "Miss required parameter, see doc for more info" | 
| 10007 | "Request api not found" | 
| 10008 | "parameter error" | 
* service :

|code|des|
| ------------- |:-------------:|
| 20001 | "siteId not exists" | 
| 20002 | "load the image error" | 
| 20101 | "ID is null" | 
| 20102 | "user not exists" | 
| 20201 | "email not correct" | 
| 20202 | "email not correct" | 
* tip :
```
{
    "30101": {
        "en-US": "sorry, face maybe not match",
        "zh-CN": "对不起, 脸不匹配"
    }
}
```
