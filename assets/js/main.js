function criaCalculadora (){
  return {

    display: document.querySelector('.display'),

    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', (evento) => {
        if(evento.keyCode === 13){
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },
    
    clearDisplay(){
      this.display.value = '';
    },

    apagaUm(){
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta(){

      const reg = /((?![0-9+-/*()])[\s\S])/gm;
      let conta = this.display.value.replace(reg, "");
      console.log(conta)

      try {
        conta = eval(conta);
        
        if(!conta && conta!==0){
          alert('Conta inválida');
          return;
        }
        
        if(conta === Infinity){
          conta = 'Não é possível dividir por zero'
        }
        
        this.display.value = conta;
      } catch(evento){
        alert('Conta inválida');
      }
      return;
    },


    cliqueBotoes(){
      document.addEventListener('click', function (evento) {
        const el = evento.target;

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }

      }.bind(this));
      },

  }
}

const calculadora = criaCalculadora();
calculadora.inicia();
