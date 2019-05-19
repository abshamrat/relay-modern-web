import style from './post.css';

function post() {
    return (
        <div className={style.postBox}>
            <div className={style.postHead}>
                <h3>This is my new post</h3>
            </div> 
            <div className={style.postBody}>
                lorem ipsum dolor sit aro kto ki komu 
            </div> 
        </div>
    );
}

export default post;