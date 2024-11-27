import { motion } from 'framer-motion';

const ProfessionalExperience = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="bg-white p-6 rounded-lg shadow-md mb-8"
  >
    <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
    <div className="mb-4">
      <h3 className="text-2xl font-semibold">BrainSAIT | Digital Healthcare Startup</h3>
      <p className="italic">Founder & Chief Innovator | Riyadh, Saudi Arabia | 2019 - Present</p>
      <ul className="list-disc list-inside mt-4">
        <li>Established and managed BrainSAIT, focusing on innovative healthcare technology.</li>
        <li>Led AI-based product development for training healthcare professionals.</li>
        <li>Created digital products like PyBrain and PyHeart to automate data workflows.</li>
      </ul>
    </div>
  </motion.section>
);

export default ProfessionalExperience;
