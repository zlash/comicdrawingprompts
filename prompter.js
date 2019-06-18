

let characters = ["Question (Sage)","Batman","Spider-Man","Venom","Blue Beetle (Reyes)","Deadpool","Joker","Gambit","Kitty Pryde","Billy Batson","Mary Marvel","Carol Danvers","Iron Man","Captain America","Jim Hammond","Power Girl","Norman Osborn","Monarch","Darkseid","Onslaught","She-Hulk","Squirrel Girl","Ambush Bug","Bob, Agent of HYDRA","Moon Knight","Green Arrow","Black Canary","Taskmaster","Magneto","Deathstroke","Alan Scott","Doctor Strange","Doctor Fate (Kent VNelson)","Zatanna","Jason Todd","Black Widow","Deadshot","Jonah Hex","Ra's al Ghul","Daredevil","MrSinister","Carnage","Thor","Hit-Monkey","Ares","Songbird","Black Adam","Cyclops","V","Invincible","Talia al Ghul","Sandy Hawkins","Rorschach","Barbara Gordon","Stephanie Brown","Dick Grayson","Two-Face","Huntress (Bertinelli)","Jigsaw","Bullseye","Hush","Wildcat","Scarlet Witch","Maverick","Citizen V (Watkins III)","Colossus","Peacemaker","Shade","Doctor Mid-Nite","MrZsasz","Baron Helmut Zemo","Baron Mordo","Proteus","Akhenaten","Dormammu","Annihilus","Hyperion","Quasar","Izzy O'Toole","Adam Warlock","Surtur","The Monitor","Anti-Monitor","Parallax","Atrocitus","Larfleeze","Sinestro","Hal Jordan","Saint Walker","Iroque","Carol Ferris","Nekron","Juggernaut","Xorn","Nick Fury","Amadeus Cho","Superman"];

let actions=["Jumping","Falling","Sitting","Talking","Walking","Eating","Drinking","Thinking","Singing","Crying","Searching","Climbing","Sleeping","Shopping","Swimming","Carrying","Hugging","High-Fiving","Fighting","Hula Hooping","Shouting","Laughing","Cooking","Cleaning","Examining","Dancing","Kneeling","Cross Legged Sitting","Kicking","Punching","Cycling","Juggling","Handstanding","Running","Sneaking","Balancing"];

function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function generate() {
    let main = document.getElementById("main");
    main.innerHTML = `
    <p class="character">${getRandom(characters)}</p>
    <p class="action">${getRandom(actions)}</p>`;
}

generate();

document.getElementById("regen").addEventListener("click",()=>{
    generate();
});