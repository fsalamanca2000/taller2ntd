document.addEventListener('DOMContentLoaded', function () {
    const introDiv = document.querySelector('.introduccion');
    const fichaDiv = document.querySelector('.fichaTecnica');

    introDiv.style.transition = 'all 0.3s ease-in-out';
    fichaDiv.style.transition = 'all 0.3s ease-in-out';

    introDiv.addEventListener('mouseover', () => {
        introDiv.style.transform = 'scale(1.02)';
        introDiv.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    });

    introDiv.addEventListener('mouseout', () => {
        introDiv.style.transform = 'scale(1)';
        introDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    });

    fichaDiv.addEventListener('mouseover', () => {
        fichaDiv.style.transform = 'scale(1.02)';
        fichaDiv.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    });

    fichaDiv.addEventListener('mouseout', () => {
        fichaDiv.style.transform = 'scale(1)';
        fichaDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Selección de los divs y botones
    const introDiv = document.querySelector('.introduccion');
    const fichaDiv = document.querySelector('.fichaTecnica');

    // Crear los botones "Ver más" y agregarlos a los divs
    const createToggleButton = (container, toggleFunction) => {
        const button = document.createElement('button');
        button.textContent = 'Ver más';
        button.className = 'toggle-btn';
        container.appendChild(button);
        button.addEventListener('click', () => toggleFunction(container, button));
        return button;
    };

    const toggleContent = (container, button) => {
        const isExpanded = container.classList.toggle('expanded');
        container.style.maxHeight = isExpanded ? 'none' : '500px'; // Cambia la altura según el estado
        button.textContent = isExpanded ? 'Ver menos' : 'Ver más'; // Cambia el texto del botón
    };

    // Crear y agregar los botones a los divs
    const introButton = createToggleButton(introDiv, toggleContent);
    const fichaButton = createToggleButton(fichaDiv, toggleContent);

    // Inicializar los divs con la altura fija y el botón "Ver más"
    introDiv.style.maxHeight = '500px';
    fichaDiv.style.maxHeight = '500px';
});
