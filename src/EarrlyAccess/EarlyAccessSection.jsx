function EarlyAccessSection() {
  return (
    <section
      id="early-access"
      className="relative bg-white px-6 dark:bg-darkBlue2 md:px-0"
    >
      <div className="relative -top-40 mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
        <h5 className="text-2xl font-bold">Get early access today</h5>
        <p className="text-sm">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        {/* input and button */}
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <input
            type="email"
            className=" w-full rounded-full px-10 py-3 text-black focus:outline-none md:flex-1"
            placeholder="email@example.com"
          />
          <button className=" w-full rounded-full bg-accentCyan px-6 py-3 duration-150 hover:scale-95 md:w-56">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default EarlyAccessSection;
