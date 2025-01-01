import React from 'react';

function Header() {
  console.log('Header component rendered');
  return <header className="bg-blue-500 text-white p-4"><h1>Welcome to Dylan's Website</h1></header>;
}

function MainContent() {
  console.log('MainContent component rendered');
  return (
    <main className="p-4">
      <p>This is the main content of the website.</p>
    </main>
  );
}

function Footer() {
  console.log('Footer component rendered');
  return <footer className="bg-gray-800 text-white p-4"><p>&copy; 2023 Dylan's Website</p></footer>;
}

function App() {
  console.log('App component rendered');
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;