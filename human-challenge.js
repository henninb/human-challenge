// window['_' + window._pxAppId] = {
window._PXjJ0cYtn9 = {
// window._PXjG1SiPIM = {
  challenge: {
    context: {
      headerText: 'Before You Get Your Offer',
      logoImgSrc: "https://assets.signin.coxautoinc.com/static/images/asset-kelleybluebook-ico.png",
      headerFontSize: '22px',
      headerColor: "#000",
      messageText: 'Help us know that you are a real human.',
      messageFontSize: '16px',
      messageColor: '#404041',
      messagePadding: '40px',
      messageFont: "Open-Sans",
    },
    translation: {
      "default": {
        btn: 'Press and Hold',
        textFont: "Open-Sans",
        textSize: 15,
      },
    },
    view: {
      fillColor: "#2B5195",
      backgroundColor: "#FFFFFF",
      borderColor: "#2B5195",
      targetColor: "E6F5FE",
      borderWidth: 4,
      borderRadius: 3,
      preset: 1,
      borderWidth: 4,
      css: ['open-sans.regular.ttf'],
      textFont: 'Open Sans, sans-serif',
      textColor: "#2B5195",
      textSize: 10,
    }
  }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadCss() {
  let captchaContainer;

  while (!captchaContainer) {
    captchaContainer = document.querySelector('div.px-captcha-container');
    console.log('wait');
    await sleep(100);
  }
  captchaContainer.style.borderBottom = 'solid 12px #F3BC2A';
}

loadCss();
