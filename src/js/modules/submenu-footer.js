export function menuLinksFooterHandler() {
    if (document.body.classList.contains('mobile')) {
        const footerArrows = document.querySelectorAll('.footer-first-item__arrow');
        footerArrows.forEach(arrow => {
            arrow.classList.add('visible');

            arrow.addEventListener('click', () => {
                if (!arrow.classList.contains('active')) {
                    const allSubMenu = document.querySelectorAll('.footer-first-item__submenu');
                    allSubMenu.forEach(submenu => submenu.classList.remove('visible'));

                    const allArrows = document.querySelectorAll('.footer-first-item__arrow');
                    allArrows.forEach(arrow => arrow.classList.remove('active'));
                }

                const closestItem = arrow.closest('.footer-first-item');
                const subMenu = closestItem.querySelector('.footer-first-item__submenu');

                arrow.classList.toggle('active');
                subMenu.classList.toggle('visible');
            })
        });
    }
}