import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

import setupImg from './midias_obrigatorias/setup.jpeg';
import violaoImg from './midias_obrigatorias/violao.jpeg';

export function OQueEAudioDigital() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-gray-900 mb-8">O que é Áudio Digital</h1>

      <div className="space-y-12">

        {/* Bloco 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Definição</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            O áudio digital é a representação de ondas sonoras em formato digital, através de uma sequência de números
            binários. Diferentemente do áudio analógico, que é contínuo, o áudio digital é discreto e pode ser
            armazenado, processado e transmitido por computadores e dispositivos eletrônicos.
          </p>
          <div className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src={setupImg}
              alt="Visualização de forma de onda digital"
              className= "w-full h-64 object-cover scale-75"
            />
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Como funciona</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A conversão de áudio analógico para digital acontece através de um processo chamado digitalização.
            Um conversor analógico-digital (ADC) captura amostras do sinal de áudio em intervalos regulares e converte
            cada amostra em um valor numérico. Este processo envolve duas etapas principais: amostragem (sampling) e
            quantização (quantization).
          </p>

          <div className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src={violaoImg}
              alt="Representação de gravação usando violão"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Bloco 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-gray-900 mb-4">Vantagens do Áudio Digital</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-900 mb-1">Qualidade consistente</h3>
                  <p className="text-gray-600">Não degrada com cópias ou ao longo do tempo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-900 mb-1">Fácil edição</h3>
                  <p className="text-gray-600">Permite manipulação precisa e não destrutiva</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-900 mb-1">Armazenamento eficiente</h3>
                  <p className="text-gray-600">Pode ser comprimido sem perda significativa de qualidade</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-900 mb-1">Transmissão digital</h3>
                  <p className="text-gray-600">Facilita o compartilhamento via internet</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-900 mb-1">Processamento avançado</h3>
                  <p className="text-gray-600">Permite efeitos e correções impossíveis no analógico</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-900 mb-1">Compatibilidade</h3>
                  <p className="text-gray-600">Funciona em diversos dispositivos e plataformas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}