'use Client'

const Avator = props => {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex items-center">
          <div className="relative dark:bg-dark-400 block h-6 w-6 rounded-full bg-gray-800">
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        {props.username && (
          <div className="hidden lg:flex items-center flex-1 gap-2">
            <div>
              <div className="text-left dark:text-dark-100 text-xs font-medium text-gray-800">
                {props.username}
              </div>
              <div className="text-left dark:text-dark-100 text-xs font-medium text-gray-800">
                {props.email}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Avator
