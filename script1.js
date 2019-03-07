console.log("Are you ready");
console.log("I'm ready");

var request = new XMLHttpRequest();

var url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=getmimo";

console.log(url);


request.open("GET", url, false);
request.send();

console.log(request.response);
