'use client'

const Coming = () => {
  return (
    <div className="relative w-full border-t border-b border-gray-100">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transpanrent to-white/90"></div> */}
      <div className="bg-[url('/assets/images/tile_pattern.png')]">
        {/* <div className="absolute inset-0 bg-gray-950/10"></div> */}
        <div className="relative max-w-screen-xl mx-auto px-3 h-[calc(100vh-305px)]">
          <div className="flex justify-center items-center w-full h-full">
            <div className="text-2xl text-gray-900">Coming Soon</div>
          </div>
        </div>
      </div>
      {/* <Image
        src="/assets/images/bg11.jpg"
        alt="Main Visual Image"
        width="1265"
        height="468"
        loading="lazy"
        className="rounded-2xl"
      /> */}
    </div>
  )
}
export default Coming
