module.exports = {
	listOrders: {
		method: 'GET',
		desc: "查询订单是否交易成功",
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			isPay: [1, 'boolean', "订单状态是否交易成功"]
		},
		response: {
			"orders": [{
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
				"virtualProducts": [{
					"productType": 0,
					"count": 1,
					"currency": "JYP",
					"parkName": "LEGOLAND®️ Japan"
				}]
			}]
		},
		resDesc: {
			orderStatus: ['String', '1:未付款,2:处理中,3:已完成,4:已取消,5:已退款,6:交易失败']
		}
	},
	createOrder: {
		method: 'POST',
		desc: "创建支付订单",
		headers: {
			 token: [1, 'String', "标识用户身份"]
		},
		params: {
			Lists: [1, 'Array', "订单列表数据"],
			type: [1, 'String', "购买类型， 0 单张照片， 1 PPP卡"],
			PPCode: [1, 'String', "卡号"],
			date: [1, 'String', "每一个商品的时间（需要激活的时间)"],
			proCode: [1, 'String', "每一个商品所对应的商品code"],
			proId: [1, 'String', "每一个商品本身的Id，如photosId,PPPCode"],
			count: [1, 'String', "数量"],
			terminal: [1, 'String', "终端，01 App，02 Web"],
			sys: [1, 'String', "手机系统， 01 ios， 02 andriod, 03 Web"],
			parkname:[0,'String',"如不传，则返回值中无parkname"]
		}
	}
}