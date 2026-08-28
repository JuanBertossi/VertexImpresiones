interface GalleryCardProps {
  image: string
  alt: string
  tag: string
  label: string
  note: string
}

export function GalleryCard({ image, alt, tag, label, note }: GalleryCardProps) {
  return (
    <div className="g-card">
      <div className="shot">
        <img src={image} alt={alt} />
      </div>
      <div className="g-body">
        <div className="g-tag">{tag}</div>
        <div className="g-label">{label}</div>
        <p className="g-note">{note}</p>
      </div>
    </div>
  )
}
