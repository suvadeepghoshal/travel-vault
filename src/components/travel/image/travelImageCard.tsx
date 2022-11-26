import { TravelImageCardActualImage } from './actualImage';
import { TravelImageCardBlockquote } from './blockquote';

export const TravelImageCard = (): JSX.Element => {
  return (
    <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
      <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-green-600 shadow-lg">
        <TravelImageCardActualImage />
        <TravelImageCardBlockquote />
      </div>
    </div>
  );
};
