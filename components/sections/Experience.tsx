"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Trophy, Zap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Victoria University",
      position: "IT Helpdesk",
      duration: "July 2024 - Present",
      location: "Melbourne, Australia", 
      description: "Provide Level 1 IT support for students/staff: password resets, MFA, Microsoft 365 troubleshooting, LMS (VU Collaborate) issues, Zoom, classroom AV equipment.",
      achievements: [
        "Maintained 98%+ resolution accuracy (tickets not reopened within 7 days & QA checks)",
        "FCR rate consistently 65–70%, above team average (~60%)",
        "Handled 15–20 tickets per shift, contributing to weekly volume of 80–120 incidents across team",
        "Positive feedback from lecturers for rapid crisis resolution (recorded in ServiceNow)"
      ],
      technologies: [
        "Microsoft 365",
        "ServiceNow Incident Management", 
        "VU Collaborate LMS",
        "Zoom",
        "Active Directory"
      ],
      impact: "Reduced mean time to resolution, minimized class downtime, improved KB coverage for recurring issues",
      examples: [
        {
          title: "Live Classroom Outage",
          situation: "Lecture theatre projector outage with 200+ students waiting",
          result: "Lecture resumed within 8 minutes; lecturer praised responsiveness"
        },
        {
          title: "Complex Outlook Authentication Loop", 
          situation: "Outlook kept prompting for credentials; Teams/Word unaffected",
          result: "Restored mailbox connectivity in 40 minutes and added KB article"
        }
      ]
    },
    {
      company: "ShopUp (REDX)",
      position: "Program Manager",
      duration: "Sep 2019 - Feb 2023",
      location: "Dhaka, Bangladesh",
      description: "Managed hub-level analytics, backlog resolution automation, and cost optimization initiatives.",
      achievements: [
        "Designed data model for 102-hub KPI reporting including delivery conversion, SLA breaches, backlog counts",
        "Achieved 3% improvement in delivery conversion (60%→63%) via dashboard-driven interventions", 
        "Cleared >70% stagnant orders with BigQuery backlog tracking system",
        "Led Mudi Shop initiative reducing cost per order by ~15% in pilot zones"
      ],
      technologies: [
        "Google BigQuery",
        "Power BI",
        "Google Data Studio",
        "PostgreSQL/MySQL",
        "Python ETL"
      ],
      impact: "Improved operational visibility, increased delivery success, and reduced last-mile cost through data-driven initiatives",
      examples: [
        {
          title: "102-Hub KPI Dashboard",
          situation: "Need for real-time operational visibility across delivery network",
          result: "Daily hub visibility & alerts improved decision-making speed"
        },
        {
          title: "Backlog Tracking System",
          situation: "Orders with no status change >48h causing capital lock",
          result: "Resolved >70% of backlog and reduced capital lock"
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            5+ years of hands-on experience delivering measurable improvements in IT support, analytics, and program management
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 lg:p-12"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                  Key Achievements
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-500" />
                  Technologies & Tools
                </h5>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Business Impact
                </h5>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.impact}
                </p>

                {/* Examples */}
                {exp.examples && exp.examples.length > 0 && (
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {exp.examples.map((example, i) => (
                      <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {example.title}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {example.situation}
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Result: {example.result}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}