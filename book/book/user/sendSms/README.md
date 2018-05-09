

sendSMS
---

```
Url : https://api.pictureair.com/ai/user/sendSMS
Method : POST 
desc : 向指定的手机号码发送短信
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| areaCode | yes | String | 区号,如+86 | - |
| phone | yes | String | 手机号码 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
