import slugify from 'slugify';

const slugGen = (text) => {
  const options = {
    replacement: '-',
    remove: null,
    lower: true,
  };
  return slugify(text, options);
};

export default slugGen;
