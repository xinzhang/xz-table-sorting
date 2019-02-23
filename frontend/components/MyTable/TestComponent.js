import React from 'react';

export default function TestComponent ( { column } ) {
  return (<h3>column: {JSON.stringify(column)}</h3>);
}
