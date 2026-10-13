import { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Users from "./Users";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import "../App.css";

export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Comment = {
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
    console.log("Comment added:", comments.at(-1));
  }, [comments]);

  return (
    <>
      <Header
        sectionName="Effects Surprises"
        title="Message board — bad version"
        tooltip="This component uses effects to submit forms, reset state and log events (to a 3rd party). These are all useEffect anti-patterns that should be avoided."
      />
      <div className="comment-container">
        <div className="comment-layout">
          <Users users={users} selectedUserId={selectedUserId} onSelect={setSelectedUserId} />
          <CommentForm
            selectedUser={selectedUser}
            comment={comment}
            onCommentChange={setComment}
            onSubmit={() => setSubmitted(true)}
          />
          <Comments users={users} comments={comments} />
        </div>
      </div>
    </>
  );
}
