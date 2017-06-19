// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxSavingPercentage extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

    if (this.props.customSavingPercentage) {
      return (
				 <span>{this.props.customSavingPercentage}</span>
  		);
		} else {
      return (
         <span>{currentAsin.savingPercent}</span>
      );
		}
	}
}

export class BuyBoxSavingCopy extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

    if (this.props.customSavingCopy) {
      return (
				 <span>{this.props.customSavingCopy}</span>
  		);
		} else {
      return (
         <span>{currentAsin.savingCopy}</span>
      );
		}
	}
}

export class BuyBoxSavingPrice extends React.Component {
	render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
    if (this.props.suppliedAsin) {
      var currentAsin = this.props.suppliedAsin;
    } else {
			for(var asin in this.props.formattedAsins) break;
      var currentAsin = this.props.formattedAsins[asin];
    }

    if (this.props.customSavingPrice) {
      return (
				 <span>{this.props.customSavingPrice} </span>
  		);
		} else {
      return (
         <span>{currentAsin.savingPrice} </span>
      );
		}
	}
}
