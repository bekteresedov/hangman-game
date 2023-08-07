// data
const hangmanGame = [
  {
    name: "genesis",
    picture: "genesis.jpg",
    song: "Illegal Alien",
    preview:
      "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8",
  },

  {
    name: "madonna",
    picture: "madonna.jpg",
    song: "Material Girl",
    preview:
      "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c",
  },

  {
    name: "todo",
    picture: "toto.jpg",
    song: "Rosanna",
    preview:
      "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317",
  },

  {
    name: "queen",
    picture: "queen.jpg",
    song: "Princes of the Universe",
    preview:
      "https://p.scdn.co/mp3-preview/b84f24300476f3d3f20056d2388cc51db2e3891f",
  },
  {
    name: "uu",
    picture: "u2.jpg",
    song: "With or Without You",
    preview:
      "https://p.scdn.co/mp3-preview/28365dff1890075c1371628371cd0e5bbff9a3a3",
  },
  {
    name: "metallica",
    picture: "metallica.jpg",
    song: "Master of Puppets",
    preview:
      "https://p.scdn.co/mp3-preview/60e6f8dab43f176dd9fb5e795d4e6459bad52e9e",
  },
  {
    name: "journey",
    picture: "journey.jpg",
    song: "Don't Stop Believin'",
    preview:
      "https://p.scdn.co/mp3-preview/21b9abd3cd2eea634e17a917196fdd5ba2e82670",
  },
  {
    name: "inxs",
    picture: "inxs.jpg",
    song: "Need You Tonight",
    preview:
      "https://p.scdn.co/mp3-preview/61b17a335d5afc1c4086b1b08e2400f0da147977",
  },
  {
    name: "poison",
    picture: "poison.jpg",
    song: "Fallen Angel",
    preview:
      "https://p.scdn.co/mp3-preview/0365ad1f152f1834b42b857c4625191cebf9f987",
  },
  {
    name: "rush",
    picture: "rush.jpg",
    song: "Limelight",
    preview:
      "https://p.scdn.co/mp3-preview/154987dfb07f2fc5ed7aa4d76b80c5dc08ff4d6b",
  },
  {
    name: "blondie",
    picture: "blondie.jpg",
    song: "Call Me",
    preview:
      "https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90",
  },
];

const getRandomNumber = () => {
  return hangmanGame[Math.floor(Math.random() * hangmanGame.length)];
};

const startGame = () => {
  el.innerHTML = `Guesses: ${guessCount}`;
  los.innerHTML = `Losses: ${losCount}`;
  getWord = getRandomNumber().name.split("");
  dash = "-".repeat(getWord.length);
  content.innerHTML = dash;
  herfler.innerHTML = "";
  dash = dash.split("");
};

let winCount = 0;
let losCount = 0;
let guessCount = 9;

let getWord = getRandomNumber().name.split("");
let dash = "-".repeat(getWord.length);

let win = document.getElementById("win");
let los = document.getElementById("los");
let el = document.getElementById("gues");
let herfler = document.getElementById("herfler");
let content = document.getElementById("content");
content.innerHTML = dash;
dash = dash.split("");

document.getElementById("again").onclick = function () {
  guessCount = 9;
  losCount = 0;
  startGame();
};
window.onkeyup = function (e) {
  if (guessCount === 0) {
    alert("Your guess was ended!");
    return;
  }

  if (e.keyCode <= 90 && e.keyCode >= 65) {
    const key = e.key;
    herfler.innerHTML += key;
    if (getWord.includes(key) && !dash.includes(key)) {
      getWord.forEach((value, index) => {
        if (value === key) {
          dash[index] = key;
        }
      });
      content.innerHTML = dash.join("");
    } else {
      guessCount--;
      losCount++;
      el.innerHTML = `Guesses: ${guessCount}`;
      los.innerHTML = `Losses: ${losCount}`;
    }
    if (!dash.includes("-")) {
      win.innerHTML = `Wins: ${++winCount}`;
      startGame();
    }
  }
};
