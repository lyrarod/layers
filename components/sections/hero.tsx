import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className={`flex min-h-screen items-center bg-hero-pattern bg-cover bg-fixed bg-top bg-no-repeat dark:bg-dark-hero-pattern md:pt-0`}
    >
      <div className="container relative overflow-hidden pt-20 md:pt-0">
        <div className=" mx-auto mt-12 px-4">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-2/5">
              <div className=" lg:max-w-xl">
                <h1 className="mb-6 text-3xl font-bold dark:text-gray-300 lg:text-6xl">
                  <span>Keep learning and</span>
                  <span className="text-orange-600 dark:text-orange-400">
                    Develop
                  </span>
                  <span>Skills</span>
                </h1>
                <p className="mb-6 leading-8 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.sit amet, consectetur adipiscing elit, sed do Ut enim
                  ad minim veniam
                </p>
                <a
                  className="mb-2 inline-block w-full rounded bg-orange-600 px-6 py-4 text-center text-lg font-medium leading-6 text-white shadow transition duration-200 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-700 md:mb-0 md:mr-4 md:w-auto"
                  href="#"
                >
                  Request a demo
                </a>
              </div>
            </div>
            <div className="mt-20 w-full px-4 lg:mt-0 lg:w-2/5">
              <div className="flex justify-center lg:justify-end">
                <div className="mr-4 lg:mr-8">
                  <img
                    className="mx-auto mb-8 block h-32 w-full rounded-md object-cover sm:h-64"
                    src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg"
                    alt=""
                  />
                  <img
                    className="mx-auto mb-8 block h-32 w-full rounded-md object-cover sm:h-64"
                    src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="mx-auto mb-8 block h-32 w-full rounded-md object-cover sm:h-64"
                    src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg"
                    alt=""
                  />
                  <img
                    className="mx-auto mb-8 block h-32 w-full rounded-md object-cover sm:h-64"
                    src="https://i.postimg.cc/T33p51wy/pexels-photo-3182781.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
