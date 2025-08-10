
// Arrays 
        let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
        let action = ['ate', 'peed', 'crushed', 'broke'];
        let what = ['my homework', 'my phone', 'the car'];
        let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

        // Función para generar una excusa aleatoria
        function generateExcuse() {

            // Generar índices aleatorios para cada array
            let randomWho = Math.floor(Math.random() * who.length);
            let randomAction = Math.floor(Math.random() * action.length);
            let randomWhat = Math.floor(Math.random() * what.length);
            let randomWhen = Math.floor(Math.random() * when.length);

            // Concatenar los elementos seleccionados aleatoriamente
            let excuse = who[randomWho] + ' ' + action[randomAction] + ' ' + what[randomWhat] + ' ' + when[randomWhen];
            
            return excuse;
        }

        // Función que se ejecuta al cargar la página (onload)
        window.onload = function() {

            // Establecer una excusa aleatoria en el elemento excuse
            document.getElementById('excuse').innerHTML = generateExcuse();
        }

        // Función  para generar nuevas excusas con el botón
        function generateNewExcuse() {
            document.getElementById('excuse').innerHTML = generateExcuse();
        }
