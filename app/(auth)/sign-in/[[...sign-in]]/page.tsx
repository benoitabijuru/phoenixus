// app/(auth)/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Continue your wellness journey</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              card: "bg-gray-800 shadow-xl",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
            }
          }}
          routing="path"
          path="/sign-in"
          redirectUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  )
}