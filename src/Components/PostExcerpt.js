import Author from "./Author"
import ReactionButton from "./ReactionButton"
import TimeAgo from "./TimeAgo";

export default function PostExcerpt({ post }) {
    return <article>
        <h3>{post.title}</h3>
        <h3>{post.id}</h3>
        <p>{post.body}</p>
        <p><Author userId={post.userId} /></p>
        <TimeAgo timestamp={post.date} />
        <ReactionButton post={post} />
    </article>
}
