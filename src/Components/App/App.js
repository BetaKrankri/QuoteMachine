import React from 'react';
import './App.css';
import Quote from '../Quote/Quote';

import { getQuote, getRGB } from '../../util/quotesBD';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        phrase: '',
        author: '',
      },
      color: [13, 136, 200]
    };
    this.updateMachine = this.updateMachine.bind(this);
  }

  componentDidMount() {
    this.updateMachine();
  }

  updateMachine() {
    let newQuote = getQuote();
    let newColor = getRGB();
    this.setState({
      quote: newQuote,
      color: newColor
    });
  }

  getBackgroundColor() {
    let output = "rgb(";
    output += this.state.color[0] + ",";
    output += this.state.color[1] + ",";
    output += this.state.color[2] +")";
    return {
      backgroundColor: output
    };
  }


  render() {
    return (
      <div className='App' style={this.getBackgroundColor()}>
        <div className='wrapper'>
          <Quote
            quote={this.state.quote}
            rgb={this.state.color}
            onNewQuote={this.updateMachine}
             />
          <br />
          <span>by <a href='https://github.com/BetaKrankri/QuoteMachine' target='_blank' rel='noreferrer'>BetaKrankri</a></span>
        </div>
      </div>
    );
  }
}

export default App;
