import React from 'react';
import { useElementData, useElementColumns } from '@sigmacomputing/plugin';

function App() {
  const data = useElementData();
  const columns = useElementColumns();

  if (!data || data.length === 0) return <div>No data available</div>;

  const rawText = data[0][columns[0].name];
  const htmlContent = `<div style="font-family:Arial; font-size:16px; color:#333;">${rawText}</div>`;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default A
