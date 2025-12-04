import { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, RotateCcw, Home, PlayCircle, Clock, Award } from 'lucide-react';
import { Section } from '../App';
import violaoGreen from './midias_obrigatorias/violao_green.ogg';
import violaoRed from './midias_obrigatorias/violao_red.ogg';
import stopMotion from './midias_obrigatorias/stopmotion.mp4';


interface QuizProps {
  onNavigate: (section: Section) => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: 'Qual é a taxa de amostragem padrão usada em CDs de áudio?',
    options: ['22.05 kHz', '44.1 kHz', '48 kHz', '96 kHz'],
    correctAnswer: 1,
    explanation: '44.1 kHz é o padrão para CDs de áudio, permitindo capturar frequências até aproximadamente 20 kHz.',
  },
  {
    id: 2,
    question: 'O que significa "compressão com perda" (lossy)?',
    options: [
      'O arquivo fica corrompido',
      'Informações são removidas permanentemente para reduzir o tamanho',
      'O áudio pode ser descomprimido para o original',
      'Apenas metadados são perdidos',
    ],
    correctAnswer: 1,
    explanation: 'Compressão com perda remove informações consideradas menos importantes para reduzir o tamanho, e essas informações não podem ser recuperadas.',
  },
  {
    id: 3,
    question: 'Qual destes formatos é "lossless" (sem perda)?',
    options: ['MP3', 'AAC', 'FLAC', 'OGG Vorbis'],
    correctAnswer: 2,
    explanation: 'FLAC (Free Lossless Audio Codec) preserva toda a qualidade do áudio original sem perda de dados.',
  },
  {
    id: 4,
    question: 'O que é quantização no contexto de áudio digital?',
    options: [
      'O processo de medir o sinal em intervalos regulares',
      'O processo de atribuir valores discretos às amostras',
      'O processo de comprimir o áudio',
      'O processo de converter de digital para analógico',
    ],
    correctAnswer: 1,
    explanation: 'Quantização é o processo de atribuir valores numéricos discretos às amostras capturadas do sinal analógico.',
  },
  {
    id: 5,
    question: 'Segundo o Teorema de Nyquist, a taxa de amostragem deve ser:',
    options: [
      'Igual à frequência mais alta a ser capturada',
      'Pelo menos o dobro da frequência mais alta',
      'Metade da frequência mais alta',
      'Não há relação específica',
    ],
    correctAnswer: 1,
    explanation: 'O Teorema de Nyquist estabelece que a taxa de amostragem deve ser pelo menos o dobro da frequência mais alta para evitar aliasing.',
  },
  {
    id: 6,
    question: 'Qual profundidade de bits oferece maior faixa dinâmica?',
    options: ['8 bits', '16 bits', '24 bits', 'Todas são iguais'],
    correctAnswer: 2,
    explanation: '24 bits oferece uma faixa dinâmica de aproximadamente 144 dB, muito superior aos ~96 dB de 16 bits.',
  },
  {
    id: 7,
    question: 'MP3 a 320 kbps é considerado:',
    options: [
      'Qualidade baixa',
      'Qualidade média',
      'Qualidade máxima para MP3',
      'Melhor que WAV',
    ],
    correctAnswer: 2,
    explanation: '320 kbps é a qualidade máxima para arquivos MP3, embora ainda seja compressão com perda.',
  },
  {
    id: 8,
    question: 'Para produção musical profissional, qual formato é mais recomendado durante a edição?',
    options: ['MP3 320 kbps', 'AAC 256 kbps', 'WAV 24-bit', 'FLAC'],
    correctAnswer: 2,
    explanation: 'WAV 24-bit é o formato preferido para produção profissional, pois mantém qualidade máxima sem compressão.',
  },
  {
    id: 9,
    question: 'O que é aliasing no áudio digital?',
    options: [
      'Um tipo de compressão',
      'Um formato de arquivo',
      'Distorção causada por taxa de amostragem insuficiente',
      'Um efeito de áudio',
    ],
    correctAnswer: 2,
    explanation: 'Aliasing ocorre quando a taxa de amostragem é muito baixa, fazendo frequências altas serem incorretamente representadas como frequências baixas.',
  },
  {
    id: 10,
    question: 'Qual formato seria mais apropriado para distribuir um podcast de voz?',
    options: ['WAV 24-bit 96 kHz', 'FLAC', 'MP3 128-192 kbps mono', 'AAC 320 kbps estéreo'],
    correctAnswer: 2,
    explanation: 'Para podcasts de voz, MP3 128-192 kbps em mono oferece qualidade adequada com tamanho de arquivo otimizado.',
  },
];


