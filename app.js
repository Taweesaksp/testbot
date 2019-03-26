// var express = require('express')
// var bodyParser = require('body-parser')
// var request = require('request')
// var app = express()
// app.use(bodyParser.json())
// app.set('port', (process.env.PORT || 4000))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.post('/webhook', (req, res) => {
//     var msgtxt = req.body.events[0].message.text;
//     var text = msgtxt.toUpperCase();
//     var sender = req.body.events[0].source.userId;
//     // var sender = 'U164d3cc6875a1c39f0ef0d2f40edf2a4';
//     var replyToken = req.body.events[0].replyToken;
//     var timestamp = req.body.events[0].timestamp;
//     var message = req.body.events[0].message.id;
//     console.log(text, sender, replyToken);
//     console.log(typeof sender, typeof text);



//     //SIMPLE TEXT
//     if (text === 'HELLO' || text === 'HI' || text === 'สวัสดี') {
//         var textmsg = 'Wacoal Voice สวัสดีค่ะ';
//         var msg = [{
//             type: 'text',
//             text: `Wacoal Voice สวัสดีค่ะ ${text}`
//         }];
//         sendText(sender, text, msg);
//     }



//     //SCREENSHOT FROM GOOGLE AND SEND BACK WITH IMAGE
//     if (text === "GOOGLE") {
//         const stream = screenshot('https://webapp2.wacoal.co.th/MOCMVC/ReportSaleData?getjobid=3&getjobtypeid=3&tdays=0', '1024x768', { crop: true, selector: '#SalesSummary' });
//         stream.pipe(fs.createWriteStream(`./public/stylesheets/${timestamp}.png`));
//         var msg = [{
//             type: 'image',
//             originalContentUrl: `https://wacoalvoice.herokuapp.com/stylesheets/${timestamp}.png`,
//             previewImageUrl: `https://wacoalvoice.herokuapp.com/stylesheets/${timestamp}.png`
//         }, {
//             type: 'text',
//             text: `Capture Success`
//         }];
//         sendText(sender, text, msg);
//     }

//     //CAROUSEL IMAGE
//     if (text === 'วาโก้บลูม') {
//         var textmsg = 'ต้อนรับวัยใสด้วย Wacoal Bloom เหมาะสำหรับเด็กช่วงเข้าสู่วัยรุ่น \n ให้น้องมั่นใจวาโก้บลูม ไม่ต้องกลุ้มอีกต่อไป ~';
//         var msg = [{
//             "type": "template",
//             "altText": "this is a buttons template",
//             "template": {
//                 "type": "buttons",
//                 "thumbnailImageUrl": "https://image.ibb.co/kUpbXa/wacoalbloom.png",
//                 "title": "Wacoal Bloom",
//                 "text": "See Information",
//                 "actions": [
//                     {
//                         "type": "uri",
//                         "label": "Facebook",
//                         "uri": "https://www.facebook.com/wacoalbloom/"
//                     },
//                     {
//                         "type": "uri",
//                         "label": "Watch Video",
//                         "uri": "https://www.youtube.com/watch?v=T5sSa64-aKQ"
//                     }
//                 ]
//             }
//         }];
//         sendText(sender, text, msg);
//     }

//     res.sendStatus(200);
// });


// function sendText(sender, text, msg) {
//     let data = {
//         to: sender,
//         messages: msgcd
//     }
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {M9tAyRc6RQCCq0gJ7He0lZV9LrUYz/+7IqBgIdGGWuMBcQpmkxxlD2ljDWt9lYaJ7U4+mtwzjznLHaV/LDPXlzx4StUN5Rpkxht7x+K1oMiFjC78d5S23B77E0zzeaF1E4TTl3afJr5AA8wMgyQmhAdB04t89/1O/w1cDnyilFU=}'
//         },
//         url: 'https://api.line.me/v2/bot/message/push',
//         method: 'POST',
//         body: data,
//         json: true
//     }, function (err, res, body) {
//         if (err) console.log('error')
//         if (res) console.log('success')
//         if (body) console.log(body)
//     })
// }
// app.listen(app.get('port'), function () {
//     console.log('run at port', app.get('port'))
// })

// const express = require('express')
// const bodyParser = require('body-parser')
// const request = require('request')
// const app = express()
// const port = process.env.PORT || 4000
// // var userid = "";
// console.log("****port***" + port);
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// app.post('/webhook', (req, res) => {
//     var text = req.body.events[0].message.text
//     // let reply_token = req.body.events[0].replyToken
//     var sender = req.body.events[0].source.userId;
//     console.log("-----text----" + text);
//     // console.log("-----reply_token----" + reply_token);
//     // server();
//     if (text == "a") {
//         // console.log("-----text----" + text);
//         reply(sender, text);
//         // PushMessage();
//     }
//     else {
//         PushMessage();
//     }
//     // var text = "88";
//     // var userId = "U93f0ab5384c81496cb14b0de52af58e9";
//     // let reply_token = req.body.events[0].replyToken
//     // let msg = "99"

