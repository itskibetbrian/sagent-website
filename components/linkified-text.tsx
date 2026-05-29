import type { ReactNode } from "react"
import Link from "next/link"

const TOKEN_RE =
  /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s),]+)|(gosagent\.com\/[^\s),]*)/gi

const linkClass =
  "text-brand underline-offset-2 hover:underline font-medium transition-colors"

export function linkifyText(text: string, keyPrefix = "link"): ReactNode[] {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  TOKEN_RE.lastIndex = 0
  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    const token = match[0]
    const id = `${keyPrefix}-${key++}`

    if (token.includes("@")) {
      parts.push(
        <a key={id} href={`mailto:${token}`} className={linkClass}>
          {token}
        </a>,
      )
    } else if (token.toLowerCase().startsWith("gosagent.com/")) {
      const path = token.slice("gosagent.com".length) || "/"
      parts.push(
        <Link key={id} href={path} className={linkClass}>
          {token}
        </Link>,
      )
    } else {
      parts.push(
        <a key={id} href={token} className={linkClass} target="_blank" rel="noopener noreferrer">
          {token}
        </a>,
      )
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : [text]
}

export function LinkifiedText({
  text,
  className = "",
  as: Component = "span",
}: {
  text: string
  className?: string
  as?: "p" | "span" | "div"
}) {
  return <Component className={className}>{linkifyText(text)}</Component>
}
