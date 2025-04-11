import Hero from '../components/Hero';
import AdBar from '@/components/AdBar';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main>
      <AdBar />
      <NavBar />
      <Hero />
    </main>
  );
}
