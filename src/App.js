import React from 'react';
import { useGlobalContext } from './Context';

import Navbar from './Navbar';
import CartContainer from './CartContainer';

const App = () => {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
