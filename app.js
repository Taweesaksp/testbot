var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    var msgtxt = req.body.events[0].message.text;
    var text = msgtxt.toUpperCase();
    var sender = req.body.events[0].source.userId;
    var replyToken = req.body.events[0].replyToken;
    var timestamp = req.body.events[0].timestamp;
    var message = req.body.events[0].message.id;
    console.log(text, sender, replyToken);
    console.log(typeof sender, typeof text);



    //SIMPLE TEXT
    if (text === 'HELLO' || text === 'HI' || text === 'สวัสดี') {
        var textmsg = 'Wacoal Voice สวัสดีค่ะ';
        var msg = [{
            type: 'text',
            text: `Wacoal Voice สวัสดีค่ะ ${text}`
        }];
        sendText(sender, text, msg);
    }



    //SCREENSHOT FROM GOOGLE AND SEND BACK WITH IMAGE
    if (text === "GOOGLE") {
        const stream = screenshot('https://webapp2.wacoal.co.th/MOCMVC/ReportSaleData?getjobid=3&getjobtypeid=3&tdays=0', '1024x768', { crop: true, selector: '#SalesSummary' });
        stream.pipe(fs.createWriteStream(`./public/stylesheets/${timestamp}.png`));
        var msg = [{
            type: 'image',
            originalContentUrl: `https://wacoalvoice.herokuapp.com/stylesheets/${timestamp}.png`,
            previewImageUrl: `https://wacoalvoice.herokuapp.com/stylesheets/${timestamp}.png`
        }, {
            type: 'text',
            text: `Capture Success`
        }];
        sendText(sender, text, msg);
    }

    //CAROUSEL IMAGE
    if (text === 'วาโก้บลูม') {
        var textmsg = 'ต้อนรับวัยใสด้วย Wacoal Bloom เหมาะสำหรับเด็กช่วงเข้าสู่วัยรุ่น \n ให้น้องมั่นใจวาโก้บลูม ไม่ต้องกลุ้มอีกต่อไป ~';
        var msg = [{
            "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://image.ibb.co/kUpbXa/wacoalbloom.png",
                "title": "Wacoal Bloom",
                "text": "See Information",
                "actions": [
                    {
                        "type": "uri",
                        "label": "Facebook",
                        "uri": "https://www.facebook.com/wacoalbloom/"
                    },
                    {
                        "type": "uri",
                        "label": "Watch Video",
                        "uri": "https://www.youtube.com/watch?v=T5sSa64-aKQ"
                    }
                ]
            }
        }];
        sendText(sender, text, msg);
    }

    res.sendStatus(200);
});


function sendText(sender, text, msg) {
    let data = {
        to: sender,
        messages: msgcd
    }
    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {UfC+kvnTY/FnCX4xlcvUS6rJpw5mPeqHw8inmF+He1FKVxAYvpo3yzIlpajMLq/nhi0j/w+P+nez4OKZtn0Wdd5uVTi7oQDPVCl/WbxpNlu4/rq9ZtSW4xCaChY9ZQCv6IZHznLJLFNoOD4j9CuM1gdB04t89/1O/w1cDnyilFU=}'
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
app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'))
})
