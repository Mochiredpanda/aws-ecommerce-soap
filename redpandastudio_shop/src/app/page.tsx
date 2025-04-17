import Hero from '../components/Hero';
import AdBar from '@/components/AdBar';
import NavBar from '@/components/NavBar';
import CardRow from '@/components/CardRow';

export default function Home() {
  return (
    <main>
      <AdBar />
      <NavBar />
      <Hero />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <CardRow />
        </div>
      </div>
    </main>
  );
}
