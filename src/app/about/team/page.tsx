import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Samira Benali',
    position: 'Executive Director',
    bio: 'With over 15 years of experience in human rights advocacy, Samira leads our organization with vision and determination. She previously worked with international human rights organizations across North Africa.',
    image: '/images/team/person1.jpg',
  },
  {
    id: 2,
    name: 'Karim Meziane',
    position: 'Programs Director',
    bio: 'Karim oversees the development and implementation of our training and advocacy programs. He brings expertise in capacity building and civil society strengthening.',
    image: '/images/team/person2.jpg',
  },
  {
    id: 3,
    name: 'Amina Rahal',
    position: 'Legal Advisor',
    bio: 'Specializing in international human rights law, Amina provides legal expertise for our advocacy initiatives and training programs. She has extensive experience in legal reform advocacy.',
    image: '/images/team/person3.jpg',
  },
  {
    id: 4,
    name: 'Omar Bouaziz',
    position: 'Communications Manager',
    bio: 'Omar leads our communications strategy, raising awareness about our work and human rights issues. He has a background in journalism and digital media campaigning.',
    image: '/images/team/person4.jpg',
  },
  {
    id: 5,
    name: 'Leila Hadj',
    position: 'Training Coordinator',
    bio: 'Leila develops and facilitates our capacity-building training programs for civil society organizations. She specializes in participatory learning methodologies.',
    image: '/images/team/person5.jpg',
  },
  {
    id: 6,
    name: 'Youssef Taleb',
    position: 'Research & Documentation Officer',
    bio: 'Youssef manages our research initiatives and documentation of human rights situations. He previously worked in academic research focused on civil society development.',
    image: '/images/team/person6.jpg',
  },
];

const advisors = [
  {
    id: 1,
    name: 'Prof. Nadia Kassab',
    position: 'Board Chair',
    bio: 'Professor of International Law at Algiers University and published author on human rights frameworks in North Africa.',
    image: '/images/team/advisor1.jpg',
  },
  {
    id: 2,
    name: 'Dr. Mahmoud Cherif',
    position: 'Board Member',
    bio: 'Former UN special rapporteur with extensive experience in international human rights mechanisms.',
    image: '/images/team/advisor2.jpg',
  },
  {
    id: 3,
    name: 'Fatima Belkacem',
    position: 'Board Member',
    bio: 'Prominent civil society activist with 20+ years of experience in community organizing and women\'s rights advocacy.',
    image: '/images/team/advisor3.jpg',
  },
];

export default function Team() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            Our dedicated team of professionals brings diverse expertise in human rights, law, 
            program management, communication, and training to advance our mission.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Staff Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <span className="text-gray-600">{member.name}'s Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Board of Advisors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <span className="text-gray-600">{advisor.name}'s Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{advisor.position}</p>
                  <p className="text-gray-700">{advisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            We are always looking for passionate individuals to join our mission. 
            Check our current opportunities or send us your CV.
          </p>
          <div className="text-center">
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mr-4"
            >
              Current Openings
            </a>
            <a 
              href="#" 
              className="inline-block bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </a>
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