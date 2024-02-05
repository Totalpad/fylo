function Item({ image, header, paragraph }) {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-1/2">
      <div className="mb-6 flex h-24 items-center justify-center">{image}</div>
      <h3 className="text-xl font-bold">{header}</h3>
      <p className="max-w-md">{paragraph}</p>
    </div>
  );
}

export default Item;
