import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Start Your Journey</h1>
          <p className="text-gray-400 mt-2">Join our wellness community</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              card: "bg-gray-800 shadow-xl",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-400",
            }
          }}
          routing="path"
          path="/sign-up"
          redirectUrl="/onboarding"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  )
}