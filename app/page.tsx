import About from '@/components/About';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <About />
      <Projects />
    </main>
  );
}
