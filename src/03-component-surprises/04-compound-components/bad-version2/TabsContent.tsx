import type { ReactNode } from "react";

type TabsContentProps = {
  isVisible: boolean;
  children: ReactNode;
};

const TabsContent = ({ children, isVisible }: TabsContentProps) => (
  <article className={`tab-content ${isVisible ? "is-visible" : ""}`}>{children}</article>
);

export default TabsContent;
