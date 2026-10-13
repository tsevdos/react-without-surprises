import { useEffect, type SubmitEvent } from "react";
import { type User } from "./MessageBoard";
import "../App.css";

type CommentFormProps = {
  selectedUser: User;
  comment: string;
  onCommentChange: (comment: string) => void;
  onSubmit: () => void;
};

export default function CommentForm({ selectedUser, comment, onCommentChange, onSubmit }: CommentFormProps) {
  useEffect(() => {
    onCommentChange("");
  }, [selectedUser.id, onCommentChange]);

  return (
    <div className="comment-form-section">
      <h2>
        Leave a Comment as {selectedUser.avatar} {selectedUser.name}
      </h2>
      <form
        className="comment-form"
        onSubmit={(e: SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <textarea
          className="comment-textarea"
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
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
