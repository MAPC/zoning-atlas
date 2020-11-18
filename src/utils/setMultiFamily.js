export default function setMultifamily(id) {
  switch (id) {
    case 0:
      return 'No';
    case 1:
      return 'By special permit';
    case 2:
      return 'By right';
    default:
      return new Error();
  }
}

export const multiFamily = {
  'No': 0,
  'By special permit': 1,
  'By right': 2,
};
