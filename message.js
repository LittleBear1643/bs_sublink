let input = document.querySelector('.input > textarea');
let result = document.querySelector('.result > textarea');

let languageSetting = document.querySelector('.settings > .language');

let prefixFirst = 'https://link.brawlstars.com/';
let prefixSecond = '/?action=voucher&code=';

let language = '';

function createLink() {
    if (input.value != '') {
        newInput = encodeURIComponent(input.value);
        language = languageSetting.value;
        result.innerHTML = prefixFirst + language + prefixSecond + newInput;
    } else {
        result.innerHTML = '';
    }
}

input.onkeyup = () => {
    createLink();
}

languageSetting.onclick = () => {
    createLink();
}