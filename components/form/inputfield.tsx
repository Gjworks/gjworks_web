'use client'

interface Props {
  property: {
    type: string
    value: any
  }
  style: {
    className: string
  }
}
const Inputfield: React.FC<Props> = props => {
  return (
    <>
      <input
        type={props.property.type}
        className={props.style.className ? props.style.className : ''}
        defaultValue={props.property.value}
      ></input>
    </>
  )
}

export default Inputfield
