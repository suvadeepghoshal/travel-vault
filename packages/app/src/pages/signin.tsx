import { type GetServerSideProps, type GetServerSidePropsContext } from "next";
import Login from "~/components/login/login";

type SignInProps = {
  currentPath: string | undefined;
};

const SignIn: React.FC<SignInProps> = ({ currentPath }) => {
  return (
    <>
      <section>
        <Login currentPath={currentPath} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = (
  context: GetServerSidePropsContext
) => {
  const currentPath = context.req.url;
  return Promise.resolve({
    props: {
      currentPath,
    },
  });
};

export default SignIn;
