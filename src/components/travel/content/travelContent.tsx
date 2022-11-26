import { TravelContentHeading } from './heading';
import { TravelContentLink } from './link';
import { TravelContentParagraph } from './paragraph';

export const TravelContent = (): JSX.Element => {
  return (
    <div className="mr-auto ml-auto w-full px-4 md:w-5/12">
      <TravelContentHeading />
      <TravelContentParagraph />
      <TravelContentLink />
    </div>
  );
};
