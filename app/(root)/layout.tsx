// app/dashboard/layout.tsx
import { UserButton } from '@clerk/nextjs'


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Wellness Dashboard</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  )
}