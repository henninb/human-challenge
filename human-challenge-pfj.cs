@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url("https://use.typekit.net/zqt8qze.css");
body {
    background-color: #fff !important;
}

div.px-captcha-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
}

div.px-captcha-container {
   position: absolute !important;
   height: auto !important;
   background-color: #fff !important;
   font-family: 'Inter', sans-serif !important;
   padding: 40px;
   color: #404041;
   border-bottom: solid 12px #FFB81C;
   width: auto !important;
   border-radius: 0;
}

div.px-captcha-header {
    color: #000 !important;
    font-size: 28px !important;
    line-height: 1 !important;
    text-align: center !important;
    font-family: 'Fieldwork', sans-serif;
    font-weight: 600;
    font-style: normal;
    padding: 24px 0 4px 0 !important;
    margin: 0px !important;
}

img.px-captcha-logo {
    display: block !important;
    margin: auto !important;
    width: 240px !important;
    height: auto !important;
    padding: 0 !important;
}

div.px-captcha-message {
    color: #404041 !important;
    font-size: 20px !important;
    padding: 15px 40px 15px 40px !important;
    min-height: 48px !important;
    margin: 0 0 10px !important;
    line-height: 1.33 !important;
    text-align: center !important;
    font-family: 'Inter', sans-serif !important;
    font-weight: 300 !important;
}

div#px-captcha {
    min-height: 74px;
    text-align: center !important;
}

div.px-captcha-report {
    font-size: 12px;
    line-height: 1.75;
    text-align: center !important;
    color: #b1b5b8;
    text-decoration: underline;
    margin-top: 16px;
}

a.px-captcha-report {
    color: #757575;
    cursor: pointer;
    text-decoration: underline;
}

a.px-captcha-report:hover {
    color: #000;
    cursor: pointer;
    text-decoration: underline;
}

div.px-captcha-refid {
    border-top: solid 1px #f0eeee !important;
    min-height: 27px !important;
    margin: 15px 0 0 !important;
    border-radius: 0 0 3px 3px !important;
    background-color: #fafbfc !important;
    font-size: 10px !important;
    line-height: 2.7 !important;
    text-align: center !important;
    color: #b1b5b8;
}

@media (min-width: 620px) {
    div.px-captcha-container {
        width: 440px !important;
        border-radius: 12px !important;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.20), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14) !important;
    }
}

@media (min-width: 481px) and (max-width: 620px) {
    div.px-captcha-container {
        width: 85% !important;
        top: 50%;
        left: 50%;
        margin-top: -170px;
        margin-left: -42.5%;
        border-radius: 8px;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.20), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14);
    }
}

@media (max-width: 480px) {
    div.px-captcha-refid {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        border-radius: 0;
        font-size: 14px;
        line-height: 2;
    }
}

@media (max-width: 390px) {
    div.px-captcha-refid {
        font-size: 12px;
        line-height: 2.5;
    }
}

body {
    background-color: #fafbfc;
}

@media (max-width: 480px) {
    body {
        background-color: #fff;
    }
    div.px-captcha-container {
        top: 50%;
        left: 50%;
        margin-top: -274px;
        margin-left: -50%;
    }
}
