import TableAction from './action';
import React from 'react';
import { Table as TableBS } from 'react-bootstrap';

interface TableProps {
  columns: {
    id: string,
    name: string,
  }[],
  rows: {
    [keys: string]: string
  }[]
}
function Table(props: TableProps): JSX.Element {
  const { columns, rows } = props;

  return (
    <TableBS striped responsive hover>
      <thead>
        <tr>
          {
            columns.map((column) => <th key={column.id}>{column.name}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row) => (
            <tr key={row.id}>
              {
                columns.map((column) => (<td key={`${row.id}${column.id}`}>{row[column.name]}</td>))
              }
            </tr>
          ))
        }
      </tbody>
    </TableBS>
  );
}

export default Object.assign(Table, {
  Action: TableAction,
});
