"use client"

import { motion } from "framer-motion"

export default function About() {
  const skills = [
    "ServiceNow ITSM",
    "SQL/BigQuery", 
    "AWS Cloud",
    "MERN Stack",
    "Data Analytics",
    "Process Improvement",
    "IT Support",
    "Project Management"
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Journey
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently pursuing my <strong>Master of Applied Information Technology</strong> (graduating Nov 2025) 
                  while building on <strong>5+ years of hands-on experience</strong> in IT support, analytics, and program management.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My expertise spans from <strong>Level 1 IT support</strong> at Victoria University to <strong>program management</strong> 
                  at ShopUp (REDX), where I designed data models, built KPI dashboards, and led cost optimization initiatives 
                  that delivered measurable results.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I specialize in bridging the gap between technical implementation and business outcomes, 
                  combining my troubleshooting expertise with data-driven decision making to optimize operations 
                  and reduce downtime.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Maintained 98%+ resolution accuracy in IT support role</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Achieved 3% improvement in delivery conversion (60%→63%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Led initiative reducing cost per order by ~15%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Cleared {'>'}70% stagnant orders with BigQuery tracking system</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Core Skills */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Core Competencies
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-lg text-center"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Approach
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Data-Driven Solutions:</strong> Every decision backed by analytics and measurable outcomes
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>End-User Focus:</strong> Technical solutions designed with user experience in mind
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Continuous Improvement:</strong> Always seeking ways to optimize processes and reduce inefficiencies
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Bridge Builder:</strong> Connecting technical implementation with business objectives
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}