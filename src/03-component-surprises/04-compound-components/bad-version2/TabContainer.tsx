import type { ReactNode } from "react";

type TabContainerProps = {
  children: ReactNode;
};

const TabContainer = ({ children }: TabContainerProps) => <section className="tabs-content">{children}</section>;

export default TabContainer;
