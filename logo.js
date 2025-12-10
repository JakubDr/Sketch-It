const loga = [
  {nazev: "Apple", img: "loga/Apple_logo_black.svg"},
  {nazev: "Nike", img: "loga/nike-black.jpg"},
  {nazev: "Google", img: "loga/google.webp"},
  {nazev: "McDonald's", img: "loga/McDonald's_Golden_Arches.svg.png"},
  {nazev: "Chanel", img: "loga2/Chanel_logo-no_words.svg.png"},
  {nazev: "Audi", img: "loga2/audi-logo-2016.webp"},
  {nazev: "Rolex", img: "loga2/Logo_da_Rolex.png"},
  {nazev: "Snapchat", img: "loga3/snapchat-logo-black-and-white.png"},
  {nazev: "Twitter", img: "loga3/TTTW.png"},
  {nazev: "NASA", img: "loga3/NASA_logo.svg.png"},
  {nazev: "Android", img: "loga3/Android.svg"},
  {nazev: "Spotify", img: "loga3/Spotify.svg"}
];

let aktualni = {};

function Logo() {
  let nove;
  do {
    nove = loga[Math.floor(Math.random() * loga.length)];
  } while (aktualni.img === nove.img);

  aktualni = nove;
  document.getElementById('nazevLogo').textContent = "Nakreslete logo: " + aktualni.nazev;
  cist();
  document.getElementById('logoBox').style.display = 'none';
}
