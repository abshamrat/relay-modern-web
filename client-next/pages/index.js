import React from 'react';
import style from './index.css';
import Post from '../components/post';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.contentFluid}>
        <Post/>
        <Post/>
      </div>
    );
  }
}

export default Home;