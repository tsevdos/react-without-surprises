import type { ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
};

const Tabs = ({ children }: TabsProps) => (
  <div className="compound-demo">
    <section className="tabs">{children}</section>
  </div>
);

export default Tabs;
