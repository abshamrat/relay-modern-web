import style from './post.css';

function post(props) {
    return (
        <div className={style.postBox}>
            <div className={style.postHead}>
                <h1>{props.title}</h1>
            </div> 
            <div className={style.postBody}>
                {props.content}
            </div> 
        </div>
    );
}

export default post;