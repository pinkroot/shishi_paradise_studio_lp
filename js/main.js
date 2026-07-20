/* Sushi Paradise Studio — Official LP */
"use strict";

/* ---------------- song data ----------------
   yt: YouTube MV video ID (001–020 published). Songs without a
   published MV link out to the Spotify artist page instead. */
const SPOTIFY_ARTIST_URL = "https://open.spotify.com/intl-ja/artist/4VVGJjybRkbaH8TXYIydF6";

const SONGS = [
  { no: "001", title: "TACOS Overdose", yt: "FSrMU6NK0XM" },
  { no: "002", title: "Kebab Night", yt: "cl73Y0y-p1Y" },
  { no: "003", title: "Woof! Hotdog", yt: "8sgcWVzy_6Y" },
  { no: "004", title: "Pizza Time", yt: "9aB2DvFzz2o" },
  { no: "005", title: "Burger GaGaGa!", yt: "Qeb9VOAJU9I" },
  { no: "006", title: "Donuts Drop", yt: "j9TkYLckZe8" },
  { no: "007", title: "Get Nugget", yt: "5FsnQ0577cY" },
  { no: "008", title: "Say Cheese! Melt Down", yt: "6WWHxxM3jF4" },
  { no: "009", title: "CHU-CHU-CHURROS!", yt: "qGMskx73R2I" },
  { no: "010", title: "Ice Cream, Burning Dream", yt: "DBvm7Kyi9rw" },
  { no: "011", title: "Potato Power", yt: "qq1jGcJ-Fkw" },
  { no: "012", title: "Fish And Chips", yt: "SrMh8qsunHk" },
  { no: "013", title: "Sup Supa Spaghetti", yt: "eff5KCrYtX8" },
  { no: "014", title: "Chocolate Universe", yt: "MPMG9L4-kBI" },
  { no: "015", title: "Pop Pop Popcorn", yt: "lbdXd34wzJU" },
  { no: "016", title: "Frying Fried Chicken", yt: "7oSXd-c-FvI" },
  { no: "017", title: "Oh My Onion Ring!", yt: "KvSNbPMoRew" },
  { no: "018", title: "Pudding Panic", yt: "PTL2jWdLJks" },
  { no: "019", title: "Marry Me, Curry Love", yt: "cvacuDmCoYg" },
  { no: "020", title: "Yes! Sandwich", yt: "nKX4xfhGSUE" },
  { no: "021", title: "Burrito Bazooka", yt: null },
  { no: "022", title: "Gratin Kingdom", yt: null },
  { no: "023", title: "Bacon Is My Beacon", yt: null },
  { no: "024", title: "Yummy! Honey Toast", yt: null },
  { no: "025", title: "Rolling Boiled Egg", yt: null },
  { no: "026", title: "Bite Again, Juicy Steak", yt: null },
  { no: "027", title: "Bread In My Bed", yt: null },
  { no: "028", title: "Pancake Can't Take It More", yt: null },
  { no: "029", title: "Cookie Can't Stop", yt: null },
  { no: "030", title: "Meatball Got No Control", yt: null },
  { no: "031", title: "Jumping Dumpling", yt: null },
  { no: "032", title: "Cereal Loop, Serial Loop", yt: null },
  { no: "033", title: "Buy More Sausage", yt: null },
  { no: "034", title: "No! Spring Roll", yt: null },
  { no: "035", title: "Nachos! Just One More!", yt: null },
  { no: "036", title: "Yo! Yogurt", yt: null },
  { no: "037", title: "Croissant Spiral", yt: null },
  { no: "038", title: "Biri Biri Biryani", yt: null },
  { no: "039", title: "Hole Is Bagel Soul", yt: null },
];

