import Link from "next/link"

const Nav = () => {
  return (
    <>
      <div className="px-8">
        <div className="py-2 px-5 mb-2 cursor-pointer rounded-md text-secondary-500 bg-primary-700 bg-opacity-25">마이페이지</div>
        <div className="text-dark-400 py-2 px-5 mb-2 cursor-pointer rounded-md hover:text-secondary-500">계정</div>
        <div className="text-dark-400 py-2 px-5 mb-2 cursor-pointer rounded-md hover:text-secondary-500">프로필</div>
        <div className="text-dark-400 py-2 px-5 mb-2 cursor-pointer rounded-md hover:text-secondary-500">소셜 설정</div>
      </div>
    </>
  )
}

export default Nav

