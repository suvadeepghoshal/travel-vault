import fontawesome from '@fortawesome/fontawesome';
import {
  faAward,
  faCompass,
  faEarthAmericas
} from '@fortawesome/free-solid-svg-icons';

export const FloatingCard = (
  {
    count,
    title,
    content,
    icon,
    iconBg,
    standout
  }: {
    count?: number;
    title?: string;
    content?: string;
    icon?: string;
    iconBg?: string;
    standout?: boolean;
  },
  { key }: { key: string }
): JSX.Element => {
  fontawesome.library.add(faAward, faEarthAmericas, faCompass);
  const floatingClass = `w-full px-4 ${
    !standout ? 'pt-6' : ''
  } text-center md:w-4/12 ${count === 0 && 'lg:pt-12'}`;
  const iconBgClassName = `mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full ${iconBg} p-3 text-center text-white shadow-lg`;
  const iconClass = `fas ${icon}`;
  return (
    <div
      key={key}
      className={floatingClass}
    >
      <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
        <div className="flex-auto px-4 py-5">
          <div className={iconBgClassName}>
            <i className={iconClass}></i>
          </div>
          <h6 className="text-xl font-semibold">{title}</h6>
          <p className="mt-2 mb-4 text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};