/* ---------------- i18n ---------------- */
const I18N = {
  en: {
    nav_listen: "Listen",
    nav_music: "Music",
    nav_about: "About",
    hero_tagline: "Every food deserves a beat.",
    hero_sub: "Cyber Funky Food EDM — 39 tracks and counting.",
    cta_spotify: "Listen on Spotify",
    cta_youtube: "Watch on YouTube",
    listen_title: "LISTEN NOW",
    listen_lead: "Press play. Instant Cyber Funky Food EDM.",
    listen_spotify: "On Spotify",
    listen_mv: "Music Video",
    listen_mv_note: "“TACOS Overdose” — where it all began.",
    music_title: "ALL TRACKS",
    music_lead: "39 foods. 39 beats. Tap a jacket to play.",
    about_title: "ABOUT",
    about_p1: "Sushi Paradise Studio serves Cyber Funky Food EDM — neon-drenched electronic music where every track celebrates one thing we all love: food.",
    about_p2: "From tacos to bagels, each song is a bite-size burst of funky beats, playful vocals, and glowing neon-sign visuals. New dishes are always cooking.",
    about_p3: "Follow @SushiEDM everywhere, and turn every meal into a party.",
    footer_tag: "Food × EDM × Neon",
    badge_mv: "MV",
    badge_stream: "STREAM",
    lang_button: "日本語",
  },
  ja: {
    nav_listen: "聴く",
    nav_music: "楽曲",
    nav_about: "について",
    hero_tagline: "すべての食べ物に、ビートを。",
    hero_sub: "サイバーファンキー・フードEDM — 全39曲、まだまだ増殖中。",
    cta_spotify: "Spotifyで聴く",
    cta_youtube: "YouTubeで見る",
    listen_title: "LISTEN NOW",
    listen_lead: "再生ボタンを押せば、すぐにFood EDM。",
    listen_spotify: "Spotifyで聴く",
    listen_mv: "ミュージックビデオ",
    listen_mv_note: "「TACOS Overdose」— すべてはここから始まった。",
    music_title: "ALL TRACKS",
    music_lead: "39の食べ物、39のビート。ジャケットをタップして再生。",
    about_title: "ABOUT",
    about_p1: "Sushi Paradise Studio は「サイバーファンキー・フードEDM」を届ける音楽プロジェクト。ネオンに浸ったエレクトロニックサウンドで、すべての曲が「食べ物」を祭り上げます。",
    about_p2: "タコスからベーグルまで、どの曲もファンキーなビートと遊び心のあるボーカル、ネオンサイン風ビジュアルが詰まったひと口サイズのごちそう。新しい一皿も続々仕込み中。",
    about_p3: "各SNSは @SushiEDM で検索。毎日の食事をパーティーに。",
    footer_tag: "Food × EDM × Neon",
    badge_mv: "MV",
    badge_stream: "配信中",
    lang_button: "English",
  },
};

let currentLang = localStorage.getItem("sps-lang") || "en";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("sps-lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.getElementById("lang-toggle").textContent = dict.lang_button;
  document.querySelectorAll(".song-card-badge").forEach((el) => {
    el.textContent = el.closest(".song-card").hasAttribute("data-yt")
      ? dict.badge_mv
      : dict.badge_stream;
  });
}

/* ---------------- song grid ---------------- */
function buildGrid() {
  const grid = document.getElementById("song-grid");
  const frag = document.createDocumentFragment();
  SONGS.forEach((song) => {
    const card = document.createElement(song.yt ? "button" : "a");
    card.className = "song-card";
    if (song.yt) {
      card.type = "button";
      card.setAttribute("data-yt", song.yt);
      card.setAttribute("data-title", song.title);
    } else {
      card.href = SPOTIFY_ARTIST_URL;
      card.target = "_blank";
      card.rel = "noopener";
    }
    const img = document.createElement("img");
    img.src = `assets/jackets/${song.no}.jpg`;
    img.alt = `${song.title} jacket art`;
    img.loading = "lazy";
    const meta = document.createElement("span");
    meta.className = "song-card-meta";
    meta.style.display = "block";
    const no = document.createElement("span");
    no.className = "song-card-no";
    no.textContent = `#${song.no}`;
    const title = document.createElement("span");
    title.className = "song-card-title";
    title.textContent = song.title;
    const badge = document.createElement("span");
    badge.className = "song-card-badge";
    meta.append(no, title, badge);
    card.append(img, meta);
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

/* ---------------- MV modal ---------------- */
const modal = () => document.getElementById("mv-modal");
const frame = () => document.getElementById("mv-frame");

function openMv(videoId, title) {
  frame().src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
  document.getElementById("mv-title").textContent = title;
  modal().hidden = false;
  document.body.style.overflow = "hidden";
}

function closeMv() {
  modal().hidden = true;
  frame().src = "about:blank";
  document.body.style.overflow = "";
}

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  buildGrid();
  applyLang(currentLang);

  document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLang(currentLang === "en" ? "ja" : "en");
  });

  document.getElementById("song-grid").addEventListener("click", (e) => {
    const card = e.target.closest(".song-card[data-yt]");
    if (card) openMv(card.getAttribute("data-yt"), card.getAttribute("data-title"));
  });

  document.querySelector(".mv-modal-backdrop").addEventListener("click", closeMv);
  document.getElementById("mv-close").addEventListener("click", closeMv);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal().hidden) closeMv();
  });
});