export function Quiz({ onNavigate }: QuizProps) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // Refs para áudio
  const greenSound = useRef<HTMLAudioElement | null>(null);
  const redSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    greenSound.current = new Audio(violaoGreen);
    redSound.current = new Audio(violaoRed);
  }, []);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
    setUserAnswers(new Array(shuffled.length).fill(null));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  }, []);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelect = (index: number) => {
    if (userAnswers[currentQuestionIndex] !== null) return;

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = index;
    setUserAnswers(newAnswers);

    const isCorrect = index === questions[currentQuestionIndex].correctAnswer;

    // toca o áudio
    if (isCorrect) greenSound.current?.play();
    else redSound.current?.play();
  };

  const handleNextQuestion = () => {
    const answer = userAnswers[currentQuestionIndex];
    if (answer === null) return;

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
    setUserAnswers(new Array(shuffled.length).fill(null));
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setScore(0);
    setQuizStarted(false);
  };

  const getFeedbackMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return { text: 'Excelente! Você domina o assunto!', color: 'text-green-600' };
    if (percentage >= 80) return { text: 'Muito bom! Você tem um ótimo conhecimento!', color: 'text-blue-600' };
    if (percentage >= 60) return { text: 'Bom trabalho! Continue estudando!', color: 'text-yellow-600' };
    return { text: 'Precisa revisar o conteúdo. Não desista!', color: 'text-orange-600' };
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
          <p className="text-gray-600">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 mb-6">
              <Award className="w-10 h-10 text-pink-600" />
            </div>
            <h1 className="text-gray-900 mb-4">Quiz – Teste seus conhecimentos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Responda às perguntas sobre áudio digital e descubra o quanto você aprendeu.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleStartQuiz}
              className="flex items-center gap-2 bg-pink-600 text-white px-10 py-4 rounded-lg hover:bg-pink-700"
            >
              <PlayCircle className="w-6 h-6" />
              Iniciar Quiz
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-300"
            >
              Voltar à Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const feedback = getFeedbackMessage(score, questions.length);

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
          <h1 className="text-gray-900 mb-8">Resultado do Quiz</h1>

          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-100 mb-6">
              <span className="text-blue-900" style={{ fontSize: '3rem' }}>
                {score}/{questions.length}
              </span>
            </div>

            <p className={`${feedback.color} mb-4`}>{feedback.text}</p>
          </div>

          {/* VÍDEO SE ACERTAR 3 OU MAIS */}
          {score >= 3 && (
            <video
              src={stopMotion}
               autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-2xl mx-auto mb-10 rounded-xl shadow-lg"
            />
          )}

          <div className="flex gap-4 justify-center">
            <button onClick={handleRestart} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700">
              Fazer novamente
            </button>

            <button onClick={() => onNavigate('home')} className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-300">
              Voltar à Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selected = userAnswers[currentQuestionIndex];
  const hasAnswered = selected !== null;
  const isCorrect = hasAnswered && selected === currentQuestion.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-gray-900">Quiz – Teste seus conhecimentos</h1>
          <span className="text-gray-600">Pergunta {currentQuestionIndex + 1} de {questions.length}</span>
        </div>

        <h2 className="text-gray-900 mb-6">{currentQuestion.question}</h2>

        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => {
            let style = "w-full text-left p-4 rounded-lg border-2 transition-all ";

            if (hasAnswered) {
              if (index === currentQuestion.correctAnswer) {
                style += "border-green-500 bg-green-50";
              } else if (index === selected) {
                style += "border-red-500 bg-red-50";
              } else {
                style += "border-gray-200 bg-gray-50";
              }
            } else {
              style += selected === index
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={hasAnswered}
                className={style}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>

                  {hasAnswered && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}

                  {hasAnswered && index === selected && index !== currentQuestion.correctAnswer && (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {hasAnswered && (
          <div className={`mb-6 p-4 rounded-lg ${isCorrect ? "bg-green-50 border-l-4 border-green-500" : "bg-blue-50 border-l-4 border-blue-500"}`}>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-gray-700">Pontos: {score}</span>

          <button
            onClick={handleNextQuestion}
            disabled={!hasAnswered}
            className={`px-8 py-3 rounded-lg transition-colors
              ${!hasAnswered ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            {currentQuestionIndex < questions.length - 1 ? "Próxima pergunta" : "Ver resultado"}
          </button>
        </div>
      </div>
    </div>
  );
}