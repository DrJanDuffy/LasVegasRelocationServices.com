'use client';

import { CheckCircle } from 'lucide-react';

interface QuickFact {
  label: string;
  value: string;
  description?: string;
}

interface QuickFactsProps {
  title?: string;
  facts: QuickFact[];
  className?: string;
}

export default function QuickFacts({ title = "Quick Facts", facts, className = "" }: QuickFactsProps) {
  return (
    <section className={`py-12 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-2xl font-bold text-gray-900 mb-2">
                    {fact.value}
                  </dd>
                  {fact.description && (
                    <p className="text-sm text-gray-600">
                      {fact.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

