import React, { Component } from 'react';
import style from 'bootstrap/dist/css/bootstrap.css';
import createPostMutation from '../mutations/createPostMutation';

class Add extends Component {
    state = {
        title:'', 
        content: ''
    }
    constructor(props) {
        super(props);
        console.log();
        this.createPost = this.createPost.bind(this);
    }

    createPost(e) {
        e.preventDefault();
        const {title, content} = this.state;
        createPostMutation(title, content, () => {console.log('Content Save')});
    }

    render() {
        return (
            <div className={style["container"]}>
                <div className={style["row"]}>
                    <div className={`${style["col-md-8"]} ${style["offset-md-2"]}`}>
                        <form action="#" style={{marginTop: 100, border: '1px solid #eee', padding: 20}}>
                            <h3>Add New Post</h3>
                            <hr/>
                            <div className={style["form-group"]}>
                                <label>Post Title</label>
                                <input 
                                    className={style["form-control"]}
                                    value={this.state.title}
                                    onChange={(e) => this.setState({ title: e.target.value })}
                                    type='text'
                                ></input>
                            </div>
                            <div className={style["form-group"]}>
                                <label>Post Conttent</label>
                                <textarea 
                                    rows="10" 
                                    className={style["form-control"]}
                                    value={this.state.content}
                                    onChange={(e) => this.setState({ content: e.target.value })}
                                ></textarea>
                            </div>
                            <div className={style["form-group"]}>
                               <button onClick={this.createPost} className={`${style["btn"]} ${style["btn-success"]} ${style["btn-block"]}`}>SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;