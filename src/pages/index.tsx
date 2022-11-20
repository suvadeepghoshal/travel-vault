import type { NextPage } from 'next';

const Home: NextPage = function () {
  return (
    <>
      <main>
        <div
          className="relative flex content-center items-center justify-center pt-16 pb-32"
          style={{
            minHeight: '75vh'
          }}
        >
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner.jpg')"
            }}
          >
            <span
              id="blackOverlay"
              className="absolute h-full w-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
                <div className="pr-12">
                  <h1 className="marhey text-5xl text-white">
                    Your story starts with us.
                  </h1>
                  <p className="marhey mt-4 text-lg text-gray-300">
                    Fill your life with adventures, not things. Have stories to
                    tell not stuff to show.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
