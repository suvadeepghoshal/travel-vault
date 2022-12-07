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

  type Paragraph = {
    pid: string;
    pContent: string;
  };

  type Left = {
    title: string;
    paragraphs?: Paragraph[];
    href: {
      title: string;
      link: string;
    };
  };

  type Right = {
    imageUrl: string;
    imageTitle?: string;
    imageAlt?: string;
    imageAbout?: string;
    imageContainerColor: string;
  };

  type Travel = {
    randomId: string;
    order: string;
    left: Left;
    right: Right;
  };

  type TravelData = {
    travel: Travel[];
  };

  const travelData: TravelData = {
    travel: [
      {
        randomId: uuid(),
        order: 'imageLeft',
        left: {
          title: 'Working with us is a pleasure',
          paragraphs: [
            {
              pid: uuid(),
              pContent:
                'Don&apos;t let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.'
            },
            {
              pid: uuid(),
              pContent:
                'The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you&apos;re good to go. Just make sure you enable them first via JavaScript.'
            }
          ],
          href: {
            title: 'Check Tailwind Starter Kit!',
            link: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
          }
        },
        right: {
          imageUrl:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          imageTitle: 'Top Notch Services',
          imageAlt: 'Top Notch Services',
          imageAbout:
            'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.',
          imageContainerColor: 'bg-red-600'
        }
      },
      {
        randomId: uuid(),
        order: 'imageRight',
        left: {
          title: 'Working with us is a pleasure',
          paragraphs: [
            {
              pid: uuid(),
              pContent:
                'Don&apos;t let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.'
            },
            {
              pid: uuid(),
              pContent:
                'The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you&apos;re good to go. Just make sure you enable them first via JavaScript.'
            }
          ],
          href: {
            title: 'Check Tailwind Starter Kit!',
            link: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
          }
        },
        right: {
          imageUrl:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          imageTitle: 'Top Notch Services',
          imageAlt: 'Top Notch Services',
          imageAbout:
            'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.',
          imageContainerColor: 'bg-blue-600'
        }
      }
    ]
  };

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
            <TravelSection {...travelData} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
