import ImageUi from "./UI/ImageUi";
import ButtonUI from "./UI/ButtonUi";
import { IProduct } from "../Interfaces/interfaces";

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const { title, imageURL, description, price, category } = product;
  return (
    <>
      <div className="p-2 border border-solid border-gray-400 rounded-lg ">
        <div className="image mb-3">
          <ImageUi
            className="w-full rounded-lg"
            src={imageURL}
            alt="my-image"
          />
        </div>
        <h2 className="font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2	text-ellipsis ">
          {description}
        </p>
        <div className="Product-colors flex gap-2 my-4">
          <span className="bg-red-600 rounded-full h-5 w-5 cursor-pointer " />
          <span className="bg-blue-600 rounded-full h-5 w-5 cursor-pointer" />
          <span className="bg-orange-600 rounded-full h-5 w-5 cursor-pointer" />
          <span className="bg-slate-600 rounded-full h-5 w-5 cursor-pointer" />
          <span className="bg-black rounded-full h-5 w-5 cursor-pointer" />
        </div>
        <div className="product-data flex justify-between items-center	 ">
          <span> ${price}</span>
          <div className="categ-thumbnail flex items-center">
            <p className="mr-3">{category.name}</p>

            <ImageUi
              className="w-10 h-10 rounded-full"
              src={category.imageURL}
              alt="my image"
            />
          </div>
        </div>
        <div className="product-btns flex justify-between gap-1 my-2">
          <ButtonUI
            className="bg-violet-600 w-full text-xl rounded-md text-white text-center p-2"
            text="Edit"
            onClick={() => {
              console.log("Hello world");
            }}
          />
          <ButtonUI
            className="bg-red-600 w-full text-xl rounded-md text-white text-center p-2"
            text="Remove"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
