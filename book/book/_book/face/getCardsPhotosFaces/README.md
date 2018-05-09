

getCardsPhotosFaces
---

```
Url : https://api.pictureair.com/api/ai/face/getCardsPhotosFaces
Method : POST 
desc : 列出用户所有卡，显示出每张卡下所有的人脸和照片
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Response result:
```
{
    "code": 200,
    "msg": "success",
    "data": [
        {
            "cardNo": "PACC324YKBWUHD78",
            "photoCount": 200,
            "facesCount": 5,
            "date": "2018/02/21",
            "photos": [
                {
                    "_id": "59b62fda0c8da9004ca20c8f",
                    "x521": "media/924fe72bd415d0c0e3a096d64e26f02b292eb760642e00b70744f72df9e43494698c7b91e0afb079ae4208e75ac96bcd",
                    "x1024": "media/924fe72bd415d0c0e3a096d64e26f02bb81c721fe578aa945d28b739fe20b81aafa0a5a1a0198a12dca381648813bc93",
                    "url": "",
                    "pay": false
                }
            ],
            "faces": [
                {
                    "_id": "5a9788bfac7cb9001c91fbec",
                    "url": "media/924fe72bd415d0c0e3a096d64e26f02bb81c721fe578aa945d28b739fe20b81aafa0a5a1a0198a12dca381648813bc93"
                }
            ]
        }
    ]
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| cardNo | String |卡号 |
| photosCount | Int |照片数量 |
| facesCount | Int |人脸数量 |
| date | Int |照片日期 |
| photos | Araay |照片数据，以对象数组方式呈现 |
| photo._id | String |照片唯一Id |
| photo.x521 | String |512图片地址 |
| photo.x1024 | String |1024图片地址， 如果如果 pay 为 false， 值为水印图地址 |
| photo.url | String |照片高清图地址，如果 pay 为 false, 值为空 |
| photo.pay | Boolean |照片是否购买 |
| faces | Araay |照片包含的人脸数组 |
| face._id | String |人脸唯一Id |
| face.url | String |人脸图片地址 |
