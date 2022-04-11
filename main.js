"use strict";

let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

const calculator = document.querySelector('.calculator');
const operations = document.querySelector('.operations');
const result_bar = document.querySelector('.result_bar');

calculator.style.left = windowWidth / 2 - calculator.offsetWidth / 2 + 'px';
calculator.style.top = 100 + 'px';

let stringExpression = '';

function calculate(event) {
    if (event.target.textContent.length > 1) return;

    if (event.target.textContent == '=') {
        result_bar.innerHTML = eval(stringExpression);
        stringExpression = eval(stringExpression);
    }

    if (event.target.className == 'operator') {

        result_bar.innerHTML = result_bar.innerHTML + ' ' + event.target.textContent + ' ';

        if (event.target.textContent == '÷') {
            stringExpression += '/';
        }

        if (event.target.textContent == '×') {
            stringExpression += '*';
        }

        if (event.target.textContent != '×' && event.target.textContent != '÷') {
            stringExpression += event.target.textContent;
        }

    }

    if (event.target.className == 'number') {
        if (event.target.textContent != '=') {
            result_bar.innerHTML = result_bar.innerHTML + event.target.textContent;
            stringExpression += event.target.textContent;
        }
    }

    console.log(stringExpression);

}

operations.addEventListener('click', calculate);