import Image from "next/image"
import Link from "next/link"

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/icon.png"
        alt="Sagent logo"
        width={36}
        height={36}
        className="rounded-[22%] shadow-[0px_1px_2px_rgba(55,50,47,0.12)]"
      />
      <span className="text-center text-[#49423D] text-xl font-semibold leading-4 font-sans">Sagent</span>
    </Link>
  )
}
