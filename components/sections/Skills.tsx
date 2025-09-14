"use client"

import { motion } from "framer-motion"
import { 
  Database, 
  Server, 
  Monitor, 
  Code, 
  Cloud, 
  Wrench,
  BarChart3,
  Shield,
  Users,
  Cog,
  Brain,
  Lightbulb
} from "lucide-react"

const skillCategories = [
  {
    title: "IT Service Management",
    icon: Monitor,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "ServiceNow", level: 90, description: "ITSM, CSM, ITOM implementation" },
      { name: "ITIL Framework", level: 85, description: "Service lifecycle & best practices" },
      { name: "Incident Management", level: 95, description: "P1-P4 incident resolution" },
      { name: "Change Management", level: 80, description: "CAB processes & risk assessment" },
      { name: "Asset Management", level: 75, description: "CMDB & inventory tracking" }
    ]
  },
  {
    title: "Data Analytics & Visualization",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "SQL/BigQuery", level: 88, description: "Complex queries & data modeling" },
      { name: "Power BI", level: 85, description: "Interactive dashboards & reports" },
      { name: "Python Analytics", level: 80, description: "Pandas, NumPy, data processing" },
      { name: "Tableau", level: 75, description: "Data visualization & storytelling" },
      { name: "Excel/VBA", level: 90, description: "Advanced formulas & automation" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "AWS", level: 82, description: "EC2, S3, RDS, Lambda, CloudWatch" },
      { name: "Microsoft 365", level: 90, description: "Admin, Exchange, SharePoint" },
      { name: "Azure", level: 78, description: "Virtual machines, storage, networking" },
      { name: "VMware", level: 75, description: "vSphere, ESXi management" },
      { name: "Network Administration", level: 80, description: "TCP/IP, DNS, DHCP, VPN" }
    ]
  },
  {
    title: "Full-Stack Development",
    icon: Code,
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "React/Next.js", level: 85, description: "Modern web applications" },
      { name: "Node.js/Express", level: 80, description: "Backend APIs & services" },
      { name: "JavaScript/TypeScript", level: 88, description: "ES6+, async programming" },
      { name: "MongoDB/PostgreSQL", level: 82, description: "Database design & optimization" },
      { name: "Git/CI/CD", level: 85, description: "Version control & deployment" }
    ]
  },
  {
    title: "Leadership & Project Management",
    icon: Users,
    color: "from-pink-500 to-pink-600",
    skills: [
      { name: "Agile/Scrum", level: 85, description: "Sprint planning & retrospectives" },
      { name: "Team Leadership", level: 88, description: "Cross-functional team management" },
      { name: "Stakeholder Management", level: 90, description: "Communication & alignment" },
      { name: "Process Improvement", level: 92, description: "Operational efficiency gains" },
      { name: "Risk Management", level: 80, description: "Risk assessment & mitigation" }
    ]
  },
  {
    title: "Problem Solving & Innovation",
    icon: Brain,
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "Root Cause Analysis", level: 95, description: "5-why, fishbone analysis" },
      { name: "System Integration", level: 85, description: "API design & data flow" },
      { name: "Automation Development", level: 88, description: "Workflow optimization" },
      { name: "Technical Documentation", level: 90, description: "Clear, actionable guides" },
      { name: "Continuous Learning", level: 95, description: "Staying current with technology" }
    ]
  }
]

const certifications = [
  "ServiceNow Certified System Administrator (CSA)",
  "AWS Cloud Practitioner (In Progress)",
  "ITIL Foundation v4",
  "Microsoft 365 Certified: Fundamentals",
  "Agile Project Management Certificate"
]

const keyAchievements = [
  {
    icon: Cog,
    title: "Process Optimization",
    value: "40%",
    description: "Reduced incident resolution time through automated workflows"
  },
  {
    icon: Users,
    title: "Team Efficiency",
    value: "25%",
    description: "Improved team productivity via training and tool optimization"
  },
  {
    icon: Shield,
    title: "System Reliability",
    value: "99.8%",
    description: "Maintained high system uptime through proactive monitoring"
  },
  {
    icon: Lightbulb,
    title: "Innovation Impact",
    value: "15+",
    description: "Process improvements implemented across multiple departments"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical and leadership capabilities developed through 5+ years 
            of hands-on experience in IT operations, analytics, and system implementation.
          </p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {achievement.title}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * skillIndex }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + 0.1 * skillIndex }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Certifications
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {cert}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why These Skills Matter
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My diverse skill set allows me to bridge the gap between technical implementation 
              and business outcomes. I combine deep technical expertise in ITSM and analytics 
              with strong leadership capabilities to deliver solutions that drive measurable 
              organizational improvements. Whether it's optimizing ServiceNow workflows, 
              building data pipelines, or leading cross-functional teams, I focus on creating 
              sustainable value through technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}