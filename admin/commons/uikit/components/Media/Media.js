import React from 'react';
import cn from "classnames";
import s from "./Media.scss";

class Media extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, imgSrc, imgSpacing, imgCircle, imgLarge, imgSmall, topAligned, centerAligned, bottomAligned, children} = this.props;

    const mediaClasses = cn(
      s.media,
      className
    )
    const imgClasses = cn(
      s["media-img"],
      imgCircle && s["media-img-circle"],
      imgLarge && s["media-img-large"],
      imgSmall && s["media-img-small"],
      topAligned && s["media-img-top"],
      centerAligned && s["media-img-center"],
      bottomAligned && s["media-img-bottom"],
    )

    return (
      <div className={mediaClasses}>
        <div className={imgClasses} style={{marginRight: imgSpacing || 15}}>
          <img src={imgSrc} />
        </div>
        <div className={s["media-body"]}>
          {children}
        </div>
      </div>
    );
  }
}

export default Media;
