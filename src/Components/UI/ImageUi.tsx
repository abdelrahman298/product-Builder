interface IimageProps {
  className: string;
  src: string;
  alt: string;
}

function ImageUi({ className, src, alt }: IimageProps) {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  );
}

export default ImageUi;
