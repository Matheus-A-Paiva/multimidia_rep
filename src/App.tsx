import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { OQueEAudioDigital } from './components/OQueEAudioDigital';
import { AmostragemQuantizacao } from './components/AmostragemQuantizacao';
import { CompressaoAudio } from './components/CompressaoAudio';
import { FormatosPadroes } from './components/FormatosPadroes';
import { ExemplosPraticos } from './components/ExemplosPraticos';
import { Quiz } from './components/Quiz';

export type Section = 'home' | 'o-que-e' | 'amostragem' | 'compressao' | 'formatos' | 'exemplos' | 'quiz';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onNavigate={setCurrentSection} />;
      case 'o-que-e':
        return <OQueEAudioDigital />;
      case 'amostragem':
        return <AmostragemQuantizacao />;
      case 'compressao':
        return <CompressaoAudio />;
      case 'formatos':
        return <FormatosPadroes />;
      case 'exemplos':
        return <ExemplosPraticos />;
      case 'quiz':
        return <Quiz onNavigate={setCurrentSection} />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} />
      <main className="pt-20">
        {renderSection()}
      </main>
    </div>
  );
}