

wxlogin
---

```
Url : https://api.pictureair.com/ai/user/wxlogin
Method : POST 
desc : 微信登录app并获取用户信息
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| access_token | yes | String | 微信登录认证的token | - |
| openid | yes | String | app认证的openid，授权用户唯一标识 | - |
| type | yes | String | app类型，ios or adriod | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
