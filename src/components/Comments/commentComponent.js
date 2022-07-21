import {Link} from "react-router-dom";


function CommentComponent({item} ) {
    return (
        <div>
            <h3>
                {item.id} {item.name}
            </h3>
            <p>{item.body}</p>
            <span> <Link to={item.postId.toString()}>Post for comments</Link> </span>
        </div>
    );
}

export default CommentComponent;