import { useParams } from 'react-router-dom';

export default function DynamicSubPage() {
  const { category, slug } = useParams();
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="px-6 py-24 lg:px-20 max-w-[1400px] mx-auto min-h-[60vh]">
      <div className="mb-12">
        <p className="text-[#c5a044] font-bold uppercase tracking-widest text-sm mb-2">{categoryTitle}</p>
        <h1 className="text-5xl font-bold text-[#001f3f] leading-tight">{title}</h1>
        <div className="mt-6 h-1 w-20 bg-[#c5a044]" />
      </div>
      
      <div className="max-w-4xl text-gray-600 leading-relaxed space-y-6 text-lg">
        <p>
          Welcome to our <strong>{title}</strong> specialized practice within the {categoryTitle} group. 
          Northrop provides expert-led advisory and execution services for {title} needs 
          across global markets.
        </p>
        <p>
          Our team combines deep domain expertise with strategic insight to help you navigate 
          complex challenges, ensure regulatory compliance, and unlock sustainable growth in 
          today's evolving business landscape.
        </p>
      </div>
    </div>
  );
}
