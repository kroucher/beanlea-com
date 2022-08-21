import MailIcon from "@heroicons/react/outline/esm/MailIcon";
import PhoneIcon from "@heroicons/react/outline/esm/PhoneIcon";
import HomeIcon from "@heroicons/react/solid/esm/HomeIcon";
import { useForm, UseFormReturn } from "react-hook-form";
import { emailSchema } from "../../pages/api/submit";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactInput from "./ContactInput";
import { useState } from "react";
import ContactParticles from "./ContactParticles";

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

type Inputs = {
  name: string;
  email: string;
  phone: string;
  contactMessage: string;
  needs: "" | "new-website" | "rebuild" | "other";
  rebuildUrl?: string;
};

export default function ContactPage() {
  const [needs, setNeeds] = useState<string | undefined>();
  const [emailSent, setEmailSent] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<Inputs>({
    mode: "onChange",
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async () => {
    const values = getValues();
    const result = await trigger(undefined, {
      shouldFocus: true,
    });
    console.log(JSON.stringify(values, null, 2));
    try {
      const emailResult = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(values, null, 2),
      });

      if (emailResult.ok) {
        setEmailSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {emailSent ? (
        <div className="text-center flex flex-col items-center justify-center h-[100vh] relative">
          <div className="absolute top-20 mx-auto w-full px-4">
            <h1 className="text-3xl font-bold pb-12">
              Thank you for your enquiry.
            </h1>
            <p className="text-lg">
              We will get back to you as soon as possible.
            </p>
            {/* back to home button */}
            <a href="/">
              <HomeIcon
                className="h-8 w-8 text-blue-500 mx-auto mt-10"
                aria-hidden="true"
              />
            </a>
            <span>
              <a
                href="/"
                className="text-blue-400 underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                Return Home
              </a>
            </span>
          </div>
          <ContactParticles />
        </div>
      ) : (
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
                      <span className="ml-3">
                        <a href="tel:0423821870">0423 821 870</a>
                      </span>
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
                <form className="grid grid-cols-1 gap-y-6">
                  <ContactInput
                    label="Name"
                    name="name"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                  <ContactInput
                    label="Email"
                    name="email"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                  <ContactInput
                    label="Phone"
                    name="phone"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                  />
                  <fieldset>
                    <legend className="sr-only">Plan</legend>
                    <div className="space-y-5">
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          className="relative flex items-start"
                        >
                          <div className="flex items-center h-5">
                            <input
                              id={plan.id}
                              aria-describedby={`${plan.id}-description`}
                              {...register("needs", { required: true })}
                              type="radio"
                              value={plan.id}
                              defaultChecked={plan.id === "new-website"}
                              onChange={() => {
                                setNeeds(plan.id);
                              }}
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
                          {needs === "rebuild" && plan.id === "rebuild" && (
                            <input
                              id="rebuild-url"
                              {...register("rebuildUrl")}
                              type="text"
                              className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border-slate-900 dark:border-neutral-100 rounded-md"
                              placeholder="Your current website's URL"
                            />
                          )}
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
                      {...register("contactMessage", { required: true })}
                      rows={4}
                      className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border border-slate-900 dark:border-neutral-100 rounded-md"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={onSubmit}
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
      )}
    </>
  );
}
