

bindFaceToCode
---

```
Url : https://api.pictureair.com/ai/face/bindFaceToCode
Method : POST 
desc : 把人脸与卡关联起来
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| siteId | yes | String | siteId的值 | - |
| code | yes | String | 乐拍通卡号 | - |
| date | yes | String | 时间的字符串格式，YYYY/MM/DD | - |
| faceId | yes | String | 人脸唯一Id | - |
| file | yes | Binary | 上传文件的二进制数据 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
