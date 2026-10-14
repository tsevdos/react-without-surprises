import { Suspense, type ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type AsyncBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export default function AsyncBoundary({
  children,
  fallback = <div className="fallback">Fetching data...</div>,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={<div className="error-state">Something went wrong please try again...</div>}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
