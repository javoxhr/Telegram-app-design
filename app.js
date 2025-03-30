document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());

tg = window.Telegram.WebApp

tg.expand()

fetch("http://127.0.0.1:7677/allProducts").then((res) => res.json()).then((data) => {
  const productsWrp = document.querySelector(".products")
  data.forEach((el) => {
    productsWrp.innerHTML += `
          <div class="product">
            <img class="product-img" src="./not-photo.jpg" alt="">
            <div class="product-text-wrapper">
                <h2>${el.title}</h2>
                <span>${el.price} uzs</span>
                <span>${el.created_at}</span>
            </div>
          </div>
        `
  })

  const product = document.querySelectorAll('.product')
  const detailModal = document.querySelector('.detail-product-modal')
  const backBtn = document.querySelector('.back-btn')

  product.forEach((pr, i) => {
    pr.addEventListener("click", () => {
      detailModal.classList.add('active-detail')
      tg.BackButton.show()
      tg.BackButton.onClick(function () {
        detailModal.classList.remove('active-detail')
        tg.BackButton.hide()
      })
    })
  })

  backBtn.addEventListener('click', () => {
    detailModal.classList.remove('active-detail')
  })

})
