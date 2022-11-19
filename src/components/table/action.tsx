import ButtonDelete from '../button/delete';
import ButtonEdit from '../button/edit';
import React from 'react';
import { ButtonGroup, ButtonToolbar, Table as TableBS } from 'react-bootstrap';

interface TableActionProps {
  columns: {
    id: string,
    name: string,
  }[],
  rows: {
    [keys: string]: string
  }[],
  href: string
}
function TableAction(props: TableActionProps): JSX.Element {
  const { rows, columns, href } = props;

  return (
    <TableBS striped responsive hover>
      <thead>
        <tr>
          {
            columns.map((column) => <th key={column.id}>{column.name}</th>)
          }
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row) => (
            <tr key={row.id}>
              {
                columns.map((column) => (<td key={`${row.id}${column.id}`}>{row[column.name]}</td>))
              }
              <td>
                <ButtonToolbar aria-label="Toolbar button action">
                  <ButtonGroup aria-label="Button group edit" className="me-2">
                    <ButtonEdit href={`${href}/${row.id}`} />
                  </ButtonGroup>
                  <ButtonGroup aria-label="Button group delete">
                    <ButtonDelete href={`${href}/${row.id}`} />
                  </ButtonGroup>
                </ButtonToolbar>
              </td>
            </tr>
          ))
        }
      </tbody>
    </TableBS>
  );
}

export default TableAction;
