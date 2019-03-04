import React, { PureComponent } from 'react';
import cn from 'classnames';
import style from './Rating.scss';

class Rating extends PureComponent {
  render() {
    const { rate, className } = this.props;
    const stars = [];
    let score = rate;
    for (let i = 1; i <= 5; i += 1) {
      if (score >= 1) {
        stars.push(<i key={`star${i}`} className="material-icons">star</i>);
      } else if ((score > 0) && (score < 0.5)) {
        stars.push(<i key={`star${i}`} className="material-icons">star_half</i>);
      } else if ((score >= 0.5) && (score < 1)) {
        stars.push(<i key={`star${i}`} className="material-icons">star</i>);
      } else {
        stars.push(<i key={`star${i}`} className="material-icons">star_border</i>);
      }
      score -= 1;
    }

    return (
      <div className={cn(className, style.stars)}>{stars}</div>
    );
  }
}

export default Rating;
