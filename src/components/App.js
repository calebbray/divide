import React, { Component } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>My React App!</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
