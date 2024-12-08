import Image from 'next/image';
import logo from '@/assets/logo.png';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-5 gap-5">
      <Image src={logo} alt="Excel Institutions Logo" width={200} height={200} />
      <div className="text-6xl">EXCEL TUITIONS</div>
      <div className='text-center'>
        Empowering the next gen. Pioneering the journey towards excellence and
        academic dominance.
      </div>
      <div>
        <Button>
            Know more
        </Button>
      </div>
    </div>
  );
};
