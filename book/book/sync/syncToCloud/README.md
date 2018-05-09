

syncToCloud
---

```
Url : https://api.pictureair.com/ai/sync/syncToCloud
Method : POST 
desc : 把线下的照片数据同步到云端
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| photo | yes | Object | photo doc data | - |
| L | yes | String | x1024 base64 | - |
| O | yes | String | original base64 | - |
| W1024 | yes | String | w1024 base64 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