//     res.sendStatus(200)

// })
// app.listen(port)
// console.log("****88***" + port);
// function PushMessage() {
//     let data = {
//         to: 'U164d3cc6875a1c39f0ef0d2f40edf2a4',
//         messages: [
//             {
//                 "type": "text",
//                 "text": "Music"
//             }
//         ]
//     }

//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {M9tAyRc6RQCCq0gJ7He0lZV9LrUYz/+7IqBgIdGGWuMBcQpmkxxlD2ljDWt9lYaJ7U4+mtwzjznLHaV/LDPXlzx4StUN5Rpkxht7x+K1oMiFjC78d5S23B77E0zzeaF1E4TTl3afJr5AA8wMgyQmhAdB04t89/1O/w1cDnyilFU=}'
//         },
//         url: 'https://api.line.me/v2/bot/message/push',
//         method: 'POST',
//         body: data,
//         json: true
//     }, function (err, res, body) {
//         if (err) console.log('error')
//         if (res) console.log('success')
//         if (body) console.log(body)
//     })
// }

// function reply(sender, text) {
//     console.log("-----in--1--");

//     let data = {
//         to: sender,
//         messages: [
//             {
//                 "type": "text",
//                 "text": text
//             }
//         ]
//     }

//     console.log("-----in--2--");
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {M9tAyRc6RQCCq0gJ7He0lZV9LrUYz/+7IqBgIdGGWuMBcQpmkxxlD2ljDWt9lYaJ7U4+mtwzjznLHaV/LDPXlzx4StUN5Rpkxht7x+K1oMiFjC78d5S23B77E0zzeaF1E4TTl3afJr5AA8wMgyQmhAdB04t89/1O/w1cDnyilFU=}'
//         },
//         url: 'https://api.line.me/v2/bot/message/push',
//         method: 'POST',
//         body: data,
//         json: true
//     }, function (err, res, body) {
//         if (err) console.log('error')
//         if (res) console.log('success')
//         if (body) console.log(body)
//     })
// }

// function server() {
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'sa',
//         password: 'a@12345',
//         server: 'localhost',
//         database: 'linebot'
//     };

//     // connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();

//         // query to the database and get the records
//         request.query('select * from lineuser', function (err, recordset) {

//             if (err) console.log(err)

//             // send records as a response
//             // res.send(recordset);
//             const response = recordset;
//             // res.send(response.recordset[0].userid);
//             userid = response.recordset[0].userid;
//         });
//     });
// }

// // var db = require('./db');

// app.get('/sender', function (req, res) {
//     res.sendfile('public/send.html');
// });

// app.get('/send_save', function (req, res) {
//     console.log(req.body.id)
//     console.log(req.body.title);
//     console.log(req.body.content);
//     console.log("music");
//     res.contentType('json');
//     res.send({ some: JSON.stringify({ response: 'json' }) });
// });

// app.listen(3000);

const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000, () => {
    console.log('Connected!');
})
// let request = require('request');
// var token = 'api_key'
// var imagesURL = [];
// function getRandomImages() {
//   let randomIndex = Math.floor((Math.random() * (100 - 5)));
//   request({
//     url: `https://graph.facebook.com/v2.9/323925094473196/photos/`,
//     qs: {
//       fields: "images",
//       limit: 5,
//       offset: randomIndex,
//       access_token: token
//     },
//     method: "GET"
//   }, (error, res, body) => {
//     if (error) { console.error(error); }
//     var rs = JSON.parse(body);
//     imagesURL = rs.data.map(data => data.images[0].source);
//   })
// };
app.get(`/`, (req, res) => {
    res.send('Hello');
})
app.get('/geta', (req, res) => {
    console.log("aaaaaaaaaaaaaaa");
    //   getRandomImages();
    // PushMessage();
    setTimeout(() => {
        console.log('****************** successful************');
        res.send("imagesURL");
    }, 2000)
})

function PushMessage() {
    let data = {
        to: 'U164d3cc6875a1c39f0ef0d2f40edf2a4',
        messages: [
            {
                "type": "text",
                "text": "Music"
            }
        ]
    }

    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {M9tAyRc6RQCCq0gJ7He0lZV9LrUYz/+7IqBgIdGGWuMBcQpmkxxlD2ljDWt9lYaJ7U4+mtwzjznLHaV/LDPXlzx4StUN5Rpkxht7x+K1oMiFjC78d5S23B77E0zzeaF1E4TTl3afJr5AA8wMgyQmhAdB04t89/1O/w1cDnyilFU=}'
        },
        url: 'https://api.line.me/v2/bot/message/push',
        method: 'POST',
        body: data,
        json: true
    }, function (err, res, body) {
        if (err) console.log('error')
        if (res) console.log('success')
        if (body) console.log(body)
    })
}

