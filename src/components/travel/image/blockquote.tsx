import { TravelImageCardSeparator } from '../../separator/travelImageCardSeparator';

export const TravelImageCardBlockquote = (): JSX.Element => {
  return (
    <blockquote className="relative mb-4 p-8">
      <TravelImageCardSeparator />
      <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
      <p className="text-md mt-2 font-light text-white">
        The Arctic Ocean freezes every winter and much of the sea-ice then thaws
        every summer, and that process will continue whatever happens.
      </p>
    </blockquote>
  );
};
