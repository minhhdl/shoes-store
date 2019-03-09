import React from 'react';
import Link from 'next/link';

const Back = ({ path, query = {} }) => (
  <div className="flex-justify-content-left m-b-15">
    <Link href={{ pathname: path, query }} prefetch>
      <a className="flex-justify-content-left" style={{ fontSize: 18, color: '#fff' }}> {/*eslint-disable-line*/}
        <i className="material-icons" style={{ fontSize: 22, marginRight: 10 }}>
          chevron_left
        </i>
        BACK
      </a>
    </Link>
  </div>
);

export default Back;
