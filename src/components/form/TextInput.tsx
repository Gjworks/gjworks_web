'use client'

interface Props {
  inputType: string
  inputName: string
  inputTitle: string
  getData: (message: string) => void
  value: any
  placeholder: string
}

const TextInput: React.FC<Props> = props => {
  const handleChange = (event: any) => {
    props?.getData(event.target?.value)
  }

  return (
    <>
      <div className="w-full">
        <div className="flex dark:focus:border-dark-500 rounded-lg border border-slate-200 focus:border-slate-600 dark:border-dark-600">
          <div className="flex items-center text-slate-400 dark:text-dark-400 peer-focus:text-slate-900 dark:peer-focus:text-white px-3 w-auto min-w-[70px] max-w-32">
            {props?.inputTitle}
          </div>
          <div className="relative flex-1">
            <input
              type={props?.inputType}
              name={props?.inputName}
              id={props?.inputName}
              className="text-sm bg-transparent text-dark-500 dark:text-dark-300 focus:text-slate-700 dark:focus:text-white py-4 focus:outline-none w-full placeholder-dark-400 dark:placeholder-dark-500 px-3 appearance-none focus:ring-0 peer"
              placeholder=" "
              defaultValue={props?.value}
              onChange={handleChange}
            />
            <label
              htmlFor={props.inputName}
              className="absolute text-sm top-0 bg-white dark:bg-dark-900 px-3 -left-8 scale-75 -translate-y-3 duration-300 transform text-slate-400 dark:text-dark-300 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:left-0 peer-placeholder-shown:text-slate-400 dark:peer-placeholder-shown:text-dark-500 origin-[0] peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text"
            >
              {props?.placeholder}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default TextInput
