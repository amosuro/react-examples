import React from 'react';
import ReactDOM from 'react-dom';
import Equipment from '../equipment/equipment';
import TechnicalFeatures from '../technical_features/technical_features';
import HowToBuy from '../how_to_buy/how_to_buy';
import Withdrawal from '../withdrawal/withdrawal';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  toggle() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    var visibilityClasses = this.state.active ? 'adx-is-visible' : 'adx-is-hidden',
        iconClasses = this.state.active ? 'a-icon-section-collapse' : 'a-icon-section-expand';

    return (
      <div className="adx-accordion__item">
        <div onClick={this.toggle.bind(this)} className="adx-accordion__item__heading a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium">
          <i className={"a-icon " + iconClasses}></i>
          <span className="a-expander-prompt">
            <span className="a-size-base a-color-state">{this.props.data.heading}</span>
          </span>
        </div>
        <div className={"adx-accordion__item__content a-expander-content a-expander-section-content a-color-secondary " + visibilityClasses}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Accordion;
