
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
              /*esta variable es para checar si en esta cadena hay un punto decimal*/
              var verCadena = document.getElementById('cajadetexto').value;

              for (var i = 0; i < verCadena.length; i++) {
                   if(verCadena[i] == '.'){
                        puntoDes = true;
                    }
              }

              document.getElementById('cajadetexto').value='0';
              aux = '';

        }borrarTodo.addEventListener("click",borrar);

        function dell(){
                var cad =  document.getElementById('cajadetexto').value;
                var encontrarPunto = cad;
                var encontrarPunto = encontrarPunto.substring(encontrarPunto.length-1);
                var res = cad.substring(0,cad.length-1);

               if(res.length > 0){
                    aux = document.getElementById('cajadetexto').value = res;
              }if(encontrarPunto == '.'){
                    puntoDes = true;
              }else if(res.length <= 0){
                    document.getElementById('cajadetexto').value = '0';
                    aux = '';
              }

        }
        /*valida que no puedan ingresar texto*/
        function text(){
              cajadeTexto = document.getElementById('cajadetexto').value;
              var validaNumber = /^([0-9]{0,})$/;

              for (var i = 0; i < cajadeTexto.length; i++) {
                      if(!validaNumber.test(cajadeTexto[i]) ){
                          document.getElementById('cajadetexto').value = '';
                          aux = '';
                        }
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
