import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/UI/Modal";
import { productList } from "./data";

function App() {
  const renderProductsList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="container">
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Open dialog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-3">
          {renderProductsList}
        </div>

        <Modal isOpen={isOpen} closeModal={closeModal}>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              Got it, thanks!
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
