require('dotenv').config()
let fetch = require ('node-fetch')

const base = "https://api-m.sandbox.paypal.com";

let generateAccessToken =  async () => {
    const auth = Buffer.from(process.env.CLIENT_ID + ":" + process.env.APP_SECRET).toString("base64")
    let response =  await fetch(`${base}/v1/oauth2/token`, {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: "Basic "+ auth,
      },
    })
    let Jsondata = await response.json()
    return Jsondata.access_token
}


module.exports = {
createOrder: async (total,units,useraddress) => {
const accessToken = await generateAccessToken();
	  const url = `${base}/v2/checkout/orders`;
	  const response = await fetch(url, {
	    method: "post",
	    headers: {
	      "Content-Type": "application/json",
	      Authorization: `Bearer ${accessToken}`,
},
	    body: JSON.stringify({
	      intent: "CAPTURE",
	      purchase_units: [
	        {
	          amount: {
	            currency_code: "USD",
	            value: total,
                breakdown:{
                    item_total:{
                        currency_code: "USD",
	                value: total,
                    }
                }
	          },
              items:units,
			  shipping: useraddress,
	        },
	      ],
	    }),
	  });
	  const data = await response.json();
	  return data;
},
	// use the orders api to capture payment for an order
	capturePayment: async (orderId) => {
	  const accessToken = await generateAccessToken();
	  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
	  const response = await fetch(url, {
	    method: "post",
	    headers: {
	      "Content-Type": "application/json",
	      Authorization: `Bearer ${accessToken}`,
	    },
	  });
	  const data = await response.json();
	  return data;
	}
	// generate an access token using client id and app secret
	}