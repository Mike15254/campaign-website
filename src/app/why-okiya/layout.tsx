export default function WhyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4 lg:p-6 md:mx-8 lg:mx-8">
      <div className="p-5 lg:p-8">{children}</div>
    </section>
  );
}
