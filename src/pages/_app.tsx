import type { AppType } from 'next/dist/shared/lib/utils';
import { Main } from '../components/layout/main';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <Main router={router}>
      <Component
        {...pageProps}
        key={router.route}
      />
    </Main>
  );
};

export default MyApp;
