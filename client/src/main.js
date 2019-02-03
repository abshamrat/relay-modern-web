import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
import "antd/dist/antd.css";
import 'ant-design-pro/dist/ant-design-pro.css';
import BaseLayout from './layouts/BaseLayout.jsx' 

class ContainerLayout extends React.Component {

  render() {
    return(
      <BaseLayout/>
    );
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));
