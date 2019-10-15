import random from 'random';
import { shipUrls, planetUrls, characterUrls } from './data';

const imageGen = (type) => {
  let options = {};

  switch (type) {
    case 'ship':
      options = { dataArray: shipUrls, max: 5 };
      break;
    
    case 'planet':
        options = { dataArray: planetUrls, max: 2 };
        break;

    case 'character':
        options = { dataArray: characterUrls, max: 3 };
        break;

    default:
      options = { dataArray: planetUrls, max: 2 }
  }

  const index = random.int(0, options.max);
  return options.dataArray[index];
};

export default imageGen;
