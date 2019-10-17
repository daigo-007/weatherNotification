
  // LINE developersのメッセージ送受信設定に記載のアクセストークン
  var CHANNEL_ACCESS_TOKEN = '各自のアクセストークン';
  var USER_ID = 'APIのユーザーID';
  function push_message() {
  // ユーザーのメッセージを取得
    
    // 応答用Tokenを取得

    //ついでにエラー処理
   
    // 応答メッセージ用のAPI URL
    var line_url = "APIのURL";
    var weth_url =  UrlFetchApp.fetch('http://weather.livedoor.com/forecast/webservice/json/v1?city=取得したい地域のコード');
    var tenki_data = JSON.parse(weth_url.getContentText());
    var message = tenki_data['title'] + "\n" + "明日の天気" + "\n天気：" + tenki_data['forecasts'][1]['telop'] + "\n最高気温：" + tenki_data['forecasts'][1]['temperature']['max']['celsius'] + "\n湿度：" + tenki_data['forecasts'][1]['temperature']['max']['fahrenheit'] + "%";
   
    var postData = {
      "to": USER_ID,
      "messages": [{
        "type": "text",
        "text": message,
      }]
    };
    var headers = {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    };
    var options = {
      "method": "post",
      "headers": headers,
      "payload": JSON.stringify(postData)
    };
    var response = UrlFetchApp.fetch(line_url, options);
    
 }


