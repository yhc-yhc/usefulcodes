

listOrders
---

```
Url : https://api.pictureair.com/ai/order/listOrders
Method : GET 
desc : 查询订单是否交易成功
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| isPay | yes | boolean | 订单状态是否交易成功 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "orders": [
            {
                "orderCode": "1103170331623587",
                "createdOn": "2017-03-31 14:29:08",
                "couponsList": [],
                "orderStatus": 1,
                "totalPrice": 3000,
                "discount": 1000,
                "express": "1",
                "resultPrice": 4000,
                "entity": [],
                "cardUrl": "/sites/RSSG/orderCard.png",
                "virtualProducts": [
                    {
                        "productType": 0,
                        "count": 1,
                        "currency": "JYP",
                        "parkName": "LEGOLAND®️ Japan"
                    }
                ]
            }
        ]
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| orderStatus | String |1:未付款,2:处理中,3:已完成,4:已取消,5:已退款,6:交易失败 |
