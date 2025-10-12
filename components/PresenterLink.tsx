'use client'

type PresenterLinkProps = {
  presenterSlugs?: string[]
  presenterName: string
  className?: string
  insideLink?: boolean
}

export function PresenterLink({ presenterSlugs, presenterName, className = "", insideLink = false }: PresenterLinkProps) {
  // If we have presenter slugs and it's a single presenter, make it clickable
  if (presenterSlugs && presenterSlugs.length === 1) {
    // If we're inside another link (like on schedule page), use a button to avoid nested anchors
    if (insideLink) {
      return (
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            window.location.href = `/presenters/${presenterSlugs[0]}`
          }}
          className={`hover:text-blue-600 hover:underline transition-colors cursor-pointer ${className}`}
        >
          {presenterName}
        </button>
      )
    }
    
    // If we're not inside another link, use a regular anchor
    return (
      <a 
        href={`/presenters/${presenterSlugs[0]}`}
        className={`hover:text-blue-600 hover:underline transition-colors ${className}`}
      >
        {presenterName}
      </a>
    )
  }
  
  // For multiple presenters or no slugs, just display the text
  return <span className={className}>{presenterName}</span>
}