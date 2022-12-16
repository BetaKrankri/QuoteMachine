import React from "react";
import './Quote.css'

import Button from "../Button/Button";

class Quote extends React.Component {

    getTextColor() {
        let output = "rgb(";
        output += this.props.rgb[0] + ",";
        output += this.props.rgb[1] + ",";
        output += this.props.rgb[2] + ")";
        return {
          color: output
        };
    }

    render() {
        return (
            <div className='Quote' style={this.getTextColor()}>
                <div className="quote-text">
                    <p className="quote-phrase"><i className="fa-solid fa-quote-left fa-2xl"></i>
                    {this.props.quote.phrase}
                    </p>
                </div>
                <div className="quote-author">
                    <p>-- {this.props.quote.author}</p>
                </div>
                <Button onNewQuote={this.props.onNewQuote} rgb={this.props.rgb}/>
            </div>
        );
    }
}

export default Quote;