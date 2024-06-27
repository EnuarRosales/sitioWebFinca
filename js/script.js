 // Obtener todos los botones que abren los modales
 var btns = document.querySelectorAll('.btn[id^="myBtn"]');

 // Obtener todos los modales
 var modals = document.querySelectorAll('.modal[id^="myModal"]');

 // Obtener todos los elementos <span> que cierran los modales
 var spans = document.querySelectorAll('.close');

 // Asignar eventos a cada botón para abrir su respectivo modal
 btns.forEach((btn, index) => {
     btn.onclick = function() {
         modals[index].style.display = "block";
     }
 });

 // Asignar eventos a cada <span> para cerrar su respectivo modal
 spans.forEach((span, index) => {
     span.onclick = function() {
         modals[index].style.display = "none";
     }
 });

 // Cerrar el modal cuando se hace clic fuera de él
 window.onclick = function(event) {
     modals.forEach(modal => {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     });
 }

