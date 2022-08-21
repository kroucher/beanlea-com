import ExclamationCircleIcon from "@heroicons/react/solid/esm/ExclamationCircleIcon";
import type { FieldErrorsImpl } from "react-hook-form";

const ContactInput = ({
  label,
  name,
  register,
  errors,
  clearErrors,
}: {
  label: string;
  name: string;
  register: any;
  errors: any;
  clearErrors: any;
}) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          id={name}
          {...register(name, { required: true })}
          type={name === "email" ? "email" : "text"}
          autoComplete={
            name === "email" ? "email" : name === "phone" ? "tel" : "text"
          }
          className="block w-full shadow-sm py-3 px-4 placeholder-slate-400 focus:ring-blue-400 focus:border-blue-400 border-slate-900 dark:border-neutral-100 rounded-md"
          placeholder={label}
          onChange={() => clearErrors(name)}
        />

        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className={
              errors[name]?.message ? `h-5 w-5 text-red-500` : "hidden"
            }
            aria-hidden="true"
          />
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id={name}>
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default ContactInput;
