
        var aux = '', numeros = 0, resultado = 0;
        var suma = false, resta = false, multiplicacion = false, divicion = false;

        var borrarTodo = document.getElementById('borrarTodo');
        var cajadeTexto = document.getElementById('cajadetexto');

        function operacion(num){
          document.getElementById('cajadetexto').value=aux+num;
          aux = document.getElementById('cajadetexto').value;
        }
        function borrar(){
              document.getElementById('cajadetexto').value='';
              aux = document.getElementById('cajadetexto').value='';

        }borrarTodo.addEventListener("click",borrar);

        function text(){
              cajadeTexto = document.getElementById('cajadetexto').value;
              var validaText = /^([a-zA-Z]{0,})$/;
              if(validaText.test(cajadeTexto) ){
                    document.getElementById('cajadetexto').value = '';
              }
          }cajadeTexto.addEventListener('keypress',text);

        /*operador*/
        function Sumar(){
          numeros =  parseInt(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value='+';
          aux = '+';
          suma = true;
        }
        function Restar(){
          numeros = parseInt(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value = '-';
          aux = '-';
          resta = true;
        }
        function Multiplicacion(){
          numeros = parseInt(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value = '*';
          aux = '*';
          multiplicacion = true;
        }
        function Divicion(){
          numeros = parseInt(document.getElementById('cajadetexto').value);
          document.getElementById('cajadetexto').value='/';
          aux = '/';
          divicion = true;
        }
        function igual(){
              if(suma){
                  document.getElementById('cajadetexto').value = numeros + parseInt(aux);
                  suma = false;
              }else if(resta){
                  aux = aux.replace('-','');
                  document.getElementById('cajadetexto').value = numeros - parseInt(aux);
                  resta = false;
              }else if(multiplicacion){
                  aux = aux.replace('*','');
                  document.getElementById('cajadetexto').value = numeros * parseInt(aux);
                  multiplicacion = false;
              }
              else if (divicion) {
                  aux = aux.replace('/','');
                  document.getElementById('cajadetexto').value = numeros / parseInt(aux);
                  divicion = false;
              }
              aux = '';
        }








/**/
