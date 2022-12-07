import { TravelImageCardActualImage } from './actualImage';
import { TravelImageCardBlockquote } from './blockquote';

export const TravelImageCard = ({
  imageUrl,
  imageTitle,
  imageAlt,
  imageAbout,
  imageContainerColor
}: {
  imageUrl: string;
  imageTitle?: string;
  imageAlt?: string;
  imageAbout?: string;
  imageContainerColor: string;
}): JSX.Element => {
  const imageObj = {
    url: imageUrl,
    alt: imageAlt ? imageAlt : imageTitle?.toLowerCase()
  };
  const blockquoteObj = {
    title: imageTitle,
    color: imageContainerColor,
    about: imageAbout
  };

  const imageTextBlockClassName = `relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg ${imageContainerColor} shadow-lg`;
  return (
    <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
      <div className={imageTextBlockClassName}>
        <TravelImageCardActualImage {...imageObj} />
        <TravelImageCardBlockquote {...blockquoteObj} />
      </div>
    </div>
  );
};
