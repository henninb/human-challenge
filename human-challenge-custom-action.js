// window['_' + window._pxAppId] = {
window._PXjJ0cYtn9 = {
  challenge: {
    context: {
      headerText: 'Before You Get Your Offer',
      logoImgSrc: "https://test-image-host-1.s3.us-west-1.amazonaws.com/KelleyBlueBook_2023_Logos_RGB_Instant-Cash-Offer-399x144-f780b795-63a6-4872-bf81-0cac3f69a7cf.png",
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
async function replaceHelpText() {
    let px_captcha_report;
    while (!px_captcha_report) {
        px_captcha_report = document.querySelector(".px-captcha-report");
        await sleep(100);
    }
    px_captcha_report.removeChild(px_captcha_report.childNodes[0]);
    let link = document.createElement("a");
    link.href = "mailto:test@gmail.com";
    link.innerHTML = "If you thnk this is a mistake email us: test@gmail.com";
    px_captcha_report.appendChild(link);
}
replaceHelpText();
