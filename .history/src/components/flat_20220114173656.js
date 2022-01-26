import React from "react";
import ".flat.css";

class Flat extends React.Component {
  render() {
    const title = this.props.flat.price + this.props.flat.priceCurrency
    return (
      <div className="flat">
        <div className="flat-picture"></div>
        <div className="flat-title"></div>
      </div>

    );
  }
}

export default Flat;
