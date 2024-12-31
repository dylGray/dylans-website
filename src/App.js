import React from 'react';

function Header() {
  console.log('Header component rendered');
  return <header><h1>Welcome to Dylan's Website</h1></header>;
}

function MainContent() {
  console.log('MainContent component rendered');
  return (
    <main>
      <p>This is the main content of the website.</p>
    </main>
  );
}

function Footer() {
  console.log('Footer component rendered');
  return <footer><p>&copy; 2023 Dylan's Website</p></footer>;
}

function App() {
  console.log('App component rendered');
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
