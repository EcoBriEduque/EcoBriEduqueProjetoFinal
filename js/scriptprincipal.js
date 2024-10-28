//*Reciclagem e Informaçao seta*//

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    const arrow = submenu.previousElementSibling.querySelector('.arrow');

    // Verifica se o submenu está ativo
    const isActive = submenu.classList.toggle('active');

    // Adiciona ou remove a classe active da seta
    arrow.classList.toggle('active', isActive);

    // Fecha outros submenus e reseta as setas
    document.querySelectorAll('.SubReIn').forEach(sub => {
        if (sub !== submenu) {
            sub.classList.remove('active');
            sub.previousElementSibling.querySelector('.arrow').classList.remove('active');
        }
    });

    // Controla o overlay
    document.getElementById('overlay').classList.toggle('active', isActive);
}

// Fecha todos os submenus ao clicar fora
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.submenu-toggle')) {
        closeSubmenus();
    }
});

function closeSubmenus() {
    const submenus = document.querySelectorAll('.SubReIn');
    submenus.forEach(submenu => {
        submenu.classList.remove('active');
        submenu.previousElementSibling.querySelector('.arrow').classList.remove('active');
    });
    document.getElementById('overlay').classList.remove('active');
}


//*Parte 1 projeto index*//

