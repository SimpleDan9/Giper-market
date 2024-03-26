import { Dialog } from "@headlessui/react"


const Modal = ({isOpen,close,children}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex bg-[#0000004d] w-screen items-center justify-center p-4">
                <Dialog.Panel className="w-[700px] rounded bg-white">

                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default Modal
