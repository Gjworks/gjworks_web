import { useSession } from "next-auth/react"


const Profile = (props) => {
  console.log(props)
  const session = useSession();

  console.log(session.data?.user)
  return(
    <>
      <div className="max-w-screen-2xl mx-auto px-3 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <div className="px-8">
              <div className="py-2 px-5 mb-2 cursor-pointer rounded-md text-secondary-500 bg-primary-700 bg-opacity-25">마이페이지</div>
              <div className="text-dark-400 py-2 px-5 mb-2 cursor-pointer rounded-md hover:text-secondary-500">계정</div>
              <div className="text-dark-400 py-2 px-5 mb-2 cursor-pointer rounded-md hover:text-secondary-500">프로필</div>
              <div className="text-dark-400 py-2 px-5 mb-2 cursor-pointer rounded-md hover:text-secondary-500">소셜 설정</div>
            </div>
          </div>
          <div className="col-span-9">
            <h1 className="text-3xl font-bold text-white">Hello, {session.data?.user.nickname}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;