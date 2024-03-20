import { Dialog } from "@headlessui/react"


const Modal = ({isOpen,close,children}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white">
                    
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default Modal
