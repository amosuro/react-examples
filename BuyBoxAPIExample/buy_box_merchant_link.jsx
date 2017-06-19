// Wrapping any components around the AsinContent component will give
// you access to a currentAsin property.
// Example usage:

// <AsinContent>
//   <BuyBoxATC />
// </AsinContent>

import React from 'react';
import ReactDOM from 'react-dom';

export class BuyBoxMerchantLink extends React.Component {
  	render() {
			// Were we supplied with the ASIN?
			// If so, there must be multiple ASINs
      if (this.props.suppliedAsin) {
        var currentAsin = this.props.suppliedAsin;
      } else {
				for(var asin in this.props.formattedAsins) break;
        var currentAsin = this.props.formattedAsins[asin];
      }

			return (
        <div>
          <a href={currentAsin.merchantLink} className="a-link-normal" data-adx="buy-box__merchant" target="_blank">Toyota Motor Italia</a>
        </div>
  		);
  	}
}

export default BuyBoxMerchantLink;
