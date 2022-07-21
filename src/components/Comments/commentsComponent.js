
import {getcomments,} from "../../services";
import CommentComponent from "./commentComponent";
import {useState, useEffect} from "react";



function CommentsComponent() {



    const [comments, setcomments]  = useState([]);

    useEffect(() => {
            getcomments().then(value => setcomments([...value]))
        },
        [])
    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }
        </div>
    );
}

export default CommentsComponent;