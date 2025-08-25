'use client';

import Script from 'next/script';

interface SchemaMarkupProps {
  type: 'localBusiness' | 'realEstateAgent' | 'service' | 'place' | 'howTo' | 'article' | 'faqPage' | 'realEstate' | 'financialProduct';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Dr. Jan Duffy - Las Vegas Relocation Services',
          description: 'Professional relocation services from major US cities to Las Vegas. Expert real estate guidance with Berkshire Hathaway.',
          url: 'https://www.lasvegasrelocationservices.com',
          telephone: '+1-702-XXX-XXXX',
          email: 'dr.jan.duffy@berkshirehathaway.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '100 North Green Valley Parkway, Suite 330',
            addressLocality: 'Henderson',
            addressRegion: 'NV',
            postalCode: '89074',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.0395,
            longitude: -115.0272
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas'
          },
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 36.0395,
              longitude: -115.0272
            },
            geoRadius: '50000'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Relocation Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Residential Relocation',
                  description: 'Complete residential moving services to Las Vegas'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Corporate Relocation',
                  description: 'Business relocation services to Las Vegas'
                }
              }
            ]
          },
          ...data
        };

      case 'realEstateAgent':
        return {
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          description: 'Licensed real estate agent specializing in Las Vegas relocation services',
          url: 'https://www.lasvegasrelocationservices.com',
          telephone: '+1-702-XXX-XXXX',
          email: 'dr.jan.duffy@berkshirehathaway.com',
          worksFor: {
            '@type': 'Organization',
            name: 'Berkshire Hathaway HomeServices',
            url: 'https://www.berkshirehathawayhomeservices.com'
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas'
          },
          hasCredential: [
            'Licensed Real Estate Agent',
            '15+ Years Experience',
            'Relocation Specialist'
          ],
          ...data
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name || 'Las Vegas Relocation Service',
          description: data.description || 'Professional relocation services to Las Vegas',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Dr. Jan Duffy - Las Vegas Relocation Services'
          },
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas'
          },
          ...data
        };

      case 'place':
        return {
          '@context': 'https://schema.org',
          '@type': 'Place',
          name: data.name || 'Las Vegas',
          description: data.description || 'Las Vegas, Nevada - The Entertainment Capital of the World',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.1699,
            longitude: -115.1398
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            addressCountry: 'US'
          },
          ...data
        };

      case 'howTo':
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: data.name || 'How to Relocate to Las Vegas',
          description: data.description || 'Step-by-step guide for relocating to Las Vegas',
          step: data.steps || [
            {
              '@type': 'HowToStep',
              name: 'Initial Consultation',
              text: 'Schedule a consultation to discuss your relocation needs and timeline'
            },
            {
              '@type': 'HowToStep',
              name: 'Area Research',
              text: 'Research Las Vegas neighborhoods that match your lifestyle and budget'
            },
            {
              '@type': 'HowToStep',
              name: 'Property Search',
              text: 'Find and view properties that meet your criteria'
            },
            {
              '@type': 'HowToStep',
              name: 'Settlement Support',
              text: 'Get assistance with settling into your new Las Vegas home'
            }
          ],
          ...data
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline || 'Las Vegas Relocation Guide',
          description: data.description || 'Comprehensive guide for relocating to Las Vegas',
          author: {
            '@type': 'Person',
            name: 'Dr. Jan Duffy'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Las Vegas Relocation Services'
          },
          datePublished: data.datePublished || new Date().toISOString(),
          ...data
        };

      case 'faqPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faqs || []
        };

      case 'realEstate':
        return {
          '@context': 'https://schema.org',
          '@type': 'RealEstate',
          name: data.name || 'Las Vegas Investment Properties',
          description: data.description || 'Investment property opportunities in Las Vegas',
          areaServed: {
            '@type': 'City',
            name: 'Las Vegas'
          },
          ...data
        };

      case 'financialProduct':
        return {
          '@context': 'https://schema.org',
          '@type': 'FinancialProduct',
          name: data.name || 'Las Vegas Real Estate Investment',
          description: data.description || 'Investment opportunities in Las Vegas real estate',
          provider: {
            '@type': 'Organization',
            name: 'Dr. Jan Duffy - Las Vegas Relocation Services'
          },
          ...data
        };

      default:
        return data;
    }
  };

  const schema = generateSchema();

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

