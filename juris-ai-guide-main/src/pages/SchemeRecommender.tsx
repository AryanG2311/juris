
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import SchemeForm from '@/components/SchemeForm';
import SchemeResults from '@/components/SchemeResults';

interface FormData {
  income: string;
  employmentStatus: string;
  healthCondition: boolean;
  disability: boolean;
  age: string;
  familySize: string;
}

const SchemeRecommender = () => {
  const [results, setResults] = useState<null | {
    schemes: Array<{
      id: string;
      name: string;
      description: string;
      eligibility: string;
      applicationLink: string;
      category: string;
    }>;
  }>(null);

  const handleFormSubmit = (formData: FormData) => {
    // In a real application, you would send this data to your backend
    // Here we'll generate mock recommendations based on the form data
    
    const mockSchemes = [
      {
        id: '1',
        name: 'Healthcare Assistance Program',
        description: 'Financial assistance for medical expenses for low-income individuals.',
        eligibility: 'Income below $25,000 for individuals or $50,000 for families.',
        applicationLink: 'https://example.gov/healthcare-assistance',
        category: 'Health'
      },
      {
        id: '2',
        name: 'Disability Support Pension',
        description: 'Financial support for people with permanent disabilities that prevent them from working.',
        eligibility: 'Permanent disability assessed at 20 points or more on the impairment tables.',
        applicationLink: 'https://example.gov/disability-pension',
        category: 'Disability'
      },
      {
        id: '3',
        name: 'Housing Rental Assistance',
        description: 'Rental subsidies for low-income families.',
        eligibility: 'Income below local median, with priority for families with children.',
        applicationLink: 'https://example.gov/rental-assistance',
        category: 'Housing'
      }
    ];
    
    // Filter based on form data - in a real app this would be more sophisticated
    let filteredSchemes = [...mockSchemes];
    
    if (formData.income === 'high') {
      filteredSchemes = filteredSchemes.filter(scheme => 
        !scheme.eligibility.toLowerCase().includes('low-income')
      );
    }
    
    if (!formData.disability) {
      filteredSchemes = filteredSchemes.filter(scheme => 
        !scheme.category.toLowerCase().includes('disability')
      );
    }
    
    setResults({ schemes: filteredSchemes });
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Government Scheme Recommender</h1>
          <p className="text-lg mb-8">
            Find government welfare and health schemes you may be eligible for by providing some basic information.
          </p>
          
          {!results ? (
            <SchemeForm onSubmit={handleFormSubmit} />
          ) : (
            <SchemeResults results={results} onReset={handleReset} />
          )}
        </div>
        <LegalDisclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default SchemeRecommender;
