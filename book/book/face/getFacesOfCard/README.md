

getFacesOfCard
---

```
Url : https://api.pictureair.com/ai/face/getFacesOfCard
Method : POST 
desc : 列出用户所有卡，显示出每张卡下所有的人脸和照片
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| siteId | yes | String | siteId的值 | - |
| code | yes | String | customerIds.code的值 | - |
| date | yes | String | 时间的字符串格式，YYYY/MM/DD | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "_id": "5aab66b2c6b63a001e2bef6d",
            "url": "media/ec46cf015df568b60374639244c23b62cfe86792e5b36469f32d9e5b7aa19dbaa15a3060ed3c059d20dc10236216fc514d2c20ee13ec84931f999ef56e6b4901802ea80ed62707768d65b415e9e7c94b2c4424683533f52eb50d1a8c93078cc84843c96332668bec1f4a2d6b7f84bd8c",
            "num": 11,
            "bind": false
        },
        {
            "_id": "5aab66b2c6b63a001e2bef6e",
            "url": "media/ec46cf015df568b60374639244c23b62cfe86792e5b36469f32d9e5b7aa19dbaa15a3060ed3c059d20dc10236216fc514d2c20ee13ec84931f999ef56e6b4901802ea80ed62707768d65b415e9e7c94b08f09c911567b8dedf79fff7085876955a4f2357b8d648861a402041086d9978",
            "num": 3,
            "bind": false
        }
    ]
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| _id | String |人脸唯一Id |
| url | String |人脸图片地址 |
| num | Number |人脸在这张卡中出现的次数 |
| bind | Boolean |人脸是否被这张卡绑定 |
