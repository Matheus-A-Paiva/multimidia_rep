import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';
import ondasAudacity from './midias_obrigatorias/audacity.mp4';


export function AmostragemQuantizacao() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-gray-900 mb-8">Amostragem e Quantização</h1>

      <div className="space-y-12">
        {/* Bloco 1 - Amostragem */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Amostragem (Sampling)</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A amostragem é o processo de medir o valor de um sinal analógico em intervalos regulares de tempo. 
            A taxa de amostragem (sample rate) determina quantas vezes por segundo o sinal é medido, geralmente 
            expressa em Hertz (Hz). O Teorema de Nyquist estabelece que a taxa de amostragem deve ser pelo menos 
            o dobro da frequência mais alta que se deseja capturar.
          </p>
        <div className="rounded-xl overflow-hidden mt-6">
                <video
                src={ondasAudacity}
                controls
                className="w-full h-64 object-cover rounded-xl shadow"
                  />
        </div>
      

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-gray-900 mb-3">Taxas de amostragem comuns:</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">44.1 kHz</span>
                <span className="text-gray-600">CD de áudio, qualidade padrão</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">48 kHz</span>
                <span className="text-gray-600">Áudio profissional, vídeo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">96 kHz / 192 kHz</span>
                <span className="text-gray-600">Alta resolução (Hi-Res)</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759912804199-a104b710a308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMHdhdmUlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NDg1Mzg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Visualização de ondas sonoras"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Bloco 2 - Quantização */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Quantização (Quantization)</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A quantização é o processo de atribuir valores discretos às amostras capturadas. A profundidade de bits 
            (bit depth) determina quantos valores possíveis cada amostra pode ter. Quanto maior a profundidade de bits, 
            maior a precisão e a faixa dinâmica do áudio digital.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-gray-900 mb-3">16 bits</h3>
              <p className="text-gray-700 mb-2">65.536 níveis possíveis</p>
              <p className="text-gray-600">Qualidade CD, faixa dinâmica de ~96 dB</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-gray-900 mb-3">24 bits</h3>
              <p className="text-gray-700 mb-2">16.777.216 níveis possíveis</p>
              <p className="text-gray-600">Áudio profissional, faixa dinâmica de ~144 dB</p>
            </div>
          </div>
        </div>

        {/* Bloco 3 - Aliasing */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Aliasing e Filtros Anti-Aliasing</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Quando a taxa de amostragem é insuficiente para capturar frequências altas, ocorre um fenômeno chamado 
            aliasing, onde frequências acima da metade da taxa de amostragem são incorretamente representadas como 
            frequências mais baixas. Para evitar isso, utilizam-se filtros anti-aliasing que removem frequências 
            acima do limite antes da conversão.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-gray-700">
              <span>Importante:</span> Por isso, áudio de 44.1 kHz captura até aproximadamente 20 kHz, 
              que é o limite da audição humana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
