import { useSelector } from "react-redux";
import { selectAllUsers } from "../app/userSlice";

export default function Author({ userId }) {
    const users = useSelector(selectAllUsers);

    const author = users.find((user) => user.id === userId);

    return <span>by {author ? author.name : "unknown Author"}</span>
}
