import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FETCH_POST} from '../../store/actions/actionTypes';

class List extends Component {
    constructor(props) {
        super(props);
        this.getPost = this.getPost.bind(this);
    }

    getPost(params) {
        this.props.dispatch({type: FETCH_POST, payload:{id: 1}});
        return params;
    }

    render() {
        const post = this.props.post.post || {};
        console.log(post);
        return(
            <div>
                <button onClick={this.getPost}>GET LIST</button>
               
            </div>
        )
    }
}

export default connect(state => state)(List);