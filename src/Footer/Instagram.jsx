function Facebook() {
  return (
    <a
      href="#"
      className="group h-10 w-10 rounded-full bg-darkBlue p-2 hover:bg-gray-700"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" group-hover:fill-cyan-400"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
      </svg>
    </a>
  );
}

export default Facebook;
