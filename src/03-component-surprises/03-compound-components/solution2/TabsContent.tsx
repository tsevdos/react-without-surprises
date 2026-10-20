import type { ReactNode } from "react";

type TabsContentProps = {
  content: ReactNode;
  isVisible: boolean;
};

const TabsContent = ({ content, isVisible }: TabsContentProps) => (
  <article className={`tab-content ${isVisible ? "is-visible" : ""}`}>{content}</article>
);

export default TabsContent;
