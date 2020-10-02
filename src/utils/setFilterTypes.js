const multiple = (rows, id, filterValue) => rows.filter((row) => {
  const rowValue = row.values[id];
  return rowValue !== undefined && filterValue
    ? filterValue.includes(rowValue)
    : true;
});

const inclusiveOr = (rows, id, filterValue) => rows.filter((row) => {
  const rowValue = row.values[id];
  return rowValue !== undefined && filterValue
    ? rowValue.some((itemInRow) => filterValue.includes(itemInRow))
    : true;
});

const numericRange = (rows, id, filterValue) => {
  const createEquation = (rowValue) => {
    if (filterValue && filterValue.operator === 'eq') {
      return +filterValue.operand === rowValue;
    } if (filterValue && filterValue.operator === 'gt') {
      return rowValue > +filterValue.operand;
    } if (filterValue && filterValue.operator === 'lt') {
      return rowValue < +filterValue.operand;
    }
    return true;
  };
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue !== undefined && filterValue
      ? createEquation(rowValue)
      : true;
  });
};

export { multiple, inclusiveOr, numericRange };
