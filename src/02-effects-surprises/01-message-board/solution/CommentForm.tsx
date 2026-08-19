import { useState, type SubmitEvent } from "react";
import { type User } from "./MessageBoard";
import "../App.css";

type CommentFormProps = {
  selectedUser: User;
  onSubmit: (comment: string) => void;
};

export default function CommentForm({ selectedUser, onSubmit }: CommentFormProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <div className="comment-form-section">
      <h2>
        Leave a Comment as {selectedUser.avatar} {selectedUser.name}
      </h2>
      <form className="comment-form" onSubmit={handleSubmit}>
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
  );
}
