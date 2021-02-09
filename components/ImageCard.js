import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    //default spans 0
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // need to load image before you can get height
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    //figure out how many spans you need
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
