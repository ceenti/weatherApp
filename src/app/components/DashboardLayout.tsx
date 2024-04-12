"use client"
import SearchAppBar from "./SearchAppBar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SearchAppBar/>
      <nav></nav>
      {children}
    </section>
  )
}
