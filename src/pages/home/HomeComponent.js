import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Metrics from "../../components/metrics/Metrics";
import Highlights from "../../components/highlights/Highlights";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Aurora from "../../components/aurora/Aurora";

class Home extends Component {
  render() {
    return (
      <div className="page-root">
        <Aurora />
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Metrics theme={this.props.theme} />
        <Highlights theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
