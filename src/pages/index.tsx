import type { NextPage } from 'next';
import { v4 as uuid } from 'uuid';
import { Banner } from '../components/banner/banner';
import { FloatSection } from '../components/float/floatSection';

const Home: NextPage = function () {
  const bannerData: {
    randomId?: string;
    title: string;
    subHeading: string;
    bannerURL: string;
    showSeparator?: boolean;
  } = {
    randomId: uuid(),
    title: 'Your story starts with us.',
    subHeading:
      'Fill your life with adventures, not things. Have stories to tell not stuff to show.',
    bannerURL: '/banner.jpg',
    showSeparator: true
  };

  let initialCount = 0;

  const floatingCardData: {
    count?: number;
    randomId?: string;
    title?: string;
    content?: string;
    icon?: string;
    iconBg?: string;
    standout?: boolean;
  }[] = [
    {
      count: initialCount++,
      randomId: uuid(),
      title: 'Awarded Agency',
      content:
        'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
      icon: 'fa-award',
      iconBg: 'bg-red-400',
      standout: false
    },
    {
      count: initialCount++,
      randomId: uuid(),
      title: 'Free Revisions',
      content:
        'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.',
      icon: 'fa-earth-americas',
      iconBg: 'bg-blue-400',
      standout: true
    },
    {
      count: initialCount++,
      randomId: uuid(),
      title: 'Verified Company',
      content:
        'Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
      icon: 'fa-compass',
      iconBg: 'bg-green-400',
      standout: false
    }
  ];

  return (
    <>
      <main>
        <Banner {...bannerData} />
        <section className="-mt-24 bg-gray-300 pb-20">
          <div className="container mx-auto px-4">
            <FloatSection
              show={true}
              floatingCardData={floatingCardData}
            />
            <div className="mt-32 flex flex-wrap items-center">
              <div className="mr-auto ml-auto w-full px-4 md:w-5/12">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 p-3 text-center text-gray-600 shadow-lg">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="mt-8 font-bold text-gray-800"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
                <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white bg-pink-600 shadow-lg">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full rounded-t-lg align-middle"
                  />
                  <blockquote className="relative mb-4 p-8">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 block w-full"
                      style={{
                        height: '95px',
                        top: '-94px'
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-current text-pink-600"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md mt-2 font-light text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
