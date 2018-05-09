

createOrder
---

```
Url : https://api.pictureair.com/ai/order/createOrder
Method : POST 
desc : 创建支付订单
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| Lists | yes | Array | 订单列表数据 | - |
| type | yes | String | 购买类型， 0 单张照片， 1 PPP卡 | - |
| PPCode | yes | String | 卡号 | - |
| date | yes | String | 每一个商品的时间（需要激活的时间) | - |
| proCode | yes | String | 每一个商品所对应的商品code | - |
| proId | yes | String | 每一个商品本身的Id，如photosId,PPPCode | - |
| count | yes | String | 数量 | - |
| terminal | yes | String | 终端，01 App，02 Web | - |
| sys | yes | String | 手机系统， 01 ios， 02 andriod, 03 Web | - |
| parkname | no | String | 如不传，则返回值中无parkname | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
