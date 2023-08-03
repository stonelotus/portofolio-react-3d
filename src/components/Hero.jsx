import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#00a7e6]'>Constantin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I  use code to  <br className='sm:block hidden' />
            <Typewriter
              options={{
                strings: ['get things <span style="color: #27ae60;">done.</span> ', 'build<span style="color: #B87333;"> full stack apps.</span>', 'deploy everything.'],
                autoStart: true,
                loop: true,
                
              }}
            />
            <Typewriter
              options={{
                strings: ['<span style="color: #B87333;">automate</span> tasks. ', 'create <span style="color: #FF6347;"> worlds.</span>', '<span style="color: #FFD700;">hack.</span>'],
                autoStart: true,
                loop: true,
                
              }}
            />
            <Typewriter
              options={{
                strings: ['<span style="color: #27ae60;">teach people.</span> ', '', 'deploy anything.', '<span style="color: #B22222;">solve problems.</span>'],
                autoStart: true,
                loop: true,
                
              }}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
