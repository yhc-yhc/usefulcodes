

test1
---

```
Url : https://api.pictureair.com/api/ai/face/test1
Method : POST 
desc : 传入一张带有人脸的图片，在数据库中检索，返回共享照片中含有此人的图片
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| file | yes | File | 上传的文件名 | - |
| siteId | yes | String | 上传的文件名 | - |
| date | yes | String | 时间的字符串格式，YYYY/MM/DD | - |

* Response result:
```
{
    "status": 200,
    "msg": "success",
    "result": {
        "count": 5
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| cardNo | String |卡号 |
| photosCount | Int |照片数量 |
| date | Int |照片日期 |
| photos | Araay |照片数据 |
| photo._id | String |照片唯一Id |
| photo.x521 | String |512图片地址 |
| photo.x1024 | String |1024图片地址， 如果如果 pay 为 false， 值为水印图地址 |
| photo.url | String |照片高清图地址，如果 pay 为 false, 值为空 |
| photo.pay | Boolean |照片是否购买 |
