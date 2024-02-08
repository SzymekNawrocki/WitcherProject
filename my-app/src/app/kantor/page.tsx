'use client'

import Head from 'next/head';
import { useState } from 'react';

const IndexPage = () => {
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleExchangeRateSubmit = async () => {
    // Tutaj możesz umieścić kod do pobierania aktualnego kursu walutowego
    // W przykładzie poniżej jest symulacja pobierania danych
    const fakeExchangeRate = 4.25;
    setExchangeRate(fakeExchangeRate);
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
        <title>Currency Exchange & Answer Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl flex flex-col items-center space-y-10">
        {/* Sekcja kantoru walutowego */}
        <section className="w-full p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Currency Exchange</h2>
          <button
            onClick={handleExchangeRateSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Get Exchange Rate
          </button>
          <div className="mt-4">
            {exchangeRate !== 0 && (
              <p className="text-lg">Current Exchange Rate: {exchangeRate}</p>
            )}
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default IndexPage;