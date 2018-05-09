

searchCardsByImage
---

```
Url : https://api.pictureair.com/ai/face/searchCardsByImage
Method : POST 
desc : 传入一张带有人脸的图片，在数据库中检索，返回共享照片中含有此人的卡
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| file | yes | Binary | 上传文件的二进制数据 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "code": "PACC324YKBWUHD78",
            "date": "2018.02.21",
            "siteId": "JPGF",
            "parkName": "JPGF",
            "cardImage": "media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd",
            "photosCount": 20,
            "pay": false,
            "payCount": 5,
            "photos": [
                "media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd",
                "media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd"
            ]
        }
    ]
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| code | String |卡号 |
| date | String |照片日期格式为 YYYY.MM.DD |
| siteId | String |乐园的siteId |
| parkName | String |乐园名称 |
| cardImage | String |卡的封面url |
| photosCount | Int |照片数量 |
| pay | Boolean |卡是否购买 |
| payCount | Int |卡内购买的照片数量 |
| photos | Araay |只显示两张照片的x512地址数据， 如果只有一张，就重复两次 |
