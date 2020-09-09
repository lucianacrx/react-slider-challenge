import React, { Component, Fragment } from 'react';
import './Thumbs.css';

class Thumbs extends Component {
    constructor(props){
        super(props);
        this.onImageSelect = this.onImageSelect.bind(this);
    }

    onImageSelect(index) {
        this.props.selectedCatalog(index);
    }

  render() {
    return (
        <Fragment>
            {
                this.props.items.map((catalog,idx) => (
                    <span className="catalog item thumb-select" onClick={() => this.onImageSelect(idx)} id={idx} key={idx} data-testid={'thumb_outer_'+idx}>
                        <span className={(idx === this.props.currentIndex ? 'thumb-selected' : 'thumb-outer')} data-testid={'thumb_'+idx}>
                            <span className="thumb" id={idx} style={{ backgroundImage: 'url('+ catalog.thumb + ')'}} data-testid={'thumb_img_'+idx} />
                        </span>
                    </span>
                ))}

        </Fragment>
    );
  }
}

export default Thumbs;
