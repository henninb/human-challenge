// window['_' + window._pxAppId] = {
window._PXjJ0cYtn9 = {
 challenge: {
  context: {
   headerText: 'Are you a real person?',
   logoImgSrc: "https://henninb.github.io/human-challenge/brian-logo.png",
   headerFontSize: '22px',
   headerColor: "#f8f8f2",
   messageText: 'Help us keep your account safe by completing the below action.',
   messageFontSize: '16px',
   messageColor: '#f8f8f2',
   messagePadding: '40px',
  },
  translation: {
   "default": {
    btn: 'PRESS AND HOLD',
    textSize: 15,
   },
  },
  view: {
   fillColor: "#44475a",
   backgroundColor: "#282a36",
   borderColor: "#6272a4",
   borderRadius: 50,
   preset: 1,
   borderWidth: 4,
   textColor: "#bd93f9",
   textSize: 10,
   fontWeight: 'bold',
  }
 }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadCss() {
  let captchaContainer;
  // let captchaWrapper;

  // while (!captchaWrapper) {
  //   captchaWrapper = document.querySelector("#px-captcha-wrapper > div");
  //   await sleep(100);
  // }
  // captchaWrapper.style.backgroundColor = '#282a36';

  while (!captchaContainer) {
    captchaContainer = document.querySelector('div.px-captcha-container');
    await sleep(100);
  }
  captchaContainer.style.borderBottom = 'solid 12px #F3BC2A';
}

loadCss();
