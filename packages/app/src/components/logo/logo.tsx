const Logo = ({ title, src }: { title: string; src: string }): JSX.Element => (
  <>
    <div className="flex flex-shrink-0 items-center">
      <img className="h-8 w-auto" src={src} alt={title} />
    </div>
  </>
);
export default Logo;
