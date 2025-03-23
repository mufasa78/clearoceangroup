import React from 'react';
import { Helmet } from 'react-helmet-async';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 5 Luxury Waterfront Communities in Miami",
    excerpt: "Discover the most exclusive waterfront neighborhoods that Miami has to offer...",
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    category: "Neighborhoods"
  },
  {
    id: 2,
    title: "Investment Opportunities in Fort Lauderdale's Luxury Market",
    excerpt: "Analysis of current investment trends and opportunities in Fort Lauderdale...",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80",
    date: "March 10, 2024",
    category: "Investment"
  },
  {
    id: 3,
    title: "The Rise of Sustainable Luxury Real Estate",
    excerpt: "How eco-friendly features are becoming standard in luxury properties...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    date: "March 5, 2024",
    category: "Trends"
  }
];

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - Clear Ocean Group</title>
        <meta name="description" content="Stay informed with the latest insights, trends, and news about South Florida's luxury real estate market." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Real Estate Insights</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pb-[60%]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Subscribe to Our Newsletter</h2>
          <form className="max-w-xl">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}