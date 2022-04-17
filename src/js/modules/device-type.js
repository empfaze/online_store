export function selectDeviceType() {
    const isMobile = {
        Android: () => {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: () => {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        IOS: () => {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: () => {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: () => {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                this.Android() ||
                this.BlackBerry() ||
                this.IOS() ||
                this.Opera() ||
                this.Windows()
            );
        },
    };

    if (isMobile.any()) document.body.classList.add("mobile");
    else document.body.classList.add("desktop");
}