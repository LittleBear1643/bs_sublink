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

let colorButtons = [
    [
        document.querySelector('.colors > .red > button'), '<c2></c>'
    ],
    [
        document.querySelector('.colors > .green > button'), '<c3></c>'
    ],
    [
        document.querySelector('.colors > .blue > button'), '<c4></c>'
    ]
];

colorButtons.forEach((element, index) => {
    element[0].onclick = () => {
        input.innerHTML += element[1];
        createLink();
    }
})