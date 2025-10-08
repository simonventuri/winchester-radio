// About page component
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About Winchester Radio</h1>
      <p className="mt-4 text-black/80">We are a Charitable Incorporated Organisation serving Winchester & nearby villages, also providing a hospital radio service for the Royal Hampshire County Hospital.</p>
      <h2 id="impact" className="mt-8 text-2xl font-semibold">Impact</h2>
      <ul className="mt-2 list-disc pl-5 text-black/80">
        <li>Volunteer hours</li>
        <li>Hospital bedside hours</li>
        <li>Local groups featured</li>
      </ul>
      <h2 id="governance" className="mt-8 text-2xl font-semibold">Governance & Policies</h2>
      <p className="mt-2 text-black/80">Charity number 1160752. Add annual reports, safeguarding, editorial policy, and complaints procedure here.</p>
      <h2 id="contact" className="mt-8 text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-black/80">Add email, phone, studio address, press contact, and brand assets.</p>
    </main>
  )
}
