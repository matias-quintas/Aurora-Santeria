const btnMas = document.querySelector(".btn-mas");
let btnState = true;
btnMas.addEventListener("click", ()=>{
    const products = document.querySelectorAll(".product");
    if (btnState){
        products.forEach(prod =>{
            prod.classList.remove("d-none");
        });
        btnMas.textContent = "VER MENOS";
        btnState = false;
    }else{
        products.forEach((prod, i) =>{
            if (i>2) prod.classList.add("d-none");
        });
        btnMas.textContent = "VER MÁS";
        btnState = true;
        document.querySelector(".products").scrollIntoView();
    }
});