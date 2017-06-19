import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AsinContent from '../asin_content/asin_content';
import AutoBuyBox from '../auto_buy_box/auto_buy_box';
import SlidesPagination from './slideshow_pagination';
import ProductSlide from './product_slide';
import ImageSlide from './image_slide';

// TODO: currently not used, may need some re-work
// class Controls extends React.Component {
//   togglePrev() {
//     var current = state.currentSlide;
//     var prev = current - 1;
//
//     if (prev < 0) {
//       prev = state.data.length - 1;
//     }
//
//     state.currentSlide = prev;
//     render(state);
//   }
//
//   toggleNext() {
//     var current = state.currentSlide;
//     var next = current + 1;
//
//     if (next > state.data.length - 1) {
//       next = 0;
//     }
//
//     state.currentSlide = next;
//     render(state);
//   }
//
//   render() {
//     return (
//       <div className="adx-slideshow-controls">
//         <div className="adx-slideshow-controls__toggle adx-slideshow-controls__toggle--prev" onClick={this.togglePrev}>Prev</div>
//         <div className="adx-slideshow-controls__toggle adx-slideshow-controls__toggle--next" onClick={this.toggleNext}>Next</div>
//       </div>
//     );
//   }
// }

class Slides extends React.Component {
  render() {
    var currentSlide = this.props.data[this.props.currentSlide];

    if (currentSlide.asin) {
      return (
        <div className="adx-slides">
          <AsinContent asin={currentSlide.asin} key={currentSlide.id}>
            <ProductSlide id={currentSlide.id} asin={currentSlide.asin} currentSlide={this.props.currentSlide} />
          </AsinContent>
        </div>
      );
    } else {
      return (
        <div className="adx-slides">
          <ReactCSSTransitionGroup transitionName="adx-slides__slide" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            <ImageSlide key={currentSlide.id} id={currentSlide.id} key={currentSlide.id} imageUrl={currentSlide.image_url} currentSlide={this.props.currentSlide} slideshowStyles={this.props.slideshowStyles} />
          </ReactCSSTransitionGroup>
        </div>
      );
    }
  }
}

export class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentSlide: 0};
  }

  setCurrentSlide(slide) {
    this.setState({currentSlide: slide});
  }

  render() {
    var slideshowStyles = {
      backgroundColor: this.props.backgroundColor,
      height: this.props.height
    }

    var buyBox = this.props.includeBuyBox ? <AutoBuyBox /> : null;

    return (
      <div className={"adx-slideshow " + this.props.containerClass} style={slideshowStyles}>
        <div className="a-row a-span12">
          <div className="a-column a-span1"></div>
          <div className="a-column a-span10 adx-slideshow__content">
            <SlidesPagination data={adxCustom.slides} currentSlide={this.state.currentSlide} setCurrentSlide={this.setCurrentSlide.bind(this)} />
            {buyBox}
          </div>
          <div className="a-column a-span1"></div>
        </div>
        <div className="a-row a-span12">
          <div className="a-column a-span1"></div>
          <div className="a-column a-span10">
            <Slides data={adxCustom.slides} loaded={this.state.loaded} currentSlide={this.state.currentSlide} slideshowStyles={slideshowStyles} />
          </div>
          <div className="a-column a-span1"></div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
