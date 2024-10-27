export const ErrorsValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "title must be more than 10 ,less than 80 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description =
      "description must be more than 10 ,less than 80 characters";
  }

  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  if (!product.imageURL.trim() || !urlPattern.test(product.imageURL)) {
    errors.imageURL = "the image url is not valid";
  }

  if (
    !product.price.trim() ||
    !isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    errors.price = "product price must bee validate";
  }

  return errors;
};
