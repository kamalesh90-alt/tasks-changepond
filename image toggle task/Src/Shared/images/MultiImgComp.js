import React, { Component } from 'react';
import staticData from '../Shared/Constant/staticData';

const multiImages = [
  { src: staticData.ajith, name: 'Ajith Kumar' },
  { src: staticData.Vijay, name: 'Vijay' },
  { src: staticData.dhoni, name: 'Dhoni' },
  { src: staticData.vk, name: 'Virat Kohli' },
  { src: staticData.messi, name: 'Messi' }
];

export class MultiImgComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: multiImages[0].src,
      imgName: multiImages[0].name
    };
  }

  clicked = (pic) => {
    const index = pic.target.value;
    this.setState({
      imgSrc: multiImages[index].src,
      imgName: multiImages[index].name
    });
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.imgSrc} alt="img" height="400px" width="400px" />
          <br />
          <span>{this.state.imgName}</span>
          <br />
          <button type="button" value="0" onClick={this.clicked}>Ajith Kumar</button>
          <button type="button" value="1" onClick={this.clicked}>Vijay</button>
          <button type="button" value="2" onClick={this.clicked}>Dhoni</button>
          <button type="button" value="3" onClick={this.clicked}>Virat Kohli</button>
          <button type="button" value="4" onClick={this.clicked}>Messi</button>
        </div>
      </div>
    );
  }
}

export default MultiImgComp;
