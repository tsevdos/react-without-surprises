import { useState } from "react";
import CommentForm from "./CommentForm";
import Users from "./Users";
import Comments from "./Comments";
import Header from "../../../components/Header/Header";
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
        title="Message board — solution"
        tooltip="This component is more accessible, and correctly handles the state without unnecessary effects and re-renders."
      />
      <div className="comment-container">
        <div className="comment-layout">
          <Users users={users} selectedUserId={selectedUserId} onSelect={setSelectedUserId} />
          <CommentForm key={selectedUserId} selectedUser={selectedUser} onSubmit={handleAddComment} />
          <Comments users={users} comments={comments} />
        </div>
      </div>
    </>
  );
}
