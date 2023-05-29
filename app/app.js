var cont = [];
var number = '';
var ON = false;
var buttons = document.querySelectorAll('.buttonsSelect');
var buttonsArray = Array.from(buttons);
var concate = function (value) {
    cont.push(value);
};
buttonsArray.map(function (butt) {
    butt.addEventListener('click', function () {
        if (ON) {
            var valor = butt.textContent === null ? '' : butt.textContent;
            var element = document.querySelector('#resultLed');
            var pElement = document.createElement('p');
            pElement.innerHTML = valor;
            element !== null ? element.appendChild(pElement) : '';
        }
    });
});
var calculate = function () {
    var nodo = document.querySelector('#resultLed');
    var childrens = nodo === null || nodo === void 0 ? void 0 : nodo.children;
    var arrayChild = Array.from(childrens ? childrens : []);
    arrayChild.map(function (item) {
        var valor = item.textContent === null ? '' : item.textContent;
        if (valor !== '|') {
            if (valor !== '+' && valor !== '-' && valor !== 'x' && valor !== '/') {
                number = number + valor;
            }
            else {
                concate(parseInt(number));
                concate(valor);
                number = '';
            }
        }
    });
    if (!isNaN(cont[0]) && number !== '') {
        concate(parseInt(number));
        var result = cont[0];
        for (var i = 1; i < cont.length; i++) {
            if (cont[i] === '+') {
                if (cont[i + 2] === 'x') {
                    result = result + (cont[i + 1] * cont[i + 3]);
                    i = i + 3;
                }
                else if (cont[i + 2] === '/') {
                    result = result + (cont[i + 1] / cont[i + 3]);
                    i = i + 3;
                }
                else {
                    result = result + cont[i + 1];
                }
            }
            if (cont[i] === '-') {
                if (cont[i + 2] === 'x') {
                    result = result - (cont[i + 1] * cont[i + 3]);
                    i = i + 3;
                }
                else if (cont[i + 2] === '/') {
                    result = result - (cont[i + 1] / cont[i + 3]);
                    i = i + 3;
                }
                else {
                    result = result - cont[i + 1];
                }
            }
            result = cont[i] === 'x' ? result * cont[i + 1] : result;
            result = cont[i] === '/' ? result / cont[i + 1] : result;
        }
        var element = document.querySelector('#resultLed');
        element ? element.innerHTML = "<p>".concat(result, "</p>") : '';
        cont = [];
        number = '';
    }
    else {
        alert('No puedes iniciar o terminar con un operador!!');
        var element = document.querySelector('#resultLed');
        element ? element.innerHTML = '' : '';
        cont = [];
        number = '';
    }
};
var OnAc = function () {
    var element = document.querySelector('#resultLed');
    element ? element.innerHTML = '' : '';
    cont = [];
    number = '';
    if (!ON) {
        ON = true;
        var elementOn = document.createElement('div');
        elementOn.className = 'parpadeo';
        elementOn.innerHTML = '|';
        var led = document.querySelector('#led');
        led === null || led === void 0 ? void 0 : led.appendChild(elementOn);
    }
};
var deleteNum = function () {
    var nodo = document.querySelector('#resultLed');
    nodo === null || nodo === void 0 ? void 0 : nodo.removeChild(nodo.lastChild ? nodo.lastChild : nodo);
};
