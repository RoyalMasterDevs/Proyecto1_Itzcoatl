var x = 0;

const openMenu = () => {
    if (x == 0) {
        document.getElementById("item-hambur").classList.replace("menu-hamburguer-hid", "menu-hamburguer");
        x = 1;
    } else {
        document.getElementById("item-hambur").classList.replace("menu-hamburguer", "menu-hamburguer-hid");
        x = 0;
    }

}