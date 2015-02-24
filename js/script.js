if(oso === undefined) {var oso = {};}

(function(){
	var render = function(target, template, json) {
		var target = document.getElementById(target);
		var template = document.getElementById(template).innerHTML;
		var fourEver = /\)\)\<([^()]*)\>\(\(/ig;
		template = template.replace(fourEver, function(all, match) {
			return eval("json." + match);
		});
		target.innerHTML = template;
	}

	var addEvent = function(event, targetClass, response) {
		var classGroup = document.getElementsByClassName(targetClass);
		for(var i = 0; i < classGroup.length; i++) {
			classGroup[i].addEventListener(event, response);
		}
	}
	//end template

	var dataObject = {
		"jeremy" : {
			"name" : "Jeremy",
			"image" : "img/jeremy.jpg",
			"imageDesc" : "jeremy profile",
			"email" : "jeremy@sourcre.am",
			"phone" : "509.475.5946",
			"skills" : "Builds Web Applications",
			"description" : "Jeremy writes server/client side code, makes music, and designs flyers. He's currently working on a javascript game engine. VampireElvis.js"
		},
		"ashley" : {
			"name" : "Ashley",
			"image" : "img/ashley.jpg",
			"imageDesc" : "ashley profile",
			"email" : "ashley@sourcre.am",
			"phone" : "509.475.5946",
			"skills" : "Front-End Dev/Design",
			"description" : "Ashley loves to create. She wants to change minds and make lives better. She is currently working on a self published book about her personal thoughts on life and everything web."
		}
	}

	addEvent("click", "card-jeremy", function showUrls() {
		render("fourever", "cards", dataObject.jeremy);
		document.body.style.background = "url('./img/background-jeremy.jpg')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundAttachment = "fixed";
	});

	addEvent("click", "card-ashley", function showUrls() {
		render("fourever", "cards", dataObject.ashley);
		document.body.style.background = "url('./img/background-ashley.jpg')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundAttachment = "fixed";
	});
})();