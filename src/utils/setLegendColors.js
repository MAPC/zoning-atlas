/* eslint-disable object-curly-newline */
const scale = ['#f6c61e', '#f4a617', '#F8970D', '#e96b14', '#fc3a1c', '#eb003f', '#dd0058', '#f40080', '#b700a6', '#6800b6', '#0000E3'];
const dataNa = '#D8D8D8';

const legendEntries = {
  zoUsety: [
    { color: '#EDE47B', value: 'Residential', id: 1 },
    { color: '#E2A620', value: 'Mixed residential/Non-residential', id: 3 },
    { color: '#EE3125', value: 'Non-residential', id: 2 },
    { color: '#98D09A', value: 'Open Space & Recreation', id: 4 },
    { color: '#D8D8D8', value: 'No Zone', id: 0 },
  ],
  multiFam: [
    { color: '#f0dd53', value: 'By right', id: 2 },
    { color: '#ffffaf', value: 'By special permit', id: 1 },
    { color: '#ccb68c', value: 'No', id: 0 },
  ],
  effMxht: [
    { color: scale[0], value: '25–30', min: 25, max: 30 },
    { color: scale[1], value: '30–35', min: 30, max: 35 },
    { color: scale[2], value: '35–40', min: 35, max: 40 },
    { color: scale[3], value: '40–45', min: 40, max: 45 },
    { color: scale[4], value: '45–50', min: 45, max: 50 },
    { color: scale[5], value: '50–60', min: 50, max: 60 },
    { color: scale[6], value: '60–70', min: 60, max: 70 },
    { color: scale[7], value: '70–100', min: 70, max: 100 },
    { color: scale[8], value: '100–200', min: 100, max: 200 },
    { color: scale[9], value: '200+', min: 35, max: 500 },
    { color: dataNa, value: 'Data n/a' },
  ],
  effMxdu: [
    { color: scale[0], value: '1–2', min: 1, max: 2 },
    { color: scale[1], value: '2–3', min: 2, max: 3 },
    { color: scale[2], value: '3–5', min: 3, max: 5 },
    { color: scale[3], value: '5–10', min: 5, max: 10 },
    { color: scale[4], value: '10–15', min: 10, max: 15 },
    { color: scale[5], value: '15–25', min: 15, max: 25 },
    { color: scale[6], value: '25–50', min: 25, max: 50 },
    { color: scale[7], value: '50–100', min: 50, max: 100 },
    { color: scale[8], value: '100–150', min: 100, max: 150 },
    { color: scale[9], value: '150–250', min: 150, max: 250 },
    { color: scale[10], value: '250+', min: 250, max: 5000 },
    { color: dataNa, value: 'Data n/a' },
  ],
  effDensity: [
    {
      color: scale[0], value: '1–4', min: 1, max: 5,
    },
    {
      color: scale[1], value: '5–9', min: 5, max: 10,
    },
    {
      color: scale[2], value: '10–14', min: 10, max: 15,
    },
    {
      color: scale[3], value: '15–19', min: 15, max: 20,
    },
    {
      color: scale[4], value: '20–24', min: 20, max: 25,
    },
    {
      color: scale[5], value: '25–49', min: 25, max: 50,
    },
    {
      color: scale[6], value: '50–74', min: 50, max: 75,
    },
    {
      color: scale[7], value: '75–99', min: 75, max: 100,
    },
    {
      color: scale[8], value: '100–199', min: 100, max: 200,
    },
    {
      color: scale[9], value: '200–299', min: 200, max: 300,
    },
    {
      color: scale[10], value: '300–399', min: 300, max: 400,
    },
    { color: dataNa, value: 'Data n/a' },
  ],
  effFar: [
    {
      color: scale[0], value: '0–0.5', min: 0, max: 0.5,
    },
    {
      color: scale[1], value: '0.5–1', min: 0.5, max: 1,
    },
    {
      color: scale[2], value: '1–2', min: 1, max: 2,
    },
    {
      color: scale[3], value: '2–3', min: 2, max: 3,
    },
    {
      color: scale[4], value: '3–4', min: 3, max: 4,
    },
    {
      color: scale[5], value: '4–5', min: 4, max: 5,
    },
    {
      color: scale[6], value: '5–10', min: 5, max: 10,
    },
    {
      color: scale[7], value: '10–15', min: 10, max: 15,
    },
    {
      color: scale[8], value: '15–17.5', min: 15, max: 17.5,
    },
    {
      color: scale[9], value: '17.5+', min: 17.5, max: 21,
    },
    { color: dataNa, value: 'Data n/a' },
  ],
};

export default legendEntries;
export { dataNa };
