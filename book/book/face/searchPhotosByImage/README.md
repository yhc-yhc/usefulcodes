

searchPhotosByImage
---

```
Url : https://api.pictureair.com/ai/face/searchPhotosByImage
Method : POST 
desc : 传入一张带有人脸的图片，在数据库中检索，返回共享照片中含有此人的图片
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| file | yes | Binary | 上传文件的二进制数据 | - |
| siteId | yes | String | 乐园的siteId | - |
| date | yes | String | 时间的字符串格式，YYYY/MM/DD | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "_id": "59709dc01ee822140e00030e",
            "siteId": "SIHK",
            "locationId": "ev1",
            "shootOn": "2017-07-20 20:10:28",
            "isFree": true,
            "isPaid": true,
            "parkName": "Sky100",
            "mimeType": "jpg",
            "wMP4": {},
            "thumbnail": {
                "x512": {
                    "url": "media/33267e46b01d333ada075909980910005b066ab8b7b7cf1744f2b212a0bcb132bcae1664877d2b63a48cab05d5bf2adacc87c9920b89d8d59d5e16a9b484cbcecbb56ad74d1c1f382dea61c903dc2f7f1103902f115f6ae5cfce045e702d84ef",
                    "width": 512,
                    "height": 384
                },
                "x1024": {
                    "url": "media/33267e46b01d333ada07590998091000c4635390d67d12da7a3d4035f9039298f6fc9a073ed406900047af75e3a159558c40f801455f1e820251714de64de3a48205883db8703081fc06ed30624bde7f",
                    "width": 1024,
                    "height": 768
                }
            },
            "originalInfo": {
                "url": "media/33267e46b01d333ada07590998091000f5c82f1943241cea7ceb384a540af410b5fec380620bcdb95c43fda7fa65a0d9b4d831b064d79abe03758913c182f96eb741ea812bcd30fe45a1872c0ea9fab7",
                "height": 3450,
                "width": 4600,
                "originalName": "ev1_ev1-6EBE-00745446-200924-72615365_GS3.JPG"
            }
        }
    ]
}
```
