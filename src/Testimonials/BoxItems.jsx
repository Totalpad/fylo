function BoxItems({ img, name, position }) {
  return (
    <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10  dark:bg-darkBlue3 md:w-1/3">
      {/* text */}
      <p className="text-sm leading-5 md:text-lg">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>

      {/* avatar and positon  */}
      <div className="flex space-x-4">
        <img src={img} alt="avatar" className="h-10 w-10 rounded-full" />
        {/* positon */}
        <div className="flex flex-col">
          <h5 className="text-sm font-semibold">{name}</h5>
          <p className="text-xs font-extralight">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default BoxItems;
