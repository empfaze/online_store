export function menuLinksHeaderHandler() {
  if (document.body.classList.contains('mobile')) {
    const menuArrows = document.querySelectorAll('.header-menu__arrow');
    menuArrows.forEach(arrow => {
      arrow.classList.add('visible');

      arrow.addEventListener('click', () => {
        if (!arrow.classList.contains('active')) {
          const allSubMenu = document.querySelectorAll('.header-submenu');
          allSubMenu.forEach(submenu => submenu.classList.remove('visible'));

          const allArrows = document.querySelectorAll('.header-menu__arrow');
          allArrows.forEach(arrow => arrow.classList.remove('active'));
        }

        const menuItem = arrow.closest('.header-menu__item');
        const subMenu = menuItem.querySelector('.header-submenu');

        arrow.classList.toggle('active');
        subMenu.classList.toggle('visible');
      })
    })
  } else {
    const hoverItems = document.querySelectorAll(".header-menu__item");
    hoverItems.forEach((item) => {
      const link = item.querySelector(".header-menu__link");
      const submenu = item.querySelector(".header-submenu");
      const lastLink = Array.from(submenu.querySelectorAll('.header-submenu__link')).pop();

      item.addEventListener("mouseenter", () => {
        item.classList.add("active");
        link.classList.add("active");
        submenu.classList.add("visible");
      });
      item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
        link.classList.remove("active");
        submenu.classList.remove("visible");
      });

      item.addEventListener("focus", () => {
        item.classList.add("active");
        link.classList.add("active");
        submenu.classList.add("visible");
      });
      lastLink.addEventListener("blur", () => {
        item.classList.remove("active");
        link.classList.remove("active");
        submenu.classList.remove("visible");
      });
    });
  }
}
