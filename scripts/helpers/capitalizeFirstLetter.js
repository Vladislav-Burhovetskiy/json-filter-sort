export default function capitalizeFirstLetter(str) {
  if (typeof str !== 'string') {
    console.error('Input is not a string');
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}