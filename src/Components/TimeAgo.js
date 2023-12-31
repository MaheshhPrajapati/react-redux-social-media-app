import { parseISO, formatDistanceToNow } from 'date-fns';

export default function TimeAgo({ timestamp }) {
    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        const timeperiod = formatDistanceToNow(date);
        timeAgo = `${timeperiod} ago`;

    }
    return <span title={timestamp}>
        <i>{timeAgo}</i>
    </span>

}