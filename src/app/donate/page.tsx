'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { Heart, ArrowRight, Shield, CreditCard, Wallet } from 'lucide-react';

const DonatePage = () => {
  const { t } = useTranslation();

  const donationOptions = [
    {
      amount: 1000,
      impact: 'donation.impacts.small',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      amount: 5000,
      impact: 'donation.impacts.medium',
      color: 'bg-green-50 border-green-200',
      popular: true
    },
    {
      amount: 10000,
      impact: 'donation.impacts.large',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const paymentMethods = [
    { icon: <CreditCard className="w-6 h-6" />, name: 'M-Pesa' },
    { icon: <Wallet className="w-6 h-6" />, name: 'Bank Transfer' },
    { icon: <CreditCard className="w-6 h-6" />, name: 'Card Payment' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/rally.jpeg"
            alt="Donation Banner"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t('donation.title')}
            </h1>
            <p className="text-lg md:text-xl text-green-100">
              {t('donation.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Donation Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {donationOptions.map((option, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 border-2 transition-all ${option.color}
                  ${option.popular ? 'transform md:-translate-y-4' : ''}`}
              >
                {option.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                    bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                    {t('donation.popular')}
                  </span>
                )}
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">
                    KES {option.amount.toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-600 text-center mb-6">
                  {t(option.impact)}
                </p>
                <button className="w-full py-3 px-4 rounded-lg bg-green-600 text-white
                  hover:bg-green-700 transition-colors">
                  {t('donation.donate_now')}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-light mb-6 text-center">
              {t('donation.payment_methods')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg
                    border-2 border-gray-200 hover:border-green-500 transition-colors"
                >
                  {method.icon}
                  <span>{method.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-600">{t('donation.secure_payment')}</span>
            </div>
            <p className="text-sm text-gray-500">{t('donation.transparency_note')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;