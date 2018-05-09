

predown
---

```
Url : https://api.pictureair.com/ai/photo/predown
Method : POST 
desc : 一键下载准备photoIDs
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| photoIds | yes | String | 要下载的photo id，多个用逗号隔开 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "key": "e590d1ddadbb4025bb2e3a1b55bd5d7d"
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| key | String |服务器加密后的key |
