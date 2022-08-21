import MailIcon from "@heroicons/react/outline/esm/MailIcon";
import PhoneIcon from "@heroicons/react/outline/esm/PhoneIcon";

const plans = [
  {
    id: "new-website",
    name: "New Website",
    description: "Create a new website",
  },
  {
    id: "rebuild",
    name: "Rebuild Or Redesign",
    description: "Rebuild or redesign an existing website",
  },
  {
    id: "other",
    name: "Other Enquiry",
    description: "I have another enquiry",
  },
];

export default function ContactPage() {
  return (
    <div className="relative bg-neutral-100 dark:bg-slate-900 ">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-neutral-50 dark:bg-slate-800" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-neutral-50 dark:bg-slate-800 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold tracking-tight dark:text-neutral-100 text-slate-900 sm:text-3xl sm:tracking-tight">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 dark:text-neutral-100 text-slate-900">
              We'd love to have a chat over coffee (or tea!) to discuss your
              website's needs.
            </p>
            <dl className="mt-8 text-base dark:text-neutral-100 text-slate-900">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-slate-900 dark:text-neutral-100"
                    aria-hidden="true"
                  />
                  <span className="ml-3">0423 821 870</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-slate-900 dark:text-neutral-100"
                    aria-hidden="true"
                  />
                  <span className="ml-3">contact@beanlea.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-neutral-100 dark:bg-slate-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 text-slate-900">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border-slate-900 dark:border-neutral-100 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border-slate-900 dark:border-neutral-100 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border-slate-900 dark:border-neutral-100 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <fieldset>
                <legend className="sr-only">Plan</legend>
                <div className="space-y-5">
                  {plans.map((plan) => (
                    <div key={plan.id} className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={plan.id}
                          aria-describedby={`${plan.id}-description`}
                          name="plan"
                          type="radio"
                          defaultChecked={plan.id === "small"}
                          className="focus:ring-blue-300 h-4 w-4 text-blue-300 border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor={plan.id}
                          className="font-medium text-slate-900 dark:text-neutral-100"
                        >
                          {plan.name}
                        </label>
                        <p
                          id={`${plan.id}-description`}
                          className="text-gray-500"
                        >
                          {plan.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border border-slate-900 dark:border-neutral-100 rounded-md"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-slate-900 bg-blue-400 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
