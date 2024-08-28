import Link from 'next/link'

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 pt-10 pb-20">
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-2">
            <Link
              href="/components"
              className="block text-sm mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Documentation
            </Link>
            <Link
              href="/components/modal"
              className="block text-sm mb-2 hover:bg-gray-100 py-2 px-4 rounded-lg"
            >
              Modal
            </Link>
          </div>

          <div className="col-span-6">{children}</div>
        </div>
      </div>
    </>
  )
}

export default PageLayout
