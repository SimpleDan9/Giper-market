import clsx from "clsx"


const Button = ({variant,children,icon:Icon,type,onClick}) => {
  return (
    <button
    type={type}
    onClick={onClick}
     className={clsx("py-[10px] px-[30px] flex items-center justify-start gap-[10px] font-jost text-[20px] font-normal leading -[29px]",{
      "bg-yellow-300 p-[20px]": variant === "primary"
    })}>
      {Icon?Icon:""}
      {children}
    </button>
  )
}

export default Button
