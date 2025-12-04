import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Pause, Volume2, Download } from 'lucide-react';
import { useState } from 'react';

export function ExemplosPraticos() {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'sampling-rates',
      title: 'Comparação de Taxas de Amostragem',
      description: 'Ouça a diferença entre 22 kHz, 44.1 kHz e 96 kHz',
      samples: ['22 kHz', '44.1 kHz', '96 kHz'],
    },
    {
      id: 'bit-depth',
      title: 'Comparação de Profundidade de Bits',
      description: 'Perceba a diferença na faixa dinâmica entre 8, 16 e 24 bits',
      samples: ['8 bits', '16 bits', '24 bits'],
    },
    {
      id: 'compression',
      title: 'Níveis de Compressão',
      description: 'Compare diferentes bitrates de compressão MP3',
      samples: ['128 kbps', '192 kbps', '320 kbps', 'WAV Original'],
    },
  ];

  const practicalExamples = [
    {
      title: 'Gravação de Podcast',
      scenario: 'Você quer gravar e distribuir um podcast',
      recommendation: 'MP3 a 128-192 kbps, mono, 44.1 kHz',
      reason: 'Voz humana não requer alta fidelidade. Arquivo pequeno facilita download e streaming.',
    },
    {
      title: 'Produção Musical',
      scenario: 'Gravação e edição de uma música',
      recommendation: 'WAV 24-bit, 48 kHz ou superior',
      reason: 'Qualidade máxima para manipulação sem perda. Exportar para MP3/AAC apenas no final.',
    },
    {
      title: 'Audiolivro',
      scenario: 'Distribuição de audiolivro',
      recommendation: 'AAC 64-96 kbps, mono',
      reason: 'Tamanho reduzido para longas durações. AAC oferece melhor qualidade que MP3 em baixos bitrates.',
    },
    {
      title: 'Arquivo de Música',
      scenario: 'Coleção pessoal de alta qualidade',
      recommendation: 'FLAC ou ALAC',
      reason: 'Preserva qualidade original do CD. Compressão sem perda. Pode ser convertido depois sem degradação.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-gray-900 mb-8">Exemplos Práticos</h1>

      {/* Seção de Imagem */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY0Nzg4OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Estúdio de produção musical"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Demos Interativos */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">Demos Interativos</h2>
        <div className="space-y-6">
          {demos.map((demo) => (
            <div key={demo.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 mb-2">{demo.title}</h3>
              <p className="text-gray-600 mb-4">{demo.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {demo.samples.map((sample) => (
                  <button
                    key={sample}
                    onClick={() => {
                      setPlayingDemo(playingDemo === `${demo.id}-${sample}` ? null : `${demo.id}-${sample}`);
                    }}
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {playingDemo === `${demo.id}-${sample}` ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visualizador de Onda */}
      <div className="mb-12 bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-gray-900 mb-6">Visualizador de Forma de Onda</h2>
        <div className="bg-gray-900 rounded-xl p-8 mb-6">
          <div className="h-48 flex items-center justify-center">
            <div className="flex items-end gap-1 h-full">
              {Array.from({ length: 100 }).map((_, i) => {
                const height = Math.sin(i * 0.2) * 40 + 50;
                return (
                  <div
                    key={i}
                    className="bg-blue-500 w-1 transition-all duration-300"
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Play className="w-5 h-5" />
              Reproduzir
            </button>
            <button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
              <Volume2 className="w-5 h-5" />
              Volume
            </button>
          </div>
          <div className="text-gray-600">0:00 / 0:45</div>
        </div>
      </div>

      {/* Casos de Uso */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">Casos de Uso Recomendados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {practicalExamples.map((example, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100">
              <h3 className="text-gray-900 mb-2">{example.title}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">Cenário:</span>
                  <p className="text-gray-700">{example.scenario}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <span className="text-green-800">Recomendação:</span>
                  <p className="text-green-900">{example.recommendation}</p>
                </div>
                <div>
                  <span className="text-gray-600">Por quê:</span>
                  <p className="text-gray-700">{example.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ferramenta de Cálculo */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-gray-900 mb-6">Calculadora de Tamanho de Arquivo</h2>
        <p className="text-gray-600 mb-6">
          Estime o tamanho de um arquivo de áudio com base nas configurações
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Duração (segundos)</label>
            <input
              type="number"
              defaultValue="180"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Taxa de Amostragem</label>
            <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>44.1 kHz</option>
              <option>48 kHz</option>
              <option>96 kHz</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Profundidade de Bits</label>
            <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>16 bits</option>
              <option>24 bits</option>
              <option>32 bits</option>
            </select>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Tamanho estimado (WAV estéreo):</span>
            <span className="text-blue-900">~30.3 MB</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-gray-700">Comprimido em MP3 320 kbps:</span>
            <span className="text-blue-900">~7.2 MB</span>
          </div>
        </div>
      </div>

      {/* Download de Exemplos */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
        <div className="flex items-start gap-4">
          <Download className="w-8 h-8 text-purple-600 flex-shrink-0" />
          <div>
            <h3 className="text-gray-900 mb-2">Baixe arquivos de exemplo</h3>
            <p className="text-gray-700 mb-4">
              Pacote com amostras de áudio em diferentes formatos e configurações para comparação e estudo.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Download do Pacote (15 MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
