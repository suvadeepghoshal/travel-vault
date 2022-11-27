import { TravelContent } from './content/travelContent';
import { TravelImageCard } from './image/travelImageCard';

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
  left: Left;
  right: Right;
};

export const TravelSection = ({
  travel
}: {
  travel: Travel[];
}): JSX.Element => {
  return (
    <>
      {travel.map((data) => {
        return (
          <div
            key={data?.randomId}
            className="mt-32 flex flex-wrap items-center"
          >
            <TravelContent {...data?.left} />
            <TravelImageCard {...data?.right} />
          </div>
        );
      })}
    </>
  );
};
