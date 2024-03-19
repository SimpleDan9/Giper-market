import clsx from "clsx"


const Button = ({variant,children}) => {
  return (
    <button className={clsx("p-[10px]",{
      "bg-yellow-400": variant === "primary"
    })}>
      {children}
    </button>
  )
}

export default Button
