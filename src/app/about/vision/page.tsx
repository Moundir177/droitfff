import { FaStar, FaGlobe, FaUsers, FaBalanceScale } from 'react-icons/fa';

export default function Vision() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            A society where all individuals enjoy equal rights, dignity, and opportunity, 
            and where civil society plays an active role in rights protection and promotion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaGlobe className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Long-term Vision</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We envision a society where human rights principles are fully integrated into 
              legal frameworks, institutional practices, and social norms. We work towards a 
              future where:
            </p>
            <ul className="space-y-3">
              {[
                "All individuals are aware of and can claim their rights",
                "Government policies and practices uphold international human rights standards",
                "Civil society has the capacity and resources to advocate effectively",
                "Vulnerable groups receive equal protection and opportunity"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaStar className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaUsers className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Core Values</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Our vision is guided by a set of core values that inform all aspects of our work:
            </p>
            <ul className="space-y-3">
              {[
                "Equality - We believe in the inherent dignity and equal rights of all people",
                "Inclusivity - We promote full participation of all groups in society",
                "Integrity - We operate with transparency and ethical responsibility",
                "Innovation - We seek creative solutions to complex rights challenges",
                "Collaboration - We build partnerships to amplify our collective impact"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaStar className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaBalanceScale className="text-blue-600 text-3xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-900">Strategic Priorities</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            To realize our vision, we focus on these key strategic priorities:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capacity Building</h3>
              <p className="text-gray-700">
                Strengthening the knowledge, skills, and resources of civil society 
                organizations and activists to effectively advocate for human rights.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Frameworks</h3>
              <p className="text-gray-700">
                Advocating for the development and implementation of legal frameworks 
                that protect and promote human rights for all.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Public Awareness</h3>
              <p className="text-gray-700">
                Raising awareness and understanding of human rights principles among 
                the general public and specific target groups.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring & Documentation</h3>
              <p className="text-gray-700">
                Monitoring and documenting human rights situations to inform advocacy 
                and policy development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/about" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Back to About Us
          </a>
        </div>
      </div>
    </div>
  );
} 