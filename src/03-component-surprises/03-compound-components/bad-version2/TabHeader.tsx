import type { ReactNode } from "react";

type TabHeaderProps = {
  children: ReactNode;
};

const TabHeader = ({ children }: TabHeaderProps) => <nav className="tab-nav">{children}</nav>;

export default TabHeader;
