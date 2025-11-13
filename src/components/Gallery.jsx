import React from 'react';

export default function Gallery() {
  const sessions = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      alt: "Therapy session between older man and young woman"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      alt: "Two women in counseling session"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      alt: "Therapist and client in conversation with gestures"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      alt: "Group therapy session"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-4/3"
            >
              <img
                src={session.image}
                alt={session.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}