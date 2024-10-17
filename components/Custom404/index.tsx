import { Button } from 'antd'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const router = useRouter()
  return (
    <section className="bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              We can’t find that page
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Button type="primary" onClick={() => router.push('/')}>
                Take me home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Custom404
