

getPPCodesWithoutToken
---

```
Url : https://api.pictureair.com/ai/card/getPPCodesWithoutToken
Method : GET 
desc : 根据ppCode查询该卡包含的全部日期的卡信息列表,如果没有数据，返回一个默认的数据，出现common字段为默认标志
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| ppCode | yes | String | ppCode参数 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "PPCodesInfo": [
                {
                    "bindOn": "",
                    "siteId": "PictureAir",
                    "parkName": "PictureAir",
                    "num": 0,
                    "logoUrl": "/sites/common/logo.png",
                    "bgImg": "/sites/common/webTitle.png",
                    "cardBagPPUrl": "/sites/common/cardBagPP.png"
                }
            ]
        }
    ]
}
```
