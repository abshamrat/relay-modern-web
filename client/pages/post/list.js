import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../../store';

class List extends Component {
    constructor(props) {
        super(props);
    }

    getPost(params) {
        return params;
    }

    render() {
        return(
            <button>GET LIST</button>
        )
    }
}

export default withRedux(store)(List);