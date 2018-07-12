import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import InjusticeSection from "./InjusticeSection";
import Features from "./Features";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InjusticeSection />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default App;
