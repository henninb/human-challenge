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

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function cssUpdates() {
//   const body = document.body;

//   // Apply background color and text color styles
//   body.style.backgroundColor = '#282a36';
//   body.style.color = '#f8f8f2';
// }

// cssUpdates();

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');

  document.querySelectorAll('div.px-captcha-background').forEach(background => {
        background.style.backgroundColor = '#282a36';
    });

   // Select elements by class name and apply styles
// const captchaBackgrounds = document.querySelectorAll('div.px-captcha-background');
// captchaBackgrounds.forEach(background => {
//     background.style.backgroundColor = '#282a36';
// });

document.querySelectorAll('div.px-captcha-container').forEach(container => {
    container.style.backgroundColor = '#282a36';
    container.style.borderBottom = 'solid 12px #6272a4';
    container.style.color = '#f8f8f2';
});

// const captchaHeaders = document.querySelectorAll('div.px-captcha-header');
// captchaHeaders.forEach(header => {
//     header.style.color = '#ff79c6';
// });

// const captchaLogos = document.querySelectorAll('img.px-captcha-logo');
// captchaLogos.forEach(logo => {
//     logo.style.filter = 'invert(100%)';
// });

// const captchaMessages = document.querySelectorAll('div.px-captcha-message');
// captchaMessages.forEach(message => {
//     message.style.color = '#f8f8f2';
// });

// const captchaReports = document.querySelectorAll('div.px-captcha-report, a.px-captcha-report');
// captchaReports.forEach(report => {
//     report.style.color = '#bd93f9';
//     report.addEventListener('mouseover', () => {
//         report.style.color = '#ff79c6';
//     });
//     report.addEventListener('mouseout', () => {
//         report.style.color = '#bd93f9';
//     });
// });

// const captchaRefids = document.querySelectorAll('div.px-captcha-refid');
// captchaRefids.forEach(refid => {
//     refid.style.borderTop = 'solid 1px #44475a';
//     refid.style.backgroundColor = '#282a36';
//     refid.style.color = '#6272a4';
// });


});
