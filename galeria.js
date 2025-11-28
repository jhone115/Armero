const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const images = document.querySelectorAll(".galeria img");
    const cerrar = document.querySelector(".cerrar");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    cerrar.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        }
    document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    modal.style.display = "none";
                });
                document.body.style.overflow = 'auto';
            }
        });

    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };