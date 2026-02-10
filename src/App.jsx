import React from 'react';
import CardMovie from './components/CardMovie';

const App = () => {
  return (
    <div className="h-screen bg-[#131313] flex justify-center">
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
    </div>
  );
};

export default App;
