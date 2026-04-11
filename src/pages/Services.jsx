import { Helmet } from 'react-helmet-async'

export default function Services() {
  return (
    <div className="px-6 py-20 lg:px-12 text-center">
      <Helmet>
        <title>Our Services | Specialized Financial & Management Consulting</title>
        <meta name="description" content="Dedicated expertise in risk management, financial reporting, and transaction advisory. Discover how Northrop helps businesses navigate complex financial landscapes." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <p className="text-lg text-gray-600">Explore our wide range of services.</p>
    </div>
  );
}
