export default function setZoneUse(id) {
  switch (id) {
    case 0:
      return 'No Zone';
    case 1:
      return 'Residential';
    case 2:
      return 'Non-Residential';
    case 3:
      return 'Mixed Use (Residential and Non-Residential)';
    case 4:
      return 'Other (Open space, etc.)';
    default:
      return new Error();
  }
}

export const zoneUse = {
  'No Zone': 0,
  Residential: 1,
  'Non-Residential': 2,
  'Mixed Use (Residential and Non-Residential)': 3,
  'Other (Open space, etc.)': 4,
};
