export default function AboutPage() {
  return (
    <main className="py-10">
      <div className="container grid gap-8 md:grid-cols-2 items-start">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">About TalentKonnect</h1>
          <p className="text-slate-700">
            We help professionals monetize skills with a simple $7 profile.
          </p>
          <p className="text-slate-700">
            Get discovered by clients globally and book paid sessions.
          </p>
        </section>
        <section className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,.06)] border border-black/5 p-6">
          <ul className="space-y-3 text-slate-700">
            <li>✅ 10,000+ professionals</li>
            <li>🌍 Global client reach</li>
            <li>🔒 Secure payments</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
