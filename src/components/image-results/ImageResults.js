import React, { Component } from "react";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ZoomIn from "@material-ui/icons/ZoomIn";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt={img.tags} />

              <GridListTileBar
                title={img.tags}
                subtitle={
                  <span>
                    by <strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() => this.handleOpen(img.largeImageURL)}
                    style={{ color: "rgba(255, 255, 255, 0.54)" }}
                  >
                    <ZoomIn />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}
        <Dialog modal={false} open={this.state.open} onClose={this.handleClose}>
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
        </Dialog>
      </div>
    );
  }
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
