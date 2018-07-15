import React, { Component } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Intro from './body/Intro';
import Greeting from './body/Greeting';
import Services from './body/Services';
import Pricing from './body/Pricing';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Greeting
          classes="greeting whitney grid mt-4"
          beforeOrAfter="greeting-before"
          name="Whitney"
          nickname="Whit"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat reiciendis enim quibusdam, adipisci itaque autem illo. Excepturi officia maiores numquam!"
        />
        <Greeting
          classes="greeting caleb grid mt-4"
          beforeOrAfter="greeting-before"
          name="Caleb"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat reiciendis enim quibusdam, adipisci itaque autem illo. Excepturi officia maiores numquam!"
          br="true"
        />
        <Services />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
