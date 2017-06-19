// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxTitle extends React.Component {
  render() {
		// Were we supplied with the ASIN?
		// If so, there must be multiple ASINs
		if (this.props.suppliedAsin) {
			var currentAsin = this.props.suppliedAsin;
		} else {
			for(var asin in this.props.formattedAsins) break;
			var currentAsin = this.props.formattedAsins[asin];
		}

    var title = this.props.customTitle ? this.props.customTitle : currentAsin.itemTitle;

    return (
      <a href={currentAsin.addToCartLink}
        className="a-link-normal"
        target="_blank">
        {title}
      </a>
    );
  }
}

export default BuyBoxTitle;
