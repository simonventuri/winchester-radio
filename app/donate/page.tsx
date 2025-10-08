export default function DonatePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Donate</h1>
      <p className="mt-4 text-black/80">Choose an amount or pick a platform below. Gift Aid eligible.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {[5,10,20].map(amt => <button key={amt} className="rounded-full border px-5 py-2 text-sm hover:bg-slate-50">£{amt}</button>)}
        <button className="rounded-full border px-5 py-2 text-sm hover:bg-slate-50">Other</button>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <a className="rounded-full bg-black px-5 py-3 text-white hover:bg-black/90" href="#donate-card">Donate by card</a>
        <a className="rounded-full border px-5 py-3" href="#justgiving">JustGiving</a>
        <a className="rounded-full border px-5 py-3" href="#caf">CAF</a>
        <a className="rounded-full border px-5 py-3" href="#paypal">PayPal</a>
      </div>
    </main>
  )
}
