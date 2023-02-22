
const Warning = (props) => {
  return(
    <>
      <div className="py-5">
        <div className=" text-rose-500 bg-rose-700 bg-opacity-25 py-3 px-3 rounded-sm text-sm">
          {props?.message}
        </div>
      </div>
    </>
  )
}
export default Warning