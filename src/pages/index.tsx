import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Airbnb"
          description="Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb."
        />
      }
    >
      Let&apos;s Go
    </Main>
  );
};

export default Index;
