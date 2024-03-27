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

let y = document.querySelector("#px-captcha-wrapper > div");

async function replaceHelpText() {
    let px_captcha_report;
    while (!px_captcha_report) {
        px_captcha_repor t= document.querySelector("#px-captcha-wrapper > div");
        await sleep(100);
    }
    px_captcha_report.removeChild(px_captcha_report.childNodes[0]);
    px_captcha_report.style.backgroundColor = '#282a36';
}
replaceHelpText();



// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  console.log('pxAppId:' + window._pxAppId);
  console.log('pxAppId:' + window._PXjJ0cYtn9);

  let x = document.querySelectorAll('div.px-captcha-background');
  console.log('x:' + x);
  console.log('document.querySelectorAll(\'div.px-captcha-background\')');
  console.log('x.length:' + x.length);

  let y = document.querySelector("#px-captcha-wrapper > div");
  console.log('y:' + y);


Array.from(document.querySelectorAll('div.px-captcha-background')).forEach(background => {
    console.log('backgroundColor:' + background.style.backgroundColor);
    background.style.backgroundColor = '#282a36';
    console.log('backgroundColor:' + background.style.backgroundColor);
});


  for (let i = 0; i < x.length; i++) {
  // Do stuff
    console.log('backgroundColor:' + background.style.backgroundColor);
    background.style.backgroundColor = '#282a36';
    console.log('backgroundColor:' + background.style.backgroundColor);
}

  document.querySelectorAll('div.px-captcha-background').forEach(background => {
        console.log('backgroundColor:' + background.style.backgroundColor);
        background.style.backgroundColor = '#282a36';
        console.log('backgroundColor:' + background.style.backgroundColor);
    });

  document.querySelectorAll('div.px-captcha-container').forEach(container => {
      container.style.backgroundColor = '#282a36';
      container.style.borderBottom = 'solid 12px #6272a4';
      container.style.color = '#f8f8f2';
  });
});
