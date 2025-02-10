import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-center">
      {/* Navigation */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Alpha</h1>
        <div>
          <a href="#" className="px-4 text-gray-700">Home</a>
          <a href="#" className="px-4 text-gray-700">Features</a>
          <a href="#" className="px-4 text-gray-700">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 bg-blue-500 text-white">
        <h2 className="text-4xl font-bold">Experience Real-Life Boardroom Interviews</h2>
        <p className="mt-4 text-lg">Simulate and prepare for real interview scenarios.</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-500 font-semibold rounded">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <h3 className="text-3xl font-bold text-gray-800">Key Features</h3>
        <div className="flex justify-center mt-6">
          <div className="p-4 bg-white shadow-md rounded-lg mx-2">
            <h4 className="text-xl font-bold">AI-powered Interviews</h4>
            <p>Experience realistic simulations with AI feedback.</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg mx-2">
            <h4 className="text-xl font-bold">Real-time Analysis</h4>
            <p>Receive instant feedback on your performance.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white">
        <p>&copy; 2025 Alpha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
