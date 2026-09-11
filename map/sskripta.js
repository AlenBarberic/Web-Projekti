function pozdrav() {
    let imePrezime = prompt("Molimo upišite vaše ime i prezime:");
    if (imePrezime != null && imePrezime != "") {
        alert("Hej, " + imePrezime + "! Dobrodošli u našu agenciju.");
    } else {
        alert("Hej! Dobrodošli u našu agenciju.");
    }
}

function zamijeniBoju() {
    document.body.style.backgroundColor = "#e0f7fa";
}

function pokaziPoruku() {
    alert("Dobro si kliknuo!");
}
