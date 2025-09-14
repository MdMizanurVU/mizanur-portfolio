import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard - Mizanur Rahman Portfolio",
  description: "Portfolio content management dashboard",
  robots: "noindex, nofollow", // Prevent search engines from indexing admin pages
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  )
}