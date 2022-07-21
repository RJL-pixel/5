import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import {getPostCurrentComment} from "../../services";
import PostComponent from "./PostComponent";


function PostsCurrentComment() {

    const {postId} = useParams()

    const [posts, setposts] = useState([]);


    useEffect(() => {
            getPostCurrentComment(postId).then(value => setposts([{...value}]))
        },
        [postId])

    return (
        <div>
            {
            posts.map(value => <PostComponent item={value} key={value.id}/>)
            }
        </div>
    );
}

export default PostsCurrentComment;