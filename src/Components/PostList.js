import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts, getPostStatus, getPostError } from "../app/postSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";
import {Container,Row,Col} from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const error = useSelector(getPostError);
    const postStatus = useSelector(getPostStatus);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch]);

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postStatus === 'succeed') {
        const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPost.map(post => <PostExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (<div>
        
        <Container className="postDiv">
            <span className="h2-title">Recent</span>
            <Row>
            {content}
            </Row>
            
        </Container>
    </div>
    )
}
