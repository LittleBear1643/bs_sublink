let input = document.querySelector('.input > textarea');
let result = document.querySelector('.result > textarea');

let languageSetting = document.querySelector('.settings > .language');

let prefixFirst = 'https://link.brawlstars.com/';
let prefixSecond = '/?extlink?action=voucher&code=%26page%3D';

let language = '';

function createLink() {
    if (input.value != '') {
        newInput = input.value.replaceAll('https', '%68%74%74%70%73');
        newInput = newInput.replaceAll('http', '%68%74%74%70');
        newInput = encodeURIComponent(newInput);
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