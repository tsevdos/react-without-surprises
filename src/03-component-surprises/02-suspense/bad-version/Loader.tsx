import type { FC, ReactNode } from "react";
import type { QueryStatus } from "@tanstack/react-query";

type LoaderProps = {
  status: QueryStatus; // TanStack Query status
  children: ReactNode;
  loaderEl?: ReactNode;
  errorEl?: ReactNode;
};

const Loader: FC<LoaderProps> = ({
  status,
  children,
  loaderEl = <div className="fallback">Fetching data...</div>,
  errorEl = <div className="error-state">Something went wrong please try again...</div>,
}) => {
  if (status === "pending" && loaderEl) return loaderEl;
  if (status === "error") return errorEl;

  return children;
};

export default Loader;
