export default function GlassContainer({ children, padding = true }) {
  return (
    <div className={`glass ${padding ? "padded" : ""}`}>
      {children}
    </div>
  );
}
