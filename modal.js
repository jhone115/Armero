function abrirModal(modalId) {
            document.getElementById(modalId).style.display = "block";
            document.body.style.overflow = 'hidden';
        }
        
        function cerrarModal(modalId) {
            document.getElementById(modalId).style.display = "none";
            document.body.style.overflow = 'auto';
        }
        
        // Cerrar la modal al hacer clic fuera
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        }
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    modal.style.display = "none";
                });
                document.body.style.overflow = 'auto';
            }
        });
        
function abrirModal2() {
            document.getElementById("miModal2").style.display = "block";
            document.body.style.overflow = 'hidden';
        }
        
        function cerrarModal2() {
            document.getElementById("miModal2").style.display = "none";
            document.body.style.overflow = 'auto';
            
            // Pausar todos los audios al cerrar la modal
            const audios = document.querySelectorAll('audio');
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        }
        
        // Cerrar la modal al hacer clic fuera
        window.onclick = function(event) {
            const modal = document.getElementById("miModal2");
            if (event.target === modal) {
                cerrarModal();
            }
        }
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                cerrarModal();
            }
        });

        // Control de volumen global (opcional)
        document.addEventListener('DOMContentLoaded', function() {
            const audios = document.querySelectorAll('audio');
            
            // Configurar volumen inicial
            audios.forEach(audio => {
                audio.volume = 0.7;
            });
        });