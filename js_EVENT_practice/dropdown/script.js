document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.dd-button')) {
            target.nextElementSibling.classList.toggle('visible');
        }

        const clickableDropdown = target.closest('.dropdown');
        [...document.querySelectorAll('.dropdown')].forEach((currentDropdown) => {
            if (currentDropdown !== clickableDropdown) {
                currentDropdown.querySelector('.dd-menu').classList.remove('visible')

            }
        })
    })

});



