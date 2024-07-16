// window['_' + window._pxAppId] = {
window._PXjJ0cYtn9 = {
  challenge: {
    context: {
      headerText: 'Are you a real person?',
      logoImgSrc: "https://henninb.github.io/human-challenge/brian-logo.png",
      headerFontSize: '22px',
      headerColor: "#373a40",  // Dark color for text on white background
      messageText: 'Help us keep your account safe by completing the below action.',
      messageFontSize: '16px',
      messageColor: "#373a40",  // Dark color for text on white background
      messagePadding: '40px',
    },
    translation: {
      "default": {
        btn: 'PRESS AND HOLD',
        textSize: 15,
      },
    },
    view: {
      fillColor: "#f8f8f2",  // Light color for elements
      backgroundColor: "#ffffff",  // White background
      borderColor: "#e0e0e0",  // Light border for contrast
      borderRadius: 50,
      preset: 1,
      borderWidth: 4,
      textColor: "#373a40",  // Dark color for text on light background
      textSize: 10,
      fontWeight: 'bold',
    }
  }
}

window._pxOnCaptchaSuccess = function (isValid) {
  if (isValid) {
    console.log('isValid');
    const button = document.querySelector('.js-register-signin-submit-button');
    if (button) {
      button.click();
    } else {
      location.reload();
    }
  }
};

// Load sensor script
// var p = document.getElementsByTagName('script')[0],
//     s = document.createElement('script');
// s.async = 1;
// s.src = '/jJ0cYtn9/init.js';
// p.parentNode.insertBefore(s, p);

// PX Cookie Syncing
// !function() {
//     // Configuration
//     var customCookieHeader = "x-px-cookies";
//     var cookiesToSync = ["_px2", "_px3", "_pxhd", "_pxvid", "pxcts"];
//     var domainsToSync = []; // TODO: add domains that should be synced with PX cookies (e.g. ["example1.com", "api.example2.com"]), apis and ui pages
//     // Implementation
//     var e=customCookieHeader,t=cookiesToSync,n=domainsToSync;if(e&&t.length&&n.length){var r=XMLHttpRequest.prototype.open;if(XMLHttpRequest.prototype.open=function(){r.apply(this,arguments);try{if(c(arguments[1])){var t=o();t&&this.setRequestHeader(e,t)}}catch(n){}},window.fetch){var i=window.fetch;window.fetch=function(){try{if(c(arguments[0])){var t=o();t&&(arguments[1]||1!==arguments.length||(arguments[1]={},arguments.length=2),arguments[1].headers||(arguments[1].headers={}),arguments[1].headers[e]=t)}}catch(n){}return i.apply(this,arguments)}}}function c(e){var t=document.createElement("a");return t.href=e,n.some(function(e){return t.hostname.indexOf(e)>-1})}function o(){return document.cookie.split(/;\s?/).reduce(function(e,n){var r=n.split("=")[0];return t.indexOf(r)>-1&&(e+=n+"; "),e},"").slice(0,-2)}
// }();
