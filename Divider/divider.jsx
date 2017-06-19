import React from 'react';
import ReactDOM from 'react-dom';

export class Divider extends React.Component {
  render() {
    var dividerContentStyles = {
      backgroundColor: this.props.backgroundColor
    }

    var dividerLineStyles = {
      backgroundColor: this.props.lineColor
    }

    return (
      <div className="adx-divider">
        <div className="adx-divider__content" style={dividerContentStyles}>
          <h1 className="adx-divider__content__heading">{this.props.textContent}</h1>
        </div>
        <span className="adx-divider__line" style={dividerLineStyles}></span>
      </div>
    );
  }
}

Divider.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired,
  lineColor: React.PropTypes.string.isRequired
}

export default Divider;
