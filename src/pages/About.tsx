import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, Users, Award, Heart } from 'lucide-react';

const VALUES = [
  {
    icon: Home,
    title: "Excellence in Service",
    description: "We provide exceptional service to our clients, ensuring a smooth and successful real estate experience."
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your needs and goals are our top priority. We're committed to helping you achieve your real estate dreams."
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Our team brings years of experience and deep market knowledge to every transaction."
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "We're proud to be part of the South Florida community and give back to the areas we serve."
  }
];

const TEAM_MEMBERS = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "With over 20 years of experience in luxury real estate, John leads our team with vision and expertise."
  },
  {
    name: "Sarah Johnson",
    role: "Senior Agent",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    bio: "Specializing in waterfront properties, Sarah has helped countless clients find their dream homes."
  },
  {
    name: "Michael Chen",
    role: "Property Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Michael's attention to detail and market knowledge ensures the best outcomes for our clients."
  }
];

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Clear Ocean Group</title>
        <meta name="description" content="Learn about Clear Ocean Group's commitment to excellence in luxury waterfront real estate." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Clear Ocean Group</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to providing exceptional service in luxury waterfront real estate, helping our clients find their perfect properties along Florida's beautiful coastlines.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Founded in 2010, Clear Ocean Group has grown to become one of South Florida's premier luxury real estate firms. Our journey began with a simple mission: to provide exceptional service in the waterfront real estate market.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've built a reputation for excellence, integrity, and client satisfaction. Our team of experienced agents brings deep market knowledge and a passion for helping clients achieve their real estate goals.
            </p>
            <p className="text-gray-600">
              Today, we continue to expand our presence across South Florida's most prestigious waterfront communities, offering our clients unparalleled expertise and service.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-[100%]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">We're always looking for talented individuals to join our growing team.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            View Career Opportunities
          </button>
        </div>
      </div>
    </>
  );
} 