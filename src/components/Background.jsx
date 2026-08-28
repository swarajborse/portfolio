export default function Background() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none bg-grid"
      />
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none bg-glow"
      />
    </>
  );
}