import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface IModal {
  title?: string;
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

const Modal = ({ title, isOpen, closeModal, children }: IModal) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-1/2 max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Add A NEW PRODUCT
                    </DialogTitle>
                  )}

                  {children}

                  {/* <div className="mt-4">
                    <Input
                      label="Product Title"
                      id="prod-title"
                      type="text"
                      name="prod-title"
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      label="Product Description"
                      id="prod-description"
                      type="text"
                      name="prod-description"
                    />
                  </div>{" "}
                  <div className="mt-4">
                    <Input
                      label="Product Image URL"
                      id="prod-img-url"
                      type="text"
                      name="prod-img-url"
                    />
                  </div>{" "}
                  <div className="mt-4">
                    <Input
                      label="Product Price"
                      id="prod-price"
                      type="text"
                      name="prod-price"
                    />
                  </div> */}
                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;