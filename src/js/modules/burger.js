export function burgerMenuHandler() {
  const menuWrapper = document.querySelector(".burger");
  const menuIcon = document.querySelector(".burger__icon");
  const menuNav = document.querySelector(".header-nav__body");

  menuWrapper.addEventListener("click", menuHandler);
  menuNav.addEventListener("click", menuHandler);

  function menuHandler() {
    if (menuIcon.classList.contains('active') && menuNav.classList.contains('active')) {
      releaseMenuPosition();
      closeMenu();
    } else {
      fixMenuPosition();
      openMenu();
    }
  }

  function openMenu() {
    menuIcon.classList.add("active");
    menuNav.classList.add("active");
  }
  function closeMenu() {
    menuIcon.classList.remove("active");
    menuNav.classList.remove("active");
  }

  function fixMenuPosition() {
    const height = Number(window.scrollY);
    document.body.dataset.scroll = height;

    document.body.classList.add("lock");
    document.body.style.top = `-${height}px`;
  }
  function releaseMenuPosition() {
    document.body.classList.remove("lock");
    document.body.style.top = "";
    window.scrollTo(0, Number(document.body.dataset.scroll));
    document.body.removeAttribute("data-scroll");
  }
}
