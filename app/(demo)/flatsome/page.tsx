'use client'

const Page = () => {
  return (
    <>
      <div className="w-screen h-screen bg-zinc-900">
        <div className="relative flex max-w-screen-xl mx-auto">
          <div className="relative flex-1">
            <div className="fixed max-w-screen-sm p-10 w-full h-screen">
              <div className="text-5xl text-white font-semibold">LOGO</div>
            </div>
          </div>

          <div className="max-w-screen-sm w-full bg-white p-3 h-full">
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
