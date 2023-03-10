export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Contact layout</div>
      <div>{children}</div>
    </div>
  );
}
