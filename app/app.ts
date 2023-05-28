let cont: any[] = [];
let number: string = '';

const buttons = document.querySelectorAll('.buttonsSelect');
const buttonsArray = Array.from(buttons);

const concate = (value: any)=>{
  cont.push(value);
}

const calculate = ()=>{
  const nodo = document.querySelector('#resultLed');
  const childrens = nodo?.children;
  const arrayChild = Array.from(childrens? childrens : []);
  arrayChild.map((item)=>{
    const valor: string = item.textContent === null ? '' :  item.textContent;
    if(valor !== '+' && valor !== '-' && valor !== 'x' && valor !== '/'){
      number = number + valor;
    }else{
      concate(parseInt(number));
      concate(valor);
      number = '';
    }
  });

  if(!isNaN(cont[0]) && number !== ''){
    concate(parseInt(number));
    let result = cont[0];
    for(let i=1; i<cont.length ; i++){
        result = cont[i] === '+' ? result + cont[i+1] : result;
        result = cont[i] === '-' ? result - cont[i+1] : result;
        result = cont[i] === 'x' ? result * cont[i+1] : result;
        result = cont[i] === '/' ? result / cont[i+1] : result;
    }
    const element = document.querySelector('#resultLed');
    element? element.innerHTML = `<p>${result}</p>`: '';
    cont = [];
    number = '';
  }else{
    alert('No puedes iniciar o terminar con un opererador!!');
    const element = document.querySelector('#resultLed');
    element? element.innerHTML = '': '';
    cont = [];
    number = '';
  }

}

const OnAc = ()=>{
  const element = document.querySelector('#resultLed');
  element? element.innerHTML = '': '';
  cont = [];
  number = '';
}

const deleteNum = ()=>{
  const nodo = document.querySelector('#resultLed');
  nodo?.removeChild(nodo.lastChild ? nodo.lastChild : nodo);
}