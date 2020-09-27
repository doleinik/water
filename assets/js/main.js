let order = document.getElementById("order");
document.getElementById("button-buy").onclick = function () {
    order.style = "display: block";
};
document.getElementById('order__close').onclick = function () {
    order.style = "display: none";
}
