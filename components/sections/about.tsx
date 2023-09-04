export function About() {
  return (
    <section
      id="about"
      className="grid min-h-screen w-full place-items-center bg-background py-28 text-foreground md:p-8 md:py-36"
    >
      <div className="container flex w-full max-w-6xl flex-col lg:flex-row">
        <div className="flex flex-col gap-y-3 md:gap-y-4 lg:pr-8">
          <h1 className="text-3xl font-semibold md:text-4xl">
            <strong className="border-l-4 border-primary pl-2 md:border-l-8">
              About Us
            </strong>
          </h1>
          <h2 className="pt-3 text-sm xs:text-base md:font-medium">
            WHO WE ARE?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error
            minima voluptates quo distinctio temporibus minus modi tempora quod
            dolor voluptatum, odio praesentium autem enim sapiente illo, ullam
            ea qui molestias non dolorum illum? Neque, eos voluptas! Facere,
            recusandae vitae!
          </p>
          <div className="grid gap-4 pb-6 xs:grid-cols-2 md:gap-5 md:pb-8 lg:gap-6 lg:pb-0">
            <div className="flex h-32 w-full flex-col justify-center gap-y-2 rounded bg-secondary p-4 shadow-md md:h-36 lg:h-48">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 448 512"
                  className="h-4 fill-primary/75 xs:h-6 md:h-8"
                >
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                </svg>
              </span>
              <p className="text-xl font-semibold md:text-2xl">2023</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flex h-32 w-full flex-col justify-center gap-y-2 rounded bg-secondary p-4 shadow-md md:h-36 lg:h-48">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                  className="h-4 fill-primary/75 xs:h-6 md:h-8"
                >
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                </svg>
              </span>
              <p className="text-xl font-semibold md:text-2xl">2023</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flex h-32 w-full flex-col justify-center gap-y-2 rounded bg-secondary p-4 shadow-md md:h-36 lg:h-48">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                  className="h-4 fill-primary/75 xs:h-6 md:h-8"
                >
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </span>
              <p className="text-xl font-semibold md:text-2xl">2023</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="flex h-32 w-full flex-col justify-center gap-y-2 rounded bg-secondary p-4 shadow-md md:h-36 lg:h-48">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 640 512"
                  className="h-4 fill-primary/75 xs:h-6 md:h-8"
                >
                  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
              </span>
              <p className="text-xl font-semibold md:text-2xl">2023</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
          alt="image"
          className="h-auto w-full rounded object-cover shadow-md lg:max-w-md"
        />
      </div>
    </section>
  );
}
