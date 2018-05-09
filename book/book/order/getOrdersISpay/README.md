

getOrdersISpay
---

```
Url : https://api.pictureair.com/ai/order/getOrdersISpay
Method : GET 
desc : 查询订单是否交易成功
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| isPay | yes | boolean | 订单状态是否交易成功 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
