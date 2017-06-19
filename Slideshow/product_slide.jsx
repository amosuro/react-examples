import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import AsinContent from '../asin_content/asin_content';
import BuyBoxTitle from '../buy_box/buy_box_title';
import BuyBoxReview from '../buy_box/buy_box_review';
import {BuyBoxListCopy, BuyBoxListPrice} from '../buy_box/buy_box_list';
import {BuyBoxBuyingCopy, BuyBoxBuyingPrice} from '../buy_box/buy_box_buying';
import BuyBoxPrime from '../buy_box/buy_box_prime';
import {BuyBoxSavingCopy, BuyBoxSavingPrice, BuyBoxSavingPercentage} from '../buy_box/buy_box_saving';
import BuyBoxATC from '../buy_box/buy_box_atc';
import ProductRangeBody from '../product_range_body/product_range_body';
import Divider from '../divider/divider';

export class ProductSlide extends React.Component {
  render() {
    var currentAsin = this.props.formattedAsins[this.props.asin];
    var asinOverride = adxCustom.asins[currentAsin.asin];

    var classes = classNames({
      'adx-slide': true,
      [`adx-slide__${this.props.id}`]: true
    });

    return (
      <div className={classes}>
        <div className="a-row">
            <div className="a-column a-span4">
              <img src={asinOverride.image} />
            </div>
            <div className="a-column a-span8 a-span-last">
              <div className="a-row a-spacing-base">

              </div>
              <div className="a-row">
                <AsinContent>
                  <h2>{asinOverride.title}</h2>
                  <p>{asinOverride.review}</p>
                  <div className="a-row a-span9">
                    <BuyBoxTitle suppliedAsin={currentAsin} />
                  </div>
                  <BuyBoxReview suppliedAsin={currentAsin} />
                  <div className="a-row a-span12">
        					 <span className="a-color-secondary"><BuyBoxListCopy suppliedAsin={currentAsin} /></span>
                   <span className="a-text-strike a-color-secondary"><BuyBoxListPrice suppliedAsin={currentAsin} /></span>
        				  </div>
                  <div className="a-row a-span12">
                    <span>
          					 <span className="a-color-secondary">
                      <BuyBoxBuyingCopy suppliedAsin={currentAsin} />
                     </span>
                     <span className="a-color-price">
                      <BuyBoxBuyingPrice suppliedAsin={currentAsin} />
                     </span>
          					</span>
                    <BuyBoxPrime suppliedAsin={currentAsin} />
                  </div>
                  <div className="a-row a-span12">
          				 <span className="a-color-secondary">
                    <BuyBoxSavingCopy suppliedAsin={currentAsin} />
                   </span>
                   <span className="a-color-price">
                    <BuyBoxSavingPrice suppliedAsin={currentAsin} />
                   </span>
                   <span className="a-color-price">
                    <BuyBoxSavingPercentage suppliedAsin={currentAsin} />
                   </span>
          			  </div>
                  <div className="a-spacing-top-base a-row a-span12">
                    <BuyBoxATC suppliedAsin={currentAsin} />
                  </div>
                </AsinContent>
              </div>
            </div>
        </div>
        <div className="a-row">
          <Divider textContent={adxCustom.divider_one} lineColor="#d7d7d7" backgroundColor="#ffffff" />
          <ProductRangeBody asin={currentAsin.asin} />
        </div>
      </div>
    );
  }
}

export default ProductSlide;
