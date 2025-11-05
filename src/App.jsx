import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Story from './components/Story';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-stone-800">
      <Hero />

      {/* Sezione principale con le informazioni chiave del ristorante */}
      <main>
        <Menu />
        <Story />
        <Contact />
      </main>
    </div>
  );
}

export default App;
