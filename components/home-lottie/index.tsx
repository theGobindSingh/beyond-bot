import lottieAnimation from '@public/assets/lottie/lottie.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'));

const HomeLottie = () => <Lottie animationData={lottieAnimation} />;

export default HomeLottie;
