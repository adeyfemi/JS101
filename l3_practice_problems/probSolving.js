// question 1
function lightsOn(switches) {
  let lights;

  for (let el = 1; el <= switches; el++) {
    for (let count = 1; count <= switches; count++) {
      if (count % 2 === 1) {
        lights = toggleLights(switches);
    } else if (count % 2 === 0) {
      lights = toggleLights(switches)
    }
  }

  Object.keys(lights).filter(key => lights[key] === 'ON')
}

function initializeLights(n) {
  let lights = {};

  for (let count = 1; count <= n; count++) {
    lights[count] = 'OFF';
  }
  return lights;
}

function toggleLights(n) {
  let currentSwitch = initializeLights(n);

  for (let count = 1; count <= n; count++) {
    if (currentSwitch[count] === 'ON') {
      currentSwitch[count] = 'OFF';
    } else { 
      currentSwitch[count] = 'ON';
    }
  }
  return currentSwitch;
}


// question 2

let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE',
'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord(str) {
  let arrayString = str.split('');
  let usedBlocks = [];
  let letterArray = []

  arrayString.forEach(char => {
    blocks.forEach(el => {
      if (el.includes(char.toUpperCase()) && !usedBlocks.includes(el)) {
        letterArray.push(char);
        usedBlocks.push(el);
      }
    })
  })
  console.log(letterArray);
  return letterArray.length === str.length
};



//

    // returns 2
