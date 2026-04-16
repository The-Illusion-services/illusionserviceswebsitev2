export default function CmsRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Illusion Studio</title>
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
