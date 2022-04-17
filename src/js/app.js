import {burgerMenuHandler} from "./modules/burger.js";
import {menuLinksHeaderHandler} from "./modules/submenu-header.js";
import {selectDeviceType} from "./modules/device-type.js";
import {searchInputButtonHandler} from "./modules/search-input.js";
import {hasWebpSupport} from "./modules/webp-css-support.js";
import {menuLinksFooterHandler} from "./modules/submenu-footer.js";
import {swiperInit} from "./modules/swiper.js";
import {focusVisibleInit} from "./modules/focus-visible.js";

selectDeviceType();
hasWebpSupport();
burgerMenuHandler();
menuLinksHeaderHandler();
menuLinksFooterHandler();
searchInputButtonHandler();
swiperInit();
focusVisibleInit();
