import simplestorage from 'simplestorage.js'
import _ from 'lodash';

const loadPage = (url, type, currentObj, slug, history) => {
  let isDuplicate = false;
  let currentUrl = '';

  switch (type) {
    case 'ship':
      const ships = simplestorage.get('ships');
      let viewedShips = ships ? [...ships] : [];

      if (viewedShips.length === 4) {
        viewedShips.pop();
      }
      isDuplicate = _.find(viewedShips, { name: currentObj.name });
      if (!isDuplicate) {
        viewedShips.unshift(currentObj);
        simplestorage.set('ships', viewedShips);
      }
      
      currentUrl = localStorage.getItem('url');
      if (currentUrl !== url || history.location.pathname === '/') {
        const m = currentObj.url.match(/\b(\/(\d+)\/)\B.*/g);
        localStorage.setItem('url', url);
        history.push({
          pathname: `/starships/${slug}${m}`
        });
      }
      break;

    case 'planet':
      const planets = simplestorage.get('planets');
      let viewedPlanets = planets ? [...planets] : [];

      if (viewedPlanets.length === 4) {
        viewedPlanets.pop();
      }
      isDuplicate = _.find(viewedPlanets, { name: currentObj.name });
      if (!isDuplicate) {
        viewedPlanets.unshift(currentObj);
        simplestorage.set('planets', viewedPlanets);
      }
      
      currentUrl = localStorage.getItem('url');
      if (currentUrl !== url || history.location.pathname === '/') {
        const m = currentObj.url.match(/\b(\/(\d+)\/)\B.*/g);
        localStorage.setItem('url', url);
        history.push({
          pathname: `/planets/${slug}${m}`
        });
      }
      break;

    case 'character':
      const characters = simplestorage.get('characters');
      let viewedCharacters = characters ? [...characters] : [];

      if (viewedCharacters.length === 4) {
        viewedCharacters.pop();
      }
      isDuplicate = _.find(viewedCharacters, { name: currentObj.name });
      if (!isDuplicate) {
        viewedCharacters.unshift(currentObj);
        simplestorage.set('characters', viewedCharacters);
      }
      
      currentUrl = localStorage.getItem('url');
      if (currentUrl !== url || history.location.pathname === '/') {
        const m = currentObj.url.match(/\b(\/(\d+)\/)\B.*/g);
        localStorage.setItem('url', url);
        history.push({
          pathname: `/characters/${slug}${m}`
        });
      }
      break;

    default:
      return undefined;
  }
};

export default loadPage;
