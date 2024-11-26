// window['_' + window._pxAppId] = {
window._PXjJ0cYtn9 = {
  challenge: {
    context: {
      headerText: 'Are you a real person?',
      logoImgSrc: "https://henninb.github.io/human-challenge/brian-logo.png",
      headerFontFamily: "Ringside-Wide",
      headerFontSize: '22px',
      fontLinks: [ "https://www.texasmonthly.com/wp-content/themes/texasmonthly-child/assets/fonts/Ringside-Wide-Medium.woff" ],
      headerColor: "#373a40",  // Dark color for text on white background
      messageText: 'Help us keep your account safe by completing the below action.',
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
    if (isValid){
        const button = document.querySelector('.js-register-signin-submit-button');
        if (button){
            button.click();
        } else {
        location.reload();
        }
    }
    };
