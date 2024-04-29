import Author from "./Author"
import ReactionButton from "./ReactionButton"
import TimeAgo from "./TimeAgo";
import {Col} from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


export default function PostExcerpt({ post }) {
    const [showFullDesc,setShowFullDesc] = useState(false);
    function toggleDesc(){
        setShowFullDesc(!showFullDesc);
    }
    return <Col className="post-item" md={4} sm={6}>
                <p className="author-name post-body">
                    <Author userId={post.userId} />
                </p>
                <span className="post-title">{post.title}</span>
                <p className="post-body">{showFullDesc ? post.body : post.body.split(' ').slice(0,20).join(' ')}
                {!showFullDesc && (<span onClick={toggleDesc} className="read-more-button"> read more</span>)}</p>
                
                <div className="reaction-buttons">
                <TimeAgo timestamp={post.date} />
                <ReactionButton post={post} />
                </div>
            </Col>
}
