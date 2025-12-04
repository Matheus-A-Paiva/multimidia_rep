import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, FileArchive, Music } from 'lucide-react';
import Nota2Pernas from './midias_obrigatorias/nota_2pernas.svg';
import loss from './midias_obrigatorias/loss.svg'

export function CompressaoAudio() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-gray-900 mb-8">Compressão de Áudio</h1>

      <div className="space-y-12">
        {/* Bloco 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">O que é Compressão de Áudio?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A compressão de áudio é uma técnica para reduzir o tamanho de arquivos de áudio digital, facilitando 
            o armazenamento e a transmissão. Existem dois tipos principais: compressão sem perda (lossless) e 
            compressão com perda (lossy).
          </p>
          <div className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571512379940-716326f35dbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGNvbXByZXNzaW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ4NTM4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tecnologia de áudio"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Bloco 2 - Tipos de Compressão */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-6">Tipos de Compressão</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sem Perda */}
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <div className="flex items-center gap-3 mb-4">
                  <img src={loss} className="w-8 h-8" />
                <h3 className="text-gray-900">Sem Perda (Lossless)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Mantém a qualidade original do áudio. O arquivo pode ser descomprimido para obter 
                exatamente o mesmo áudio original.
              </p>
              <div className="space-y-2">
                <h4 className="text-gray-900">Formatos:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• FLAC (Free Lossless Audio Codec)</li>
                  <li>• ALAC (Apple Lossless)</li>
                  <li>• WAV (não comprimido)</li>
                  <li>• APE (Monkey's Audio)</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-green-300">
                <p className="text-gray-600">Redução típica: 40-60% do tamanho original</p>
              </div>
            </div>

            {/* Com Perda */}
            <div className="border-2 border-orange-200 rounded-xl p-6 bg-orange-50">
              <div className="flex items-center gap-3 mb-4">
                  <img src={Nota2Pernas} className="w-8 h-8" />
                <h3 className="text-gray-900">Com Perda (Lossy)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Remove informações consideradas menos importantes para a percepção humana, 
                resultando em arquivos muito menores.
              </p>
              <div className="space-y-2">
                <h4 className="text-gray-900">Formatos:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• MP3 (MPEG Audio Layer 3)</li>
                  <li>• AAC (Advanced Audio Coding)</li>
                  <li>• OGG Vorbis</li>
                  <li>• Opus</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-orange-300">
                <p className="text-gray-600">Redução típica: 80-95% do tamanho original</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3 - Como Funciona */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Como funciona a compressão com perda?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A compressão com perda utiliza modelos psicoacústicos para identificar e remover informações que 
            o ouvido humano tem dificuldade em perceber. Isso inclui:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 mb-2">Mascaramento temporal</h3>
              <p className="text-gray-600">Sons fracos antes/depois de sons fortes são removidos</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 mb-2">Mascaramento em frequência</h3>
              <p className="text-gray-600">Sons fracos próximos a sons fortes na mesma faixa</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-gray-900 mb-2">Limites de audição</h3>
              <p className="text-gray-600">Frequências muito altas ou muito baixas</p>
            </div>
          </div>
        </div>

        {/* Bloco 4 - Bitrate */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Bitrate e Qualidade</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            O bitrate (taxa de bits) determina quanta informação é usada por segundo de áudio. 
            Quanto maior o bitrate, melhor a qualidade, mas maior o tamanho do arquivo.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-32 text-gray-700">128 kbps</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-gray-600">Qualidade baixa</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-gray-700">192 kbps</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-gray-600">Qualidade média</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-gray-700">256 kbps</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-gray-600">Qualidade boa</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-gray-700">320 kbps</div>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <span className="text-gray-600">Qualidade máxima (MP3)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
