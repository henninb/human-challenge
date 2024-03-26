// Create a function to load scripts asynchronously
function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
}

window['_' + window._pxAppId] = {
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

loadScript('//client.px-cloud.net/PXjJ0cYtn9/main.min.js');
