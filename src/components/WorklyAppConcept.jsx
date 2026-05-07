import React, { useState } from 'react';

export default function WorklyAppConcept() {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Empregado de Mesa',
      company: 'Restaurante Porto Grill',
      pay: '55€/dia',
      location: 'Porto',
    },
    {
      id: 2,
      title: 'Staff para Evento',
      company: 'Summer Events',
      pay: '80€/noite',
      location: 'Gaia',
    },
    {
      id: 3,
      title: 'Ajudante de Obra',
      company: 'Construções Silva',
      pay: '70€/dia',
      location: 'Matosinhos',
    },
  ]);

  const [applied, setApplied] = useState(new Set());

  const handleApply = (jobId) => {
    const newApplied = new Set(applied);
    newApplied.add(jobId);
    setApplied(newApplied);
    alert('Candidatura enviada com sucesso!');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
              <span className="text-3xl font-black">W</span>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight">WORKLY</h1>
              <p className="text-zinc-400">Trabalho rápido perto de ti</p>
            </div>
          </div>

          <button className="bg-emerald-500 hover:bg-emerald-400 transition px-6 py-3 rounded-2xl font-bold text-black">
            Publicar Trabalho
          </button>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-6xl font-black leading-tight mb-6">
              Encontra trabalho em minutos.
            </h2>

            <p className="text-zinc-400 text-lg mb-8">
              Part-times, eventos, restauração, construção e trabalhos locais.
              Empresas encontram trabalhadores rapidamente e trabalhadores
              conseguem oportunidades reais perto deles.
            </p>

            <div className="flex gap-4">
              <button className="bg-emerald-500 text-black px-6 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition">
                Preciso Trabalhar Hoje
              </button>

              <button className="border border-zinc-700 px-6 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition">
                Procurar Trabalhadores
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Trabalhos Disponíveis</h3>
              <span className="text-emerald-400 font-bold">+{jobs.length * 41} hoje</span>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-xl">{job.title}</h4>
                      <p className="text-zinc-400">{job.company}</p>
                    </div>

                    <span className="bg-emerald-500 text-black px-3 py-1 rounded-xl font-bold">
                      {job.pay}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-zinc-500">📍 {job.location}</span>

                    <button
                      onClick={() => handleApply(job.id)}
                      disabled={applied.has(job.id)}
                      className={`px-4 py-2 rounded-xl font-bold transition ${
                        applied.has(job.id)
                          ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                          : 'bg-white text-black hover:bg-zinc-200'
                      }`}
                    >
                      {applied.has(job.id) ? 'Candidato' : 'Candidatar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Trabalhos Reais',
              desc: 'Empresas verificadas e oportunidades ativas.',
            },
            {
              title: 'Resposta Rápida',
              desc: 'Fala diretamente com quem contrata.',
            },
            {
              title: 'Perto de Ti',
              desc: 'Encontra trabalho na tua zona em segundos.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
          <p>WORKLY © 2026 — O futuro dos trabalhos rápidos e part-time.</p>
        </div>
      </div>
    </div>
  );
}