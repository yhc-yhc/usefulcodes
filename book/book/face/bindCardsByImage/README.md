

bindCardsByImage
---

```
Url : https://api.pictureair.com/ai/face/bindCardsByImage
Method : POST 
desc : 传入一张带有人脸的图片，在数据库中检索，返回共享照片中含有此人的卡
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| file | yes | Binary | 上传文件的二进制数据 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
