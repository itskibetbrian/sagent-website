"use client"

export default function FoundersNoteSection() {
  return (
    <section className="section-block border-t border-b border-[rgba(55,50,47,0.12)] py-16 flex justify-center items-center bg-[#FBFAF9]">
      <div className="section-block-inner max-w-xl px-6 flex flex-col gap-6 text-left">
        <div className="text-[#847971] text-xs font-medium uppercase tracking-wider font-sans">
          A Note from the Founder
        </div>
        <div className="text-[#37322F] text-base md:text-lg font-serif leading-relaxed space-y-4">
          <p>
            I built Sagent because I kept watching good salespeople lose deals for the most avoidable reason.
          </p>
          <p>
            Not a bad pitch. Not a bad product. They just could not find the right message fast enough.
          </p>
          <p>
            Notes apps were not built for this. Keyboard shortcuts were not built for this.
          </p>
          <p>
            So we built something that was.
          </p>
          <p>
            If you send the same messages every day, Sagent was made for you.
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 mt-4 border-t border-[rgba(55,50,47,0.08)] pt-4">
          <div className="text-[#37322F] text-sm font-semibold font-sans">Victor</div>
          <div className="text-[#605A57] text-xs font-normal font-sans">Founder of Sagent</div>
        </div>
      </div>
    </section>
  )
}
