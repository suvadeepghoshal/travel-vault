import type { NextPage } from 'next';
import { v4 as uuid } from 'uuid';
import { Banner } from '../components/banner/banner';
import { FloatSection } from '../components/float/floatSection';
import { TravelSection } from '../components/travel/travelSection';

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
            <TravelSection />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
