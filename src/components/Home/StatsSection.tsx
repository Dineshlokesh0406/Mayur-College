import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: '100+',
      label: 'Students'
    },
    {
      number: '10+',
      label: 'Faculty'
    },
    {
      number: '5+',
      label: 'Ranks'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Teal Gradient Card */}
              <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg p-8 mb-4 shadow-lg">
                <div className="text-4xl font-bold text-yellow-300">
                  {stat.number}
                </div>
              </div>

              {/* Label */}
              <h3 className="text-lg font-medium text-blue-600">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;