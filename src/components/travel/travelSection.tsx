import { TravelContent } from './content/travelContent';
import { TravelImageCard } from './image/travelImageCard';

export const TravelSection = (): JSX.Element => {
  return (
    <div className="mt-32 flex flex-wrap items-center">
      <TravelContent />
      <TravelImageCard />
    </div>
  );
};
