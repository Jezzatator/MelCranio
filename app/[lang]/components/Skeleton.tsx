export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse opacity-20 bg-current ${className}`} />;
}
