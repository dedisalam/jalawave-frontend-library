import ButtonGroup from '../buttonGroup';
import React from 'react';
import { Table as TableBS } from 'react-bootstrap';
import type { UseMutationResult } from 'react-query';
import type { AxiosError, AxiosResponse } from 'axios';

interface TableActionProps {
  columns: {
    id: string,
    name: string,
  }[],
  rows: {
    [keys: string]: string
  }[],
  onDelete: UseMutationResult<AxiosResponse, AxiosError, unknown, void>,
  onEdit: string
}
function TableAction(props: TableActionProps): JSX.Element {
  const {
    rows, columns, onDelete, onEdit,
  } = props;

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
                <ButtonGroup.Action
                  onDelete={(): void => onDelete.mutate({ _id: row.id })}
                  onEdit={`${onEdit}/${row.id}`}
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    </TableBS>
  );
}

export default TableAction;
