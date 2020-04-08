function keluar(){
    const lightbox = document.getElementById("white_layout")
    lightbox.classList.add("display_none")
    gambar = lightbox.getElementsByClassName("gambar")
    gambar[0].classList.value = "gambar"
}


function see_more(val){
    var element = val.parentElement.parentElement
    const destination = element.getElementsByTagName("h3")
    const category = element.getElementsByTagName('h4')
    const description = element.getElementsByTagName("p")
    const image = element.getElementsByClassName("gambar")
    var lightbox = document.getElementById("white_layout")
    var tujuan = lightbox.getElementsByTagName("h3")
    var kategori = lightbox.getElementsByTagName('h4')
    var deskripsi = lightbox.getElementsByTagName("p")[0]
    var gambar = lightbox.getElementsByClassName("gambar")
    var hidden = element.getElementsByClassName('hidden')
    lightbox.classList.remove("display_none")
    tujuan[0].innerHTML = destination[0].innerHTML
    kategori[0].innerHTML = category[0].innerHTML
    tujuan[1].innerHTML = destination[1].innerHTML
    gambar[0].classList.add(image[0].classList[1])
    deskripsi.innerText = description[0].innerHTML  + hidden[0].innerHTML
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
    keluar()
}

function displayAll(){
    const tujuan = document.getElementsByClassName('tujuan')
    for (i=0; i < tujuan.length - 1; i ++){
        tujuan[i].style.display = ''
    }
    document.getElementsByClassName('found')[0].innerHTML = ""
}

function search(){
    const cari_kategori = document.getElementById("search_category").value.toLowerCase()
    const kategori = document.getElementsByTagName('h4')
    displayAll()
    const kota = document.getElementById('select-city').value.toLowerCase()
    var counter = kategori.length - 1
    if (cari_kategori || kota){
        for (i=0; i < kategori.length; i++){
            let kat = kategori[i].innerHTML.toLowerCase()
            if (!kat.includes(cari_kategori) || !kat.includes(kota)){
                kategori[i].parentElement.parentElement.style.display = 'none'
                counter--
            }
        }
    }

    if (counter <= 0){
        document.getElementsByClassName('found')[0].innerHTML = "destination not found"
    }
}