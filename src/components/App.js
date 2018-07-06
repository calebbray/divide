import React, { Component } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Intro from './body/Intro';
import Greeting from './body/Greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Greeting
          classes="greeting whitney"
          beforeOrAfter="greeting-before"
          name="Whitney"
          nickname="Whit"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat reiciendis enim quibusdam, adipisci itaque autem illo. Excepturi officia maiores numquam!"
        />
        <Greeting
          classes="greeting caleb"
          beforeOrAfter="greeting-after"
          name="Caleb"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat reiciendis enim quibusdam, adipisci itaque autem illo. Excepturi officia maiores numquam!"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
