import { FloatingCard } from './floatingCard';

export const FloatSection = ({
  show,
  floatingCardData
}: {
  show: boolean;
  floatingCardData: {
    count?: number;
    randomId?: string;
    title?: string;
    content?: string;
    icon?: string;
    iconBg?: string;
    standout?: boolean;
  }[];
}): JSX.Element => {
  return show ? (
    <div className="flex flex-wrap">
      {floatingCardData.map((eachCardData) => {
        return (
          <FloatingCard
            {...eachCardData}
            key={eachCardData?.randomId}
          />
        );
      })}
    </div>
  ) : (
    <></>
  );
};
