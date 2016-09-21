$(document).ready(function() {
	var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","trumpsc","reynad27","nl_kripp", "brunofin"];
	var twitchUrl = "https://api.twitch.tv/kraken/streams/";
	var callback = "?callback=?";
	var twitchApiCallUrl = '';
	for (var i in streamers) {
		twitchApiCallUrl = twitchUrl + streamers[i];
		$.ajax({
			type: 'GET',
			url: twitchApiCallUrl,
			headers: {
				'Client-ID': 'My Twitch ID goes here'
			},		
            error: function() {
				$(".deleted-streamers").append("<div class='deleted'><img src='http://www.clker.com/cliparts/e/0/f/4/12428125621652493290X_mark_18x18_02.svg.hi.png'><h3>"+streamers[i]+"</h3> <p>" + "Account deleted</p></div>");
            },
            success: function(data) {
				var streamerName = data._links.self.replace("https://api.twitch.tv/kraken/streams/",'');
				if (data.stream === null) {
					$(".offline-streamers").append("<a href='https://www.twitch.tv/" + streamerName + "' target=_blank>" + "<div class='offline'><img src='https://4.bp.blogspot.com/-I_ZACOQgBKE/VThVHAIcMZI/AAAAAAAACSQ/25v8sn38I08/s1600/twitch%2Bnot%2Bloading%2Blogo.png'><h3>" + streamerName + "</h3> <p>Offline</p></div></a>");			
				} else {
					$(".online-streamers").append("<a href='https://www.twitch.tv/" + streamerName + "' target=_blank>" + "<div class='online'><img src='" + data.stream.channel.logo +"'><h3>" + streamerName + "</h3> <p>" + data.stream.game + "</p></div></a>");
				}
            }
            
		});
	};
});	
