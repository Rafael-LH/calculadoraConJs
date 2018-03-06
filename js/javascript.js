
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
        }
          borrarTodo.addEventListener("click",borrar);

        function text(){
              cajadeTexto = document.getElementById('cajadetexto').value;
              var validaText = /^([a-zA-Z]{0,})$/;
              if(validaText.test(cajadeTexto) ){
                    document.getElementById('cajadetexto').value = '';
              }

        }cajadeTexto.addEventListener('keypress',text);
