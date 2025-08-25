'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Prepare breadcrumb data for schema markup
  const breadcrumbSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Relocation Services',
    description: 'Professional relocation services to Las Vegas',
    provider: {
      '@type': 'Organization',
      name: 'Dr. Jan Duffy - Las Vegas Relocation Services',
      url: 'https://www.lasvegasrelocationservices.com'
    },
    breadcrumb: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.lasvegasrelocationservices.com'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://www.lasvegasrelocationservices.com${item.href}`
      }))
    ]
  };

  return (
    <nav className={`py-4 bg-gray-50 border-b border-gray-200 ${className}`} aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Schema markup for breadcrumbs */}
      <SchemaMarkup type="service" data={breadcrumbSchemaData} />
    </nav>
  );
}

