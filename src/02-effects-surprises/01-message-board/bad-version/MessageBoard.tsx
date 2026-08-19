import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import "../App.css";

type User = {
  id: number;
  name: string;
  avatar: string;
};

type Comment = {
  userId: number;
  userName: string;
  text: string;
};

const users: User[] = [
  { id: 1, name: "Jon Snow", avatar: "🐺" },
  { id: 2, name: "Daenerys", avatar: "🐉" },
  { id: 3, name: "Tyrion Lannister", avatar: "🦁" },
  { id: 4, name: "Arya Stark", avatar: "🗡️" },
  { id: 5, name: "Cersei Lannister", avatar: "👑" },
  { id: 6, name: "Ned Stark", avatar: "⚔️" },
];

export default function MessageBoard() {
  const [selectedUserId, setSelectedUserId] = useState<number>(users[0].id);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const selectedUser = users.find((u) => u.id === selectedUserId)!;

  useEffect(() => {
    if (submitted) {
      if (comment.trim()) {
        const newComment: Comment = {
          userId: selectedUserId,
          userName: selectedUser.name,
          text: comment,
        };
        setComments([...comments, newComment]);
        setComment("");
      }
      setSubmitted(false);
    }
  }, [submitted, comment, selectedUserId, selectedUser.name, comments]);

  useEffect(() => {
    setComment("");
  }, [selectedUserId]);

  useEffect(() => {
    console.log("Comment added:", comments[comments.length - 1]);
  }, [comments]);

  return (
    <>
      <Header
        sectionName="Effects Surprises"
        title="User Comments — bad version"
        tooltip="This component uses effects to submit forms, reset state and log events (to a 3rd party). These are all useEffect anti-patterns that should be avoided."
      />
      <div className="comment-container">
        <div className="comment-layout">
          <div className="users-section">
            <h2>Select User</h2>
            <ul className="user-list">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`user-item ${selectedUserId === user.id ? "selected" : ""}`}
                  onClick={() => setSelectedUserId(user.id)}
                >
                  <span className="user-avatar">{user.avatar}</span>
                  <span className="user-name">{user.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="comment-form-section">
            <h2>
              Leave a Comment as {selectedUser.avatar} {selectedUser.name}
            </h2>
            <form
              className="comment-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <textarea
                className="comment-textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                rows={4}
              />
              <button type="submit" className="comment-button">
                Submit Comment
              </button>
            </form>
          </div>

          <div className="comments-list-section">
            <h2>Comments ({comments.length})</h2>
            {comments.length === 0 ? (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
              <ul className="comments-list">
                {comments.map((c, index) => (
                  <li key={index} className="comment-item">
                    <div className="comment-header">
                      <span className="comment-avatar">
                        {users.find((u) => u.id === c.userId)?.avatar}
                      </span>
                      <span className="comment-author">{c.userName}</span>
                    </div>
                    <p className="comment-text">{c.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
