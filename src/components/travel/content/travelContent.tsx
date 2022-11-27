import { TravelContentHeading } from './heading';
import { TravelContentLink } from './link';
import { TravelContentParagraph } from './paragraph';

export const TravelContent = ({
  title,
  paragraphs,
  href
}: {
  title: string;
  paragraphs?: {
    pid: string;
    pContent: string;
  }[];
  href: {
    title: string;
    link: string;
  };
}): JSX.Element => {
  return (
    <div className="mr-auto ml-auto w-full px-4 md:w-5/12">
      <TravelContentHeading title={title} />
      {paragraphs?.map((para, index) => {
        return (
          <TravelContentParagraph
            key={para.pid}
            content={para?.pContent}
            index={index}
          />
        );
      })}
      <TravelContentLink {...href} />
    </div>
  );
};
