while (true) {
    var num = +prompt('Raqam kiriting: ')
    var daraja = +prompt('Darajani kiriting: ')
    var numsPow = 1



    if (!isNaN(num) && num && num != 0 && daraja != 0) {
        for (let i = 0; i < daraja; i++) {
            numsPow = num * numsPow;
        }
        break
    } else {
        alert("Daraja va raqamni to'ri kiriting")
    }



}
alert("Javod: " + numsPow)




