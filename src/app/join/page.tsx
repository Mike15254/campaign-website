'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { CheckCircle, Users, Star, Shield, ArrowRight, Mail } from 'lucide-react';

const JoinUsPage = () => {
  const { t } = useTranslation();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interests: []
  });

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'join.benefits.community.title',
      description: 'join.benefits.community.description'
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: 'join.benefits.impact.title',
      description: 'join.benefits.impact.description'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'join.benefits.leadership.title',
      description: 'join.benefits.leadership.description'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      // Submit form
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/join-banner.jpg"
            alt="Join Us Banner"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t('join.title')}
            </h1>
            <p className="text-lg md:text-xl text-green-100">
              {t('join.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                  transition-shadow text-center"
              >
                <div className="inline-block p-3 bg-green-50 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(benefit.title)}
                </h3>
                <p className="text-gray-600">
                  {t(benefit.description)}
                </p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center ${
                      step < formStep ? 'text-green-600' : 
                      step === formStep ? 'text-blue-600' : 'text-gray-300'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                      border-2 ${
                        step < formStep ? 'border-green-600' :
                        step === formStep ? 'border-blue-600' : 'border-gray-300'
                      }`}
                    >
                      {step < formStep ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 3 && (
                      <div className={`w-full h-1 mx-2 ${
                        step < formStep ? 'bg-green-600' :
                        'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {formStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('join.form.first_name')}
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 
                          focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('join.form.last_name')}
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 
                          focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('join.form.email')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 
                        focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('join.form.phone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 
                        focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Mail className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">
                      {t('join.form.confirmation.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('join.form.confirmation.message')}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 
                    text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {formStep === 3 ? t('join.form.finish') : t('join.form.next')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;