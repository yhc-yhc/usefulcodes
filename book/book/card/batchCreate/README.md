

batchCreate
---

```
Url : https://api.pictureair.com/ai/card/batchCreate
Method : POST 
desc : 批量生成卡
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| count | yes | Number | 生成卡的张数 | - |
| type | yes | Number | 生成卡的类型 | - |
| expiredOn | yes | String | YYYYMMDD | - |
| remain | yes | String | 预留对比字样，以确认操作 | - |
| siteId | yes | String | 生成卡的 siteId | - |
| siteIds | yes | Array | 可以激活的 siteId | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
