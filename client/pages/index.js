import React from 'react';
import { graphql, QueryRenderer} from 'react-relay';
import Post from '../components/post';
import Header from '../components/header';
import style from './index.css';
import environment  from '../utils/relayEnvironment';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {  
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
        # need to named according to the module. here I have page module. and operation Query
          query pagesQuery{
            getPosts {
              title,
              content
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!{console.log(error)}</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div className={style.contentFluid}>
            <Header
              title="Simple Blog Post"
            />
            <div className={style.row}>
              <div className={style.col8}>
                {
                  props.getPosts.map((post) => (
                    <Post
                      title={post.title}
                      content={post.content}
                    />
                  ))
                }
               
              </div>
              <div className={style.col4}>
                
              </div>
            </div>
          </div>
          );
        }}
      />
   
    );
  }
}

export default Home;