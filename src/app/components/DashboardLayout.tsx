"use client"
import SearchAppBar from "./SearchAppBar"
import { ReduxProvider } from '@/redux/provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <ReduxProvider>
        <SearchAppBar/>
      </ReduxProvider>
      <nav></nav>
      {children}
    </section>
  )
}
