import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Percent, Calendar, Home } from 'lucide-react';

export function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('30');
  const [downPayment, setDownPayment] = useState('20');

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) * (1 - parseFloat(downPayment) / 100);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
    };
  };

  const results = calculateMortgage();

  return (
    <>
      <Helmet>
        <title>Mortgage Calculator - Clear Ocean Group</title>
        <meta name="description" content="Calculate your monthly mortgage payments and explore different financing options for your waterfront property." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mortgage Calculator</h1>
          <p className="text-xl text-gray-600 mb-8">Estimate your monthly mortgage payments and explore different financing options</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Price
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter home price"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Down Payment
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter down payment percentage"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter interest rate"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Term
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="30">30 Years</option>
                      <option value="15">15 Years</option>
                      <option value="10">10 Years</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            {/* Results */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Breakdown</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Payment</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${results.monthlyPayment.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="text-xl font-semibold text-gray-800">
                    ${results.totalPayment.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="text-xl font-semibold text-gray-800">
                    ${results.totalInterest.toFixed(2)}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Down Payment Amount</span>
                    <span className="text-xl font-semibold text-gray-800">
                      ${(parseFloat(loanAmount) * parseFloat(downPayment) / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our mortgage experts are here to help you find the best financing options for your waterfront property.</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <Home className="w-5 h-5 mr-2" />
                  Contact a Mortgage Expert
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Your Mortgage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Down Payment</h3>
                <p className="text-gray-600">A larger down payment can help you secure better interest rates and reduce your monthly payments.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Interest Rate</h3>
                <p className="text-gray-600">Your interest rate affects your monthly payment and the total amount you'll pay over the life of the loan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Loan Term</h3>
                <p className="text-gray-600">Shorter loan terms typically have lower interest rates but higher monthly payments.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Costs</h3>
                <p className="text-gray-600">Remember to consider property taxes, insurance, and other fees in your budget.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 