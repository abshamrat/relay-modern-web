import React from 'react';
import style from './index.css';
import Post from '../components/post';
import Header from '../components/header';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.contentFluid}>
        <Header
          title="Simple Blog Post"
        />
        <div className={style.row}>
          <div className={style.col8}>
            <Post
              title="This is simple post"
              content="Dolore eiusmod pariatur sint sit amet voluptate. Duis do adipisicing culpa anim pariatur cupidatat voluptate dolor tempor. Ipsum enim non amet non aliquip et non voluptate consequat enim. Do esse irure laborum Lorem reprehenderit."
            />
            <Post
              title="This is simple post"
              content="Dolore eiusmod pariatur sint sit amet voluptate. Duis do adipisicing culpa anim pariatur cupidatat voluptate dolor tempor. Ipsum enim non amet non aliquip et non voluptate consequat enim. Do esse irure laborum Lorem reprehenderit."
            />
            <Post
              title="This is simple post"
              content="Dolore eiusmod pariatur sint sit amet voluptate. Duis do adipisicing culpa anim pariatur cupidatat voluptate dolor tempor. Ipsum enim non amet non aliquip et non voluptate consequat enim. Do esse irure laborum Lorem reprehenderit."
            />
          </div>
          <div className={style.col4}>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;