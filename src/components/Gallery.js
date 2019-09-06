import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import GalleryImage from "./GalleryImage"
import GalleryThumbs from "./GalleryThumbs"
import Likes from "./Likes"
import ReactLoading from "react-loading"
import ReactPaginate from "react-paginate"

import * as ImageGalleryActions from "../actions"

export class Gallery extends Component {

   state = {
       pageCount: 0,
       perCount: 50,
       offset: 0
   }

  componentDidMount() {
    this.props.loadImages()
  }

  static getDerivedStateFromProps(props, state) {
      const { perCount } = state;
      if (props.images.length > 0) {
          return {
              pageCount: props.images.length / perCount
          }
      }
      return {}
  }

  handlePageClick = data => {
    const { pageCount } = this.state;
    let selected = data.selected;
    let offset = Math.ceil(selected * pageCount);

    this.setState({ offset: offset });
  };

  render() {
    const { images, selectImage, starImage, selectedImage, imageLoading } = this.props
    const { offset } = this.state
    if (imageLoading)
      return (
        <div className="loading">
          <ReactLoading type="spin" color="red" height={300} width={300} />
        </div>
      )
    return (
        <React.Fragment>
            <div className="likes">
                <Likes count={images.filter(image => image.favorite === true).length} />
            </div>
            <div className="image-gallery" hidden={!selectedImage}>
            <div>
                <GalleryThumbs selectImage={selectImage} images={images.slice(offset, offset + 50)} starImage={starImage} />
                <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                />
            </div>
            <GalleryImage image={selectedImage.url} />
            </div>
        </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    images: state.images,
    selectedImage: state.selectedImage,
    imageLoading: state.imageLoading
  }),
  dispatch => bindActionCreators(ImageGalleryActions, dispatch)
)(Gallery)
