import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Skins from "./components/skins";
import { Route, Routes } from "react-router-dom";
import Bio from "./components/bio";
import ShowFullSkin from "./components/showFullSkins";
import Power from "./components/power";

import "./index.css"




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skins: [
        {
          id: 1,
          title: 'Старра',
          img: 'starra.PNG',
          category: 'rare',
          price: '29 gems'
        },
        {
          id: 2,
          title: 'Золотая',
          img: 'gold.PNG',
          category: 'gold skin',
          price: '25000 golds'
        },
        {
          id: 3,
          title: 'Серебряная',
          img: 'silver.PNG',
          category: 'silver skin',
          price: '10000 golds'
        },
        {
          id: 4,
          title: 'Кочевница',
          img: 'nomad.PNG',
          category: 'epic',
          price: '149 gems'
        },
        {
          id: 5,
          title: 'Бедовая',
          img: 'card.PNG',
          category: 'epic',
          price: '149 gems'
        },
        {
          id: 6,
          title: 'Белая Ниндзя',
          img: 'white.PNG',
          category: 'epic',
          price: '149 gems'
        },
      ],
      showFullSkin: false,
      fullSkin: {}
    }
    this.onShowSkin = this.onShowSkin.bind(this)
  }

  render() {
    return (
      <>
        <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/bio" element={<Bio/>} />
          <Route path="/power" element={<Power />} />
          <Route path="/skins" element={<Skins skins={this.state.skins} onShowSkin={this.onShowSkin}/>} />
        </Routes>
        {this.state.showFullSkin && <ShowFullSkin skin={this.state.fullSkin} onShowSkin={this.onShowSkin}/>}
        <Footer />
      </div>
      </>
    );
  }

  onShowSkin(skin) {
    this.setState({fullSkin: skin})
    this.setState({showFullSkin: !this.state.showFullSkin})
  }

}

export default App;
