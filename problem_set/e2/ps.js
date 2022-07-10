// 1000 Lights

function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights;
}


function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });
}


function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    lights = toggleLights(lights, switchNum);
  }

  let result = [];
  for (let idx = 0; idx < count; idx += 1) {
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result;
}


// diamonds

function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${'*'.repeat(number)}`)
  });
}


function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === 2) {
      increment = -2;
    }

    number += increment;
  }

  return result;

}


// abc's

function isBlockWord(word) {
  let blocks = ['BO', 'XK', "DQ", 'CP', 'NA', 'GT', 'RE', 
  'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  let letters = word.split('');

  for (let idx = 0; idx < letters.length; idx++) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[idx].toUpperCase()) > -1;
    })[0];

    if (matchingBlock === undefined) {
      return false
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}


function isBlockWord(word) {
  let wordUpper = word.toUpperCase();
  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], 
  ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

  let result =[];

  blocks.forEach(subBlock => {
    if (word.includes(subBlock[0]) && word.includes(subBlock[1])) {
      result.push(subBlock);
    }
  });

  return result.length === 0;
}

// alternate solution

function isBlockWord(word) {
  let blocks = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi,
                /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi,
                /V|I/gi, /L|Y/gi, /Z|M/gi];

  return blocks.every(regExp => {
    return (word.match(regExp) || []).length < 2;
  });
}


