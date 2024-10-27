import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./Components/ProductCard";
import Modal from "./Components/UI/Modal";
import { formInputsList, productList } from "./data";
import InputForm from "./Components/UI/Input";
import { IProduct } from "./Interfaces/interfaces";
import { ErrorsValidation } from "./Components/validation/validation";
import ErrorMsg from "./Components/ErrorMsg";

function App() {
  const renderProductsList = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  //? ------------- Handler -------------------
  const initialValue = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [prodData, setProdData] = useState<IProduct>(initialValue);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProdData({ ...prodData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    console.log(name, value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = ErrorsValidation(prodData);

    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasError) {
      setErrors(errors);
      return;
    }

    setProdData(initialValue);

    // closeModal();
  };

  const renderInputForm = formInputsList.map((input) => {
    return (
      <div key={input.id} className="mt-4">
        <label className="text-sm mb-1 block font-medium " htmlFor={input.id}>
          {input.label}
        </label>
        <InputForm
          id={input.id}
          type={input.type}
          name={input.name}
          onChange={changeHandler}
          value={prodData[input.name]}
        />

        <ErrorMsg msg={errors[input.name]} />
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="flex justify-center items-center w-full rounded-md border border-transparent bg-blue-300 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={openModal}
        >
          Add Product
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-3">
          {renderProductsList}
        </div>

        <Modal isOpen={isOpen} closeModal={closeModal}>
          <form onSubmit={submitHandler}>
            {renderInputForm}

            <div className="mt-4 flex space-x-3">
              <button
                className="
                inline-flex justify-center rounded-md border border-transparent
              bg-blue-100 px-4 py-2 text-sm font-medium
              text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2
              focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full"
              >
                Submit
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 
                px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default App;
