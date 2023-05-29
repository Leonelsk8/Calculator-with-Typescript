let cont: any[] = [];
let number: string = '';
let ON: boolean = false;

const buttons = document.querySelectorAll('.buttonsSelect');
const buttonsArray = Array.from(buttons);

const concate = (value: any)=>{
  cont.push(value);
}

buttonsArray.map((butt)=> {
  butt.addEventListener('click', ()=> {
    if(ON){
      let valor = butt.textContent === null ? '' : butt.textContent;
      let element = document.querySelector('#resultLed');
      let pElement = document.createElement('p');
      pElement.innerHTML = valor;
      element !== null ? element.appendChild(pElement) : '';
    }
  });
});

const calculate = ()=>{
  const nodo = document.querySelector('#resultLed');
  const childrens = nodo?.children;
  const arrayChild = Array.from(childrens? childrens : []);
  arrayChild.map((item)=>{
    const valor: string = item.textContent === null ? '' :  item.textContent;
    if(valor !== '|'){
      if(valor !== '+' && valor !== '-' && valor !== 'x' && valor !== '/'){
        number = number + valor;
      }else{
        concate(parseInt(number));
        concate(valor);
        number = '';
      }
    }
  });

  if(!isNaN(cont[0]) && number !== ''){
    concate(parseInt(number));
    let result = cont[0];

    for(let i=1; i<cont.length ; i++){
      if(cont[i] === '+' ){
        if(cont[i+2]=== 'x'){
          result = result + (cont[i+1] * cont[i+3]);
          i= i+3;
        }else if(cont[i+2]=== '/'){
          result = result + (cont[i+1] / cont[i+3]);
          i= i+3;
        }else{
          result = result + cont[i+1];
        }
      }

      if(cont[i] === '-' ){
        if(cont[i+2]=== 'x'){
          result = result - (cont[i+1] * cont[i+3]);
          i= i+3;
        }else if(cont[i+2]=== '/'){
          result = result - (cont[i+1] / cont[i+3]);
          i= i+3;
        }else{
          result = result - cont[i+1];
        }
      }
      result = cont[i] === 'x' ? result * cont[i+1] : result;
      result = cont[i] === '/' ? result / cont[i+1] : result;
    }

    const element = document.querySelector('#resultLed');
    element? element.innerHTML = `<p>${result}</p>`: '';
    cont = [];
    number = '';
  }else{
    alert('No puedes iniciar o terminar con un operador!!');
    const element = document.querySelector('#resultLed');
    element? element.innerHTML = '': '';
    cont = [];
    number = '';
  }

}

const OnAc = ()=>{
  const element = document.querySelector('#resultLed');
  element?element.innerHTML = '':'';
  cont = [];
  number = '';
  
  if(!ON){
    ON = true;
    const elementOn = document.createElement('div');
    elementOn.className = 'parpadeo';
    elementOn.innerHTML  = '|';
    const led = document.querySelector('#led');
    led?.appendChild(elementOn);
  }
}

const deleteNum = ()=>{
  const nodo = document.querySelector('#resultLed');
  nodo?.removeChild(nodo.lastChild ? nodo.lastChild : nodo);
}