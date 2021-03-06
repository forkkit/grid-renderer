import React from 'react';

export const model = {
  rows: [
    {
      columns: [
        {
          layout: {
            colspan: 2,
            rowspan: 1,
          },
          item: {
            name: 'Item 1',
          },
        },
        {
          layout: {
            colspan: 2,
            rowspan: 1,
          },
          item: {
            name: 'Item 2',
          },
        },
      ],
    },
    {
      columns: [
        {
          layout: {
            colspan: 4,
            rowspan: 1,
          },
          item: {
            name: 'Item 3',
          },
        },
      ],
    },
  ],
};

export const toCells = (rows) => {
  const columns = rows.map((row) => row.columns);
  return [].concat.apply([], columns);
};

export const CellComponent = ({ cell }) => (
  <div className="custom-cell">
    <h1>{cell.item.name}</h1>
  </div>
);
