export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4 lg:p-6 md:mx-5 lg:mx-5">
      <div className="md:mx-5 lg:mx-10">{children}</div>
    </section>
  );
}
