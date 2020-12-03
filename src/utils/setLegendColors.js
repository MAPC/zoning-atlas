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
  effDensity: [
    { color: '#f6c61e', value: '1–4', min: 1, max: 5 },
    { color: '#f4a617', value: '5–9', min: 5, max: 10 },
    { color: '#F8970D', value: '10–14', min: 10, max: 15 },
    { color: '#e96b14', value: '15–19', min: 15, max: 20 },
    { color: '#fc3a1c', value: '20–24', min: 20, max: 25 },
    { color: '#eb003f', value: '25–49', min: 25, max: 50 },
    { color: '#dd0058', value: '50–74', min: 50, max: 75 },
    { color: '#f40080', value: '75–99', min: 75, max: 100 },
    { color: '#b700a6', value: '100–199', min: 100, max: 200 },
    { color: '#6800b6', value: '200–299', min: 200, max: 300 },
    { color: '#0000E3', value: '300–399', min: 300, max: 400 },
    { color: '#D8D8D8', value: 'Data n/a' },
  ],
  effFar: [
    { color: '#FFFFFF', value: 0.5 },
    { color: '#EABD2A', value: 1 },
    { color: '#FD8B09', value: 2 },
    { color: '#D3602B', value: 3 },
    { color: '#F4122C', value: 4 },
    { color: '#CE0040', value: 5 },
    { color: '#FB0063', value: 10 },
    { color: '#AD007B', value: 15 },
    { color: '#8600C6', value: 17.5 },
    { color: '#0000FB', value: 20 },
  ],
};

export default legendEntries;
