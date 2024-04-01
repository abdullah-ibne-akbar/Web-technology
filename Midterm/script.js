window.onload = function() {
    const logo = document.querySelector('.logo');
    const imageLinks = document.querySelectorAll('.featured-articles article img');

    imageLinks.forEach(link => {
        link.addEventListener('click', function() {
            const imageName = link.alt;
            const span = document.createElement('span');
            span.classList.add('image-name');
            span.innerText = imageName;
            logo.appendChild(span);
        });
    });
};