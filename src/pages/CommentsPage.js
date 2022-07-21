import CommentsComponent from "../components/Comments/commentsComponent";
import {Outlet} from "react-router-dom";


function CommentsPage() {
    return (

        <div>
            <Outlet/>
 <CommentsComponent/>

        </div>
    );
}

export default CommentsPage;