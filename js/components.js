function loadHTML(id, filename) {
  fetch(filename)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// استدعاء الملفات
loadHTML("header", "header.html");
loadHTML("cart-offcanvas", "cart-offcanvas.html");
loadHTML("wishlist-offcanvas", "wishlist-offcanvas.html");
loadHTML("logos-1", "logos-1.html");
loadHTML("login-offcanvas", "login.html");
loadHTML("footer", "footer.html");
loadHTML("quick-view-product", "quick-view-product.html");
