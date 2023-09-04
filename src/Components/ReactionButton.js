import { reactionAdded } from "../app/postSlice";
import { useDispatch } from "react-redux";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😀',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

export default function ReactionButton({ post }) {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>{emoji}{post.reactions[name]}
        </button>
    })


    return <div>{reactionButtons}</div>
}
