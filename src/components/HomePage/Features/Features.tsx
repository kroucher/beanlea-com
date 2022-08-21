/* This example requires Tailwind CSS v2.0+ */
import FireIcon from "@heroicons/react/outline/esm/FireIcon";
import GlobeAltIcon from "@heroicons/react/outline/esm/GlobeAltIcon";
import PencilIcon from "@heroicons/react/outline/esm/PencilIcon";
import DeviceMobileIcon from "@heroicons/react/outline/esm/DeviceMobileIcon";

const features = [
  {
    name: "Blazingly Fast",
    description:
      "We utilise the latest technologies to deliver blazingly fast websites",
    icon: FireIcon,
  },
  {
    name: "Responsive",
    link: "92.1%",
    href: "https://datareportal.com/global-digital-overview",
    description:
      "of internet users access the Web through mobile devices, we make sure your website is responsive and accessible on all devices",
    icon: DeviceMobileIcon,
  },
  {
    name: "SEO Friendly",
    description:
      "Our websites are built to be SEO friendly, so that your website can be found easily by search engines like Google",
    icon: GlobeAltIcon,
  },
  {
    name: "Designed from the ground up",
    description:
      "Designs for new website or an existing one - we're happy to work with you to create a custom solution",
    icon: PencilIcon,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-neutral-100 dark:bg-slate-900 overflow-hidden mt-12 mb-24 sm:mb-36 lg:mb-48">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200 dark:text-gray-200/5"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8 pt-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-neutral-100 sm:text-4xl sm:tracking-tight text-center sm:text-left">
              Websites built for purpose
            </h2>
          </div>
          <dl className="mt-10 space-y-10 flex flex-col items-center justify-center text-center sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-slate-900 dark:text-neutral-100">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.link ? (
                    <span>
                      <a
                        className="text-blue-400 underline decoration-dotted underline-offset-4"
                        href={feature.href}
                      >
                        {feature.link}
                      </a>{" "}
                      {feature.description}
                    </span>
                  ) : (
                    feature.description
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
