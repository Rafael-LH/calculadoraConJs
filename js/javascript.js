
        var aux = '', numeros = 0, resultado = 0;
        var suma = false, resta = false, multiplicacion = false, divicion = false, puntoDes = true;

        var borrarTodo = document.getElementById('borrarTodo');
        var cajadeTexto = document.getElementById('cajadetexto');

        document.getElementById('cajadetexto').value = '0';

        function operacion(num){
          document.getElementById('cajadetexto').value=aux+num;
          aux = document.getElementById('cajadetexto').value;
        }
        function borrar(){
              document.getElementById('cajadetexto').value='0';
              aux = '';

        }borrarTodo.addEventListener("click",borrar);

        function dell(){
                var cad =  document.getElementById('cajadetexto').value;
                var res = cad.substring(0,cad.length-1);
                if(res.length > 0){
                    aux = document.getElementById('cajadetexto').value = res;
              }else {
                    document.getElementById('cajadetexto').value = '0';
                    aux = '';
              }

        }
        /*valida que no puedan ingresar texto*/
        function text(){
              cajadeTexto = document.getElementById('cajadetexto').value;
              var validaText = /^([a-zA-Z]{0,})$/;
              if(validaText.test(cajadeTexto) ){
                    document.getElementById('cajadetexto').value = '';
              }
          }cajadeTexto.addEventListener('keypress',text);

        function decimal(){
              if(puntoDes){
                  document.getElementById('cajadetexto').value=aux+'.';
                  aux = document.getElementById('cajadetexto').value;
                  puntoDes = false;
              }
        }
        /*operadores*/
        function Sumar(){
          numeros =  parseFloat(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value='+';
          aux = '+';
          suma = true;
        }
        function Restar(){
          numeros = parseFloat(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value = '-';
          aux = '-';
          resta = true;
        }
        function Multiplicacion(){
          numeros = parseFloat(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value = '*';
          aux = '*';
          multiplicacion = true;
        }
        function Divicion(){
          numeros = parseFloat(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value='/';
          aux = '/';
          divicion = true;
        }
        function igual(){
              if(suma){
                  document.getElementById('cajadetexto').value = numeros + parseFloat(aux);
                  suma = false;
              }else if(resta){
                  aux = aux.replace('-','');
                  document.getElementById('cajadetexto').value = numeros - parseFloat(aux);
                  resta = false;
              }else if(multiplicacion){
                  aux = aux.replace('*','');
                  document.getElementById('cajadetexto').value = numeros * parseFloat(aux);
                  multiplicacion = false;
              }
              else if (divicion) {
                  aux = aux.replace('/','');
                  document.getElementById('cajadetexto').value = numeros / parseFloat(aux);
                  divicion = false;
              }
              aux = '';
              puntoDes = true;
        }








/*end*/
