import React from 'react';
import TableHeader from './TableHeader';

const Table = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  prepareRow,
}) => (
  <div className="table__wrapper">
    <table {...getTableProps()} className="table">
      <thead>
        {
        headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th className="table__header">
              Edit
              <i className="fas fa-external-link-alt icon" />
            </th>
            {headerGroup.headers.map((column) => <TableHeader column={column} key={column.id} />)}
          </tr>
        ))
}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
        page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="row" key={`row-${row.id}`}>
              <td className="cell">
                <div
                  className="icon__wrapper"
                  role="button"
                  onClick={() => console.log(row.values)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      console.log(row.values);
                    }
                  }}
                  tabIndex="0"
                >
                  <i className="fas fa-edit icon icon__edit" />
                </div>
              </td>
              {
              row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="cell">
                  {
                    cell.render('Cell')
}
                </td>
              ))
}
            </tr>
          );
        })
}
      </tbody>
    </table>
  </div>
);

export default Table;
