/* This example requires Tailwind CSS v2.0+ */
export default function Testimonials() {
  return (
    <section className="py-12 dark:bg-slate-600 bg-blue-100 overflow-hidden md:py-20 lg:py-24 drop-shadow-[0_1px_15px_rgba(1,183,214,0.8)] rounded-3xl mx-3 mb-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            className="mx-auto h-36"
            src="/assets/thecheekco.png"
            alt="The Cheek Co."
          />
          <blockquote className="mt-5">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-slate-900 dark:text-neutral-100">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-slate-900 dark:text-neutral-100">
                    Maddi McKay
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-slate-400">
                    CEO, The Cheek Co.
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
