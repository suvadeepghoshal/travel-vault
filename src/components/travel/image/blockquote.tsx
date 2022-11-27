import { TravelImageCardSeparator } from '../../separator/travelImageCardSeparator';

export const TravelImageCardBlockquote = ({
  title,
  color,
  about
}: {
  title?: string;
  color: string;
  about?: string;
}): JSX.Element => {
  return (
    <blockquote className="relative mb-4 p-8">
      <TravelImageCardSeparator color={color} />
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-md mt-2 font-light text-white">{about}</p>
    </blockquote>
  );
};
