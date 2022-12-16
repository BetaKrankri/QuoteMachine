import React from "react";
import './Button.css'

class Button extends React.Component {
    getButtonColor() {
        let output = "rgb(";
        output += this.props.rgb[0] + ",";
        output += this.props.rgb[1] + ",";
        output += this.props.rgb[2] + ")";
        return {
          backgroundColor: output
        };
    }



    render() { 
        return (
            <button className="Button" onClick={this.props.onNewQuote} style={this.getButtonColor()}>
                New Quote
            </button>
        );
    }
}
 
export default Button;