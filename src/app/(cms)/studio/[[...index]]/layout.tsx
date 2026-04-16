export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="sanity-root">
      {children}
    </div>
  )
}
