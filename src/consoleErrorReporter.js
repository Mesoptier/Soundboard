import React from 'react';
import Redbox from 'redbox-react';

export default function consoleErrorReporter({ error }) {
  console.error(error);
  return <Redbox error={error} />;
}
