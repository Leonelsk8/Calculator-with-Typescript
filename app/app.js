var cont = [];
var number = '';
var buttons = document.querySelectorAll('.buttonsSelect');
var buttonsArray = Array.from(buttons);
var concate = function (value) {
    cont.push(value);
};
//buttonsArray.map((butt)=>{
//  butt.addEventListener('click', ()=>{
//    const valor: string = butt.textContent === null ? '' :  butt.textContent;
//    if(valor !== '+' && valor !== '-' && valor !== 'x' && valor !== '/'){
//      number = number + valor;
//      const element = document.querySelector('#resultLed');
//      const pElement = document.createElement('p');
//      pElement.innerHTML = valor
//      element !== null ? element.appendChild(pElement) : '';
//    }else{
//      concate(parseInt(number));
//      concate(valor);
//      number = '';
//      const element = document.querySelector('#resultLed');
//      const pElement = document.createElement('p');
//      pElement.innerHTML = valor
//      element !== null ?  element.appendChild(pElement) : '';
//    }
//  })
//})
buttonsArray.map(function (butt) {
    butt.addEventListener('click', function () {
        var valor = butt.textContent === null ? '' : butt.textContent;
        var element = document.querySelector('#resultLed');
        var pElement = document.createElement('p');
        pElement.innerHTML = valor;
        element !== null ? element.appendChild(pElement) : '';
    });
});
//const calculate = ()=>{
//  if(!isNaN(cont[0]) && number !== ''){
//    concate(parseInt(number));
//    let result = cont[0];
//    for(let i=1; i<cont.length ; i++){
//        result = cont[i] === '+' ? result + cont[i+1] : result;
//        result = cont[i] === '-' ? result - cont[i+1] : result;
//        result = cont[i] === 'x' ? result * cont[i+1] : result;
//        result = cont[i] === '/' ? result / cont[i+1] : result;
//    }
//    const element = document.querySelector('#resultLed');
//    element? element.innerHTML = `<p>${result}</p>`: '';
//    cont = [];
//    number = result.toString();
//  }else{
//    alert('No puedes iniciar o terminar con un opererador!!');
//    const element = document.querySelector('#resultLed');
//    element? element.innerHTML = '': '';
//    cont = [];
//    number = '';
//  }
//}
var calculate = function () {
    var nodo = document.querySelector('#resultLed');
    var childrens = nodo === null || nodo === void 0 ? void 0 : nodo.children;
    var arrayChild = Array.from(childrens ? childrens : []);
    arrayChild.map(function (item) {
        var valor = item.textContent === null ? '' : item.textContent;
        if (valor !== '+' && valor !== '-' && valor !== 'x' && valor !== '/') {
            number = number + valor;
        }
        else {
            concate(parseInt(number));
            concate(valor);
            number = '';
        }
    });
    if (!isNaN(cont[0]) && number !== '') {
        concate(parseInt(number));
        var result = cont[0];
        for (var i = 1; i < cont.length; i++) {
            result = cont[i] === '+' ? result + cont[i + 1] : result;
            result = cont[i] === '-' ? result - cont[i + 1] : result;
            result = cont[i] === 'x' ? result * cont[i + 1] : result;
            result = cont[i] === '/' ? result / cont[i + 1] : result;
        }
        var element = document.querySelector('#resultLed');
        element ? element.innerHTML = "<p>".concat(result, "</p>") : '';
        cont = [];
        number = '';
    }
    else {
        alert('No puedes iniciar o terminar con un opererador!!');
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
};
//const deleteNum = ()=>{
//  const nodo = document.querySelector('#resultLed');
//  nodo?.removeChild(nodo.lastChild ? nodo.lastChild : nodo);
//  if(cont.length > 0){
//    cont.pop();
//  }
//}
var deleteNum = function () {
    var nodo = document.querySelector('#resultLed');
    nodo === null || nodo === void 0 ? void 0 : nodo.removeChild(nodo.lastChild ? nodo.lastChild : nodo);
};
