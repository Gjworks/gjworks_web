'use client'

const Coming = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/20 to-gray-950/50"></div>
      <div className="bg-[url('/assets/images/yellow/yellow_bg1.jpg')] bg-no-repeat bg-center bg-cover">
        {/* <div className="absolute inset-0 bg-gray-950/10"></div> */}
        <div className="relative max-w-screen-xl mx-auto px-3 h-[calc(100vh-305px)]">
          <div className="flex justify-center items-center w-full h-full"></div>
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
