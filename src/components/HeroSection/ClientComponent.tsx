'use client';

import { FC } from 'react';

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = props => {
  const { heading1, section2 } = props;

  return (
    <section className='flex px-4 items-center gap-12 container mx-auto'>
      <div className='py-10 h-full'>
        {heading1}

        <div className='flex justify-between mt-12'>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Basic Room</p>
            <p>50</p>
          </div>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
            <p>120</p>
          </div>
          <div className='flex gap-3 flex-col items-center justify-center'>
            <p className='text-xs lg:text-xl text-center'>Suite</p>
            <p>150</p>
          </div>
        </div>
      </div>

      {section2}
    </section>
  );
};

export default ClientComponent;
