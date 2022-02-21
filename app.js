let friends = [`Ervin Howell`, `Nick`, `Lauren`, `Eric`, `Paul`];
let crimeScenes = [`Foyer`, `Kitchen`, `Crypt`, `Wine Cellar`, `Oubliette`, `Ham Room`, `Van down by the River`, `Tool Shed`, `Shitter`, `Dungeon`];
let weapon = [
  `Weapon to surpass Metal Gear`,
  `Wet Noodle`,
  `BFG`,
  `Shame Bell`,
  `Piano`,
  `Huge Slab of Iron`,
  `Dad-Joke`,
  `Bear Hands`,
  `Killdo`,
  `Katana Folded over only 999 times`,
  `Piece of Paper`,
  `The Goo Syringe`,
  `"Just use Git, It's Easy"`,
  `Comically Large piece of Ham`,
  `Erwin Howell`,
  `Gun that shoots backwards`,
  `Glitter bomb but it's a real one`,
  `Giant Unicorn using it's horn`,
  `Bees`,
  `Poopoo`,
];

let body = $("body");
let j = 100;

function justDoItOnce() {
  for (var i = 0; i <= j; i++) {
    callForI(i);
  }

  function callForI(i) {
    let check = $(`<h3 class= accusations>Accusation ${i}</h3>`);

    check.click(function () {
      console.log(`Accusation ${i}: I accuse ${friends[i % 5]}, with the ${weapon[i % 20]} in the ${crimeScenes[i % 10]}`);
      let audio3 = new Audio(`just_a_silly_noice.mp3`);
      audio3.play();
    });

    body.append(check);

    //console.log(`Accusation ${i}: I accuse ${friends[i % 5]}, with the ${weapon[i % 20]} in the ${crimeScenes[i % 10]}`);
    //callForI(i);
  }
}

justDoItOnce();
