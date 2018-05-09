

thirdLogin
---

```
Url : https://api.pictureair.com/ai/user/thirdLogin
Method : POST 
desc : 第三方登录
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| uuid | yes | String | 设备的uuid | - |
| type | yes | String | wx/fb | - |
| terminal | yes | String | ios/adriod,按照之前的0或1传 | - |
| lg | yes | String | en/us | - |
| access_token | no | String | 微信登录必传 | - |
| openid | no | String | app认证的openid，授权用户唯一标识,微信为必需 | - |
| fbId | no | String | 为facebook获取的用户id时，必传 | - |
| fbName | no | String | 为facebook获取的用户name时，必传 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "token": "2bd415d0c0e3a096d64e26f"
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| token | String |认证标志 |
