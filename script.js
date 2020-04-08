function keluar(){
    const lightbox = document.getElementById("white_layout")
    lightbox.classList.add("display_none")
    gambar = lightbox.getElementsByClassName("gambar")
    gambar[0].classList.value = "gambar"
}

function see_more(val){

    var element = val.parentElement.parentElement
    const destination = element.getElementsByTagName("h3")
    const description = element.getElementsByTagName("p")
    const image = element.getElementsByClassName("gambar")
    var lightbox = document.getElementById("white_layout")
    var tujuan = lightbox.getElementsByTagName("h3")
    var deskripsi = lightbox.getElementsByTagName("p")[0]
    var gambar = lightbox.getElementsByClassName("gambar")
    lightbox.classList.remove("display_none")
    tujuan[0].innerHTML = destination[0].innerHTML
    tujuan[1].innerHTML = destination[1].innerHTML
    deskripsi.innerHTML = description[0].innerHTML
    gambar[0].classList.add(image[0].classList[1])

}

function count(val, index){
    const element = val.parentElement
    const expense = parseFloat(element.getElementsByTagName("h3")[index].innerHTML.split(":")[1].replace("Rp ",'').replace(/\./g,''))
    var input = document.getElementById("disabled")
    var current_price = parseFloat(input.value.split(":")[1].replace("Rp ",'').replace(/\./g,''))
    var total_price = current_price + expense
    input.value = "Total Price: Rp " + total_price
}

function add_to_wishlist(val){
    count(val, 0)
}

function add_to_wishlist_2(val){
    count(val, 1)
}

function search(val){
    console.log(val.value)
    
}