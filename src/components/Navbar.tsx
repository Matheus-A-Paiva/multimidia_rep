import { Section } from '../App';

interface NavbarProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

export function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'o-que-e', label: 'O que é áudio digital' },
    { id: 'amostragem', label: 'Amostragem e quantização' },
    { id: 'compressao', label: 'Compressão de áudio' },
    { id: 'formatos', label: 'Formatos e padrões' },
    { id: 'quiz', label: 'Quiz' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
