import { useState } from "react";
import CommentForm from "./CommentForm";
import Header from "../../../components/Header/Header";
import "../App.css";

export type User = {
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
  const [comments, setComments] = useState<Comment[]>([]);
  const selectedUser = users.find((u) => u.id === selectedUserId)!;

  const handleAddComment = (commentText: string) => {
    const newComment: Comment = {
      userId: selectedUserId,
      userName: selectedUser.name,
      text: commentText,
    };
    setComments([...comments, newComment]);
    console.log("Comment added:", newComment);
  };

  return (
    <>
      <Header
        sectionName="Effects Surprises"
        title="User Comments — solution"
        tooltip="This component is more accessible, and correctly handles the state without unnecessary effects and re-renders."
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

          <CommentForm
            key={selectedUserId}
            selectedUser={selectedUser}
            onSubmit={handleAddComment}
          />

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
