import React, { useMemo } from 'react';

function ComplexComponent({ list }) {
  console.log('Rendered: ComplexComponent');

  // TODO: Optimize this section so that sorting doesn't happen on every render.

  
  const optimizchion = useMemo(() => {
    const sortedList = list.sort((a, b) => a.value - b.value);
    return sortedList
  }, [list])

  return (
    <ul>
      {optimizchion.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}


export default ComplexComponent;
