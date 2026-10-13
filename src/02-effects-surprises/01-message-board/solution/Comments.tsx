import { type User, type Comment } from "./MessageBoard";
import "../App.css";

type CommentsProps = {
  users: User[];
  comments: Comment[];
};

export default function Comments({ users, comments }: CommentsProps) {
  return (
    <div className="comments-list-section">
      <h2>Comments ({comments.length})</h2>
      {comments.length === 0 ? (
        <p className="no-comments">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="comments-list">
          {comments.map((c, index) => (
            <li key={index} className="comment-item">
              <div className="comment-header">
                <span className="comment-avatar">{users.find((u) => u.id === c.userId)?.avatar}</span>
                <span className="comment-author">{c.userName}</span>
              </div>
              <p className="comment-text">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
