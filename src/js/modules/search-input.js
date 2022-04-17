export function searchInputButtonHandler() {
    const searchButton = document.querySelector(".input__icon");
    const searchInput = document.querySelector(".input__input");

    searchButton.addEventListener('click', () => searchInput.value = '');
    searchButton.addEventListener('keydown', e => {
        if (e.key !== "Enter") return;

        searchInput.value = '';
    })

    const footerEmailInput = document.querySelector('.footer-second-item__submenu-input');
    const footerCheckbox = document.querySelector('.footer-second-item__submenu-checkbox');
    const footerForm = document.querySelector('.footer-second-item__submenu-form');
    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (footerEmailInput.value.trim().length === 0) return;

        footerCheckbox.checked = false;
        footerEmailInput.value = "";
    })
}