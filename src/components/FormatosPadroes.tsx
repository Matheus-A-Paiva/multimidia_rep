import { FileAudio, CheckCircle, XCircle } from 'lucide-react';

export function FormatosPadroes() {
  const formats = [
    {
      name: 'MP3',
      fullName: 'MPEG-1 Audio Layer 3',
      type: 'Lossy',
      color: 'blue',
      pros: [
        'Universalmente compatível',
        'Tamanho de arquivo pequeno',
        'Suporte em praticamente todos os dispositivos',
      ],
      cons: [
        'Perda de qualidade',
        'Tecnologia antiga',
        'Não ideal para edição profissional',
      ],
      usage: 'Streaming, players portáteis, compartilhamento',
    },
    {
      name: 'AAC',
      fullName: 'Advanced Audio Coding',
      type: 'Lossy',
      color: 'purple',
      pros: [
        'Melhor qualidade que MP3 no mesmo bitrate',
        'Usado pelo iTunes e YouTube',
        'Eficiente para streaming',
      ],
      cons: [
        'Menos compatível que MP3',
        'Perda de qualidade',
        'Licenciamento proprietário',
      ],
      usage: 'Apple Music, YouTube, streaming moderno',
    },
    {
      name: 'FLAC',
      fullName: 'Free Lossless Audio Codec',
      type: 'Lossless',
      color: 'green',
      pros: [
        'Sem perda de qualidade',
        'Código aberto',
        'Boa compressão',
      ],
      cons: [
        'Arquivos maiores que MP3',
        'Compatibilidade limitada em dispositivos antigos',
        'Não suportado nativamente pelo iOS',
      ],
      usage: 'Arquivamento, audiófilos, Hi-Res audio',
    },
    {
      name: 'WAV',
      fullName: 'Waveform Audio File Format',
      type: 'Uncompressed',
      color: 'orange',
      pros: [
        'Qualidade máxima',
        'Compatibilidade universal',
        'Ideal para edição',
      ],
      cons: [
        'Arquivos muito grandes',
        'Sem compressão',
        'Inviável para streaming',
      ],
      usage: 'Produção musical, edição profissional',
    },
    {
      name: 'OGG Vorbis',
      fullName: 'Ogg Vorbis',
      type: 'Lossy',
      color: 'pink',
      pros: [
        'Código aberto e livre de royalties',
        'Qualidade superior ao MP3',
        'Eficiente',
      ],
      cons: [
        'Menor compatibilidade',
        'Menos popular',
        'Perda de qualidade',
      ],
      usage: 'Jogos, Spotify, aplicações open-source',
    },
    {
      name: 'ALAC',
      fullName: 'Apple Lossless Audio Codec',
      type: 'Lossless',
      color: 'gray',
      pros: [
        'Sem perda de qualidade',
        'Suporte nativo Apple',
        'Boa integração com ecossistema Apple',
      ],
      cons: [
        'Compatibilidade limitada fora do ecossistema Apple',
        'Arquivos maiores que formatos lossy',
        'Compressão menor que FLAC',
      ],
      usage: 'iTunes, Apple Music, dispositivos Apple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; badge: string } } = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-600' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', badge: 'bg-pink-600' },
      gray: { bg: 'bg-gray-50', border: 'border-gray-200', badge: 'bg-gray-600' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-gray-900 mb-8">Formatos e Padrões de Áudio</h1>

      <div className="mb-12 bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-gray-900 mb-4">Principais Formatos de Áudio Digital</h2>
        <p className="text-gray-700 leading-relaxed">
          Existem diversos formatos de arquivo de áudio, cada um com suas características, vantagens e casos de uso específicos. 
          A escolha do formato depende de fatores como qualidade desejada, compatibilidade, tamanho de arquivo e finalidade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {formats.map((format) => {
          const colors = getColorClasses(format.color);
          return (
            <div
              key={format.name}
              className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-6 shadow-sm`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileAudio className="w-8 h-8 text-gray-700" />
                  <div>
                    <h3 className="text-gray-900">{format.name}</h3>
                    <p className="text-gray-600">{format.fullName}</p>
                  </div>
                </div>
                <span className={`${colors.badge} text-white px-3 py-1 rounded-full`}>
                  {format.type}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Vantagens
                  </h4>
                  <ul className="space-y-1">
                    {format.pros.map((pro, index) => (
                      <li key={index} className="text-gray-700 text-sm ml-6">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    Desvantagens
                  </h4>
                  <ul className="space-y-1">
                    {format.cons.map((con, index) => (
                      <li key={index} className="text-gray-700 text-sm ml-6">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <h4 className="text-gray-900 mb-1">Uso recomendado:</h4>
                  <p className="text-gray-700">{format.usage}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
        <h3 className="text-gray-900 mb-3">Dica de escolha</h3>
        <div className="space-y-2 text-gray-700">
          <p>• <span>Para streaming/portabilidade:</span> MP3 (320 kbps) ou AAC</p>
          <p>• <span>Para arquivamento/qualidade máxima:</span> FLAC ou WAV</p>
          <p>• <span>Para produção profissional:</span> WAV (24-bit, 48 kHz ou superior)</p>
          <p>• <span>Para web/jogos:</span> OGG Vorbis ou AAC</p>
        </div>
      </div>
    </div>
  );
}
