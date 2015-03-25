"use strict";
var Icons = (function () {
	var icons = {
		facebook: "M27.845,47.469V27.81h8.426l1.404-8.425h-9.83v-4.213c0-2.81,1.406-4.213,4.213-4.213h4.213V2.531 c-1.405,0-4.55,0-7.021,0c-7.021,0-9.83,4.213-9.83,11.234v5.618h-8.425v8.424h8.425v19.661H27.845L27.845,47.469z",
		twitter: "M49.33,11.051c-1.754,0.778-3.638,1.305-5.617,1.538c2.019-1.209,3.569-3.124,4.3-5.407 c-1.89,1.119-3.98,1.935-6.209,2.372c-1.783-1.899-4.325-3.086-7.14-3.086c-5.4,0-9.775,4.376-9.775,9.776 c0,0.767,0.085,1.514,0.251,2.229c-8.126-0.407-15.331-4.3-20.154-10.215c-0.84,1.444-1.323,3.123-1.323,4.916 c0,3.394,1.727,6.385,4.348,8.14c-1.601-0.052-3.109-0.49-4.427-1.222c-0.001,0.04-0.001,0.083-0.001,0.122 c0,4.738,3.369,8.69,7.843,9.589c-0.819,0.223-1.683,0.342-2.576,0.342c-0.631,0-1.242-0.061-1.838-0.174 c1.243,3.883,4.855,6.709,9.132,6.791c-3.343,2.621-7.56,4.186-12.141,4.186c-0.79,0-1.568-0.045-2.333-0.137 c4.326,2.771,9.466,4.391,14.989,4.391c17.982,0,27.818-14.898,27.818-27.819c0-0.423-0.012-0.847-0.028-1.268 C46.36,14.735,48.016,13.014,49.33,11.051z",
		atom: "M38.786,14.813c0.76-3.863,0.335-6.795-1.46-7.96 c-0.597-0.388-1.313-0.559-2.12-0.528c-4.358,0.166-11.39,6.165-17.134,15.011c-6.808,10.482-9.227,20.989-5.4,23.475 c1.817,1.18,4.712,0.345,7.982-1.987 M42.278,31.956c3.231-1.254,5.218-2.969,5.322-4.939c0.236-4.558-9.681-8.776-22.163-9.431 c-1.171-0.061-2.321-0.093-3.447-0.089C11.11,17.532,2.617,20.518,2.4,24.648c-0.104,1.967,1.688,3.874,4.759,5.456 M21.912,8.021 c-2.211-1.835-4.285-2.82-5.95-2.695c-0.443,0.033-0.854,0.143-1.235,0.338c-4.066,2.071-2.767,12.786,2.908,23.923 c5.675,11.138,13.572,18.486,17.638,16.415c3.911-1.994,2.855-11.979-2.279-22.645 M26.511,26.152c0,0.755-0.609,1.364-1.366,1.364 c-0.753,0-1.366-0.609-1.366-1.364l0,0c0-0.754,0.612-1.366,1.366-1.366C25.901,24.786,26.511,25.398,26.511,26.152z M26.178,26.006 c0,0.577-0.466,1.044-1.043,1.044c-0.577,0-1.044-0.467-1.044-1.044c0-0.576,0.467-1.043,1.044-1.043 C25.712,24.962,26.178,25.43,26.178,26.006z M25.641,26.051c0,0.241-0.198,0.438-0.438,0.438c-0.242,0-0.438-0.196-0.438-0.438 c0-0.242,0.196-0.438,0.438-0.438C25.443,25.613,25.641,25.809,25.641,26.051z",
		brackets: "M13.033,44.946c-4.416,0-7.979-3.563-7.979-7.979V13.033c0-4.416,3.563-7.979,7.979-7.979h23.935 c4.415,0,7.979,3.563,7.979,7.979v23.935c0,4.415-3.563,7.979-7.979,7.979H13.033z M39.627,12.947c0-1.43-1.195-2.574-2.6-2.574 H12.947c-1.43,0-2.574,1.17-2.574,2.574v24.081c0,1.431,1.17,2.6,2.574,2.6h24.081c1.431,0,2.6-1.195,2.6-2.6V12.947L39.627,12.947z M26.329,31.648h5.319V18.352h-5.319v-5.319h10.639v23.935H26.329V31.648L26.329,31.648z M13.033,13.033h10.638v5.319h-5.319v13.297 h5.319v5.319H13.033V13.033L13.033,13.033z",
		"github": "M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,24.999,2.48z",
		"linkedin": "M13.83,41.668H5.401V13.571h8.429V41.668z M44.737,41.668h-8.429V26.66c0-3.912-1.394-5.857-4.154-5.857 c-2.189,0-3.577,1.086-4.274,3.273c0,3.545,0,17.592,0,17.592h-8.431c0,0,0.115-25.288,0-28.097h6.656l0.514,5.619h0.175 c1.729-2.81,4.489-4.713,8.275-4.713c2.881,0,5.207,0.801,6.985,2.815c1.794,2.014,2.684,4.713,2.684,8.514V41.668z M9.615,2.333 c2.404,0,4.357,1.888,4.357,4.214c0,2.33-1.953,4.214-4.357,4.214c-2.403,0-4.351-1.885-4.351-4.214 C5.264,4.22,7.212,2.333,9.615,2.333z",
		"plus": "M30.312,3.749c0,0-9.758,0-13.099,0c-5.992,0-11.634,4.205-11.634,9.462 c0,5.372,4.085,9.549,10.18,9.549c0.426,0,0.838-0.096,1.241-0.125c-0.399,0.755-0.675,1.566-0.675,2.452 c0,1.496,0.801,2.687,1.814,3.675c-0.761,0-1.506,0.008-2.316,0.008c-7.421,0.006-13.136,4.729-13.136,9.629 c0,4.83,6.265,7.854,13.686,7.854c8.462,0,13.139-4.807,13.139-9.635c0-3.871-1.144-6.189-4.675-8.691 c-1.207-0.854-3.517-2.934-3.517-4.158c0-1.432,0.408-2.138,2.566-3.825c2.207-1.725,3.774-3.785,3.774-6.611 c0-3.358-1.443-7.458-4.258-7.458h4.783L30.312,3.749z M25.916,35.781c0.101,0.449,0.164,0.908,0.164,1.377 c0,3.9-2.519,6.951-9.732,6.951c-5.131,0-8.836-3.246-8.836-7.148c0-3.822,4.597-7.008,9.73-6.949 c1.194,0.014,2.312,0.205,3.324,0.525C23.352,32.48,25.349,33.574,25.916,35.781z M17.697,21.228c-3.445-0.1-6.72-3.853-7.312-8.372 c-0.593-4.527,1.717-7.988,5.159-7.885c3.443,0.106,6.719,3.734,7.312,8.256C23.451,17.748,21.142,21.328,17.697,21.228z M40.938,20.733v-6.375h-4.25v6.375h-6.375v4.25h6.375v6.374h4.25v-6.374h6.375v-4.25H40.938z",
		"pinterest": "M7.56,18.714c0,3.316,1.084,6.57,3.317,8.545c0.51,0.447,1.724,1.34,2.551,1.34 c0.703,0,0.829-0.826,0.958-1.401c0.957-3.316,0.127-1.912-1.084-4.657c-1.276-2.807-0.447-7.336,1.084-9.567 c2.87-4.402,6.187-5.997,11.609-5.997c3.061,0,5.422,1.148,7.146,2.615c6.122,5.166,1.911,21.751-5.553,20.923 c-7.461-0.83-1.402-9.952-1.402-13.97c0-6.188-8.548-5.23-8.548,2.679c0,2.743,1.085,3.509,0.896,4.21 c-1.149,3.824-1.915,8.166-2.936,12.182c-1.084,4.083-0.958,7.528-0.637,11.676c0,0.062,0.063,0.191,0.191,0.191 c0.126,0.061,0.19,0,0.254-0.065c2.934-2.934,4.784-7.653,5.487-10.526c0.382-1.467,0.892-3.253,1.212-4.784 c0.062-0.254,0.701,0.575,1.083,0.959c3.062,2.806,8.419,2.169,11.803,0.128c6.63-4.021,9.438-15.375,5.929-22.199 c-1.02-1.913-1.976-2.807-3.378-4.337c-5.743-5.805-18.244-5.422-24.368,0.382C9.856,10.102,7.56,13.674,7.56,18.714L7.56,18.714z",
		"mail": "M4.916,14.045L25,30.477l20.084-16.432v-3.652H4.916V14.045z M4.916,36.411l9.864-10.958l-9.864-8.89V36.411z M45.084,36.679L34.942,25.492l10.142-8.797V36.679z M25,33.658l-8.216-6.833L4.916,39.606h40.168L33.198,26.825L25,33.658z",
		"external": "M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z"
	}

	function get(icon) {
		return '<svg class="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook," class="i-svg"><desc>Created with Snap</desc><defs></defs><path d="' + icons[icon] + '" fill="#ffffff"></path></svg>'
	}
	return {
		get: get
	}
})();
var Sharer = (function () {

	function dimensions() {
		var width = screen.width < 500 ? screen.width : 500;
		var height = 300;
		return {
			height: height,
			width: width
		}
	}

	function getTitle(tag) {
		if (tag.title) {
			return tag.title;
		} else {
			var title = document.querySelector("title");
			if (title) {
				return title.innerHTML;
			}
		}
		return "";
	}

	function getImage(tag) {
		if (tag.src) {
			return tag.src;
		} else {
			var img = document.querySelector("meta[property='og:image']");
			if (img) {
				return img.getAttribute("content") || "";
			}
		}
		return "";
	}

	function run(tag) {
		var params = {}
		var url = encodeURIComponent(tag.href || window.location.href);
		var size = dimensions();
		switch (tag.type) {
		case "facebook":
			params.url = "https://www.facebook.com/sharer.php?s=100&p[url]=" + url;
			params.title = "Facebook Sharer"
			break;
		case "twitter":
			params.url = "https://twitter.com/share?text=" + getTitle(tag) + "&url=" + url;
			params.title = "Twitter Sharer"
			break;
		case "pinterest":
			params.url = "https://pinterest.com/pin/create/button/?url=" + url + "&media=" + getImage(tag);
			params.title = "Pinterest Sharer"
			break;
		case "plus":
			params.url = "https://plus.google.com/share?url=" + url;
			params.title = "Google+ Sharer"
			break;
		case "linkedin":
			params.url = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=";
			params.title = "Linkedin Sharer"
			break;
		case "mail":
		case "email":
			params.url = "mailto:" + url;
			params.title = "_self";
		}
		params.other = "width=" + size.width + "px,height=" + size.height + "px";
		return params;
	}
	return {
		run: run
	}
})();
Polymer('awesome-button', {
	publish: {
		type: "default",
		width: 0,
		href: "",
		target: "",
		sharer: false,
		src: ""
	},
	action: function () {
		if (this.href) {
			window.open(this.href, this.target || "");
		} else {
			if (this.sharer) {
				var sharer = Sharer.run(this);
				window.open(sharer.url, sharer.title, sharer.other);
			}
		}
	},
	click: function (event, detail, sender) {
		var self = this,
			cls = this.class
		sender.className = cls ? cls + " btn active" : "btn active";
		if (this.time) clearTimeout(this.time);
		this.time = setTimeout(function () {
			self.action();
			sender.className = cls ? cls + " btn middle" : "btn middle";
		}, 300);
	},
	move: function (event, detail, sender) {
		var left = sender.getBoundingClientRect().left,
			width = sender.offsetWidth,
			cls = this.class ? this.class + " " : "";
		event.pageX < (left + (width * .3)) ?
			sender.className = cls + "btn left" :
			event.pageX > (left + (width * .65)) ?
			sender.className = cls + "btn right" :
			sender.className = cls + "btn middle";
	},
	leave: function (event, detail, sender) {
		sender.className = this.class ? this.class + " btn" : "btn";
	},
	resize: function (w) {
		var width = this.$.awesome.clientWidth,
			el = this.$.awesome.querySelector("em");
		if (w && w > 0) {
			this.$.awesome.style.width = w + "px";
			return;
		} else {
			if (el.clientHeight > 50) {
				while (el.clientHeight > 50) {
					width = width + 4;
					this.$.awesome.style.width = width + "px";
				}
				this.$.awesome.style.width = width + 30 + "px";
			}
		}
	},
	ready: function () {
		var d = this.$.k.getDistributedNodes();
		this.text = "";
		for (var i = 0, l = d.length; i < l; i++) {
			this.text += d[i].outerHTML || d[i].textContent;
		}
		if (this.type.match(/^(facebook|twitter|plus|atom|pinterest|brackets|github|linkedin|mail|external)$/i)) {
			this.$.awesome.className = "btn " + this.type;
			this.class = this.type;
			this.text = Icons.get(this.type) + " " + this.text;
		}
		this.$.awesome.querySelector("em").innerHTML = this.text;
		this.resize(this.width);
	}
});
