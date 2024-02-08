'use client'
import Head from 'next/head';
import { useState } from 'react';

const IndexPage = () => {
  const [weather, setWeather] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleWeatherSubmit = async () => {
    // Tutaj możesz umieścić kod do pobierania informacji o pogodzie
    // W przykładzie poniżej jest symulacja pobierania danych
    const fakeWeatherData = 'Sunny';
    setWeather(fakeWeatherData);
  };

  const handleQuestionSubmit = () => {
    // Tutaj możesz umieścić kod do generowania losowej odpowiedzi na pytanie
    // W przykładzie poniżej jest wybierana losowa odpowiedź z listy
    const answers = ['Tak', 'Nie', 'Być może', 'Spróbuj ponownie później'];
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-100">
      <Head>
        <title>Weather & Answer Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl flex flex-col items-center space-y-10">
        {/* Sekcja aplikacji pogodowej */}
        <section className="w-full p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Weather App</h2>
          <button
            onClick={handleWeatherSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Get Weather
          </button>
          <div className="mt-4">
            {weather && (
              <p className="text-lg">Current Weather: {weather}</p>
            )}
          </div>
        </section>

        {/* Sekcja generatora losowej odpowiedzi na pytanie */}
        <section className="w-full p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Random Answer Generator</h2>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
          />
          <button
            onClick={handleQuestionSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Get Answer
          </button>
          {answer && (
            <div className="mt-4">
              <p className="text-lg">Answer: {answer}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default IndexPage;