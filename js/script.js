document.querySelectorAll(".kuva img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".kokonaan").style.display = "block";
    document.querySelector(".kokonaan img").src = image.getAttribute("src");
    //document.querySelector(".info h2").src = document.getElementById("demo").innerHTML = this.src;
  };
});
document.querySelector(".kokonaan span").onclick = () => {
  document.querySelector(".kokonaan").style.display = "none";
};

window.addEventListener("keydown", sulje, false);
function sulje(sivu) {
  if (sivu.keyCode == "27") {
    document.querySelector(".kokonaan").style.display = "none";
  }
}

const info = [
  {
    otsikko: "Visuaalininen työ",
    info: "Tekstikenttään kirjoitan jotakin järkevää tekstiä mutta tämä on vain testi kuinka tämä kaikki toimisi",
  },
  {
    otsikko: "kuva luotu keskellä yötä",
    info: "Tekstikenttään kirjoitan jotakin järkevää tekstiä mutta tämä on vain testi kuinka tämä kaikki toimisi",
  },
  {
    otsikko: "Ei mitää hajuu että toimiiko",
    info: "Tekstikenttään kirjoitan jotakin järkevää tekstiä mutta tämä on vain testi kuinka tämä kaikki toimisi",
  },
];
const infoTeksti = JSON.stringify(info);
console.log(infoTeksti);
