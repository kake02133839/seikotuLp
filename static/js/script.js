function onFormSubmit(e) {
  var name = e.namedValues["名前"][0];
  var date = e.namedValues["希望日"][0];

  var token = "YOUR_ACCESS_TOKEN"; // LINE WORKS Botのアクセストークン
  var toUserId = "USER_ID"; // LINE WORKSユーザーID

  var payload = {
    botNo: YOUR_BOT_NO,
    accountId: toUserId,
    content: {
      type: "text",
      text: `📅 新しい予約が入りました\n👤 名前: ${name}\n🕐 希望日: ${date}`
    }
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    headers: {
      "Authorization": "Bearer " + token
    }
  };

  UrlFetchApp.fetch("https://apis.worksmobile.com/r/{API_ID}/message/v1/bot", options);
}
