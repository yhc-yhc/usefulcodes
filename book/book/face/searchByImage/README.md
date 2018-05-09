

searchByImage
---

```
Url : https://api.pictureair.com/ai/face/searchByImage
Method : POST 
desc : 传入一张带有人脸的图片，在数据库中检索，返回共享照片中含有此人的图片
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| file | yes | File | 上传的文件名 | - |
| siteId | yes | String | 上传的文件名 | - |
| code | yes | String | customerIds.code的值 | - |
| date | yes | String | 时间的字符串格式，YYYY/MM/DD | - |

* Response result:
```
{
    "status": 200,
    "msg": "success",
    "result": [
        {
            "code": "PACC324YKBWUHD78",
            "photosCount": 20,
            "date": "2018-02-21",
            "photos": [
                {
                    "_id": "59b62fda0c8da9004ca20c8f",
                    "x512": "media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd",
                    "x1024": "media/924fe72bd415d0c0e3a096d64e26f02bb81c721fe578aa945d28b739fe20b81aafa0a5a1a0198a12dca381648813bc93",
                    "url": "",
                    "pay": false
                }
            ]
        }
    ]
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| siteId | String |乐园名称 |
| code | String |卡号 |
| date | String |照片日期格式为 YYYY-MM-DD |
| photosCount | Int |照片数量 |
| photos | Araay |照片数据 |
| photo._id | String |照片唯一Id |
| photo.x521 | String |512图片地址 |
| photo.x1024 | String |1024图片地址， 如果如果 pay 为 false， 值为水印图地址 |
| photo.url | String |照片高清图地址，如果 pay 为 false, 值为空 |
| photo.pay | Boolean |照片是否购买 |
