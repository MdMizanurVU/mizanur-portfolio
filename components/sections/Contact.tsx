"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Linkedin, 
  Github,
  Download,
  Clock,
  CheckCircle,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = {
  email: "rmanmizanur@gmail.com",
  phone: "+61 423 456 789", // Placeholder - update with real number if needed
  location: "Clayfield, Queensland, Australia",
  linkedin: "https://www.linkedin.com/in/md-mizanur-rahman-vu",
  github: "https://github.com/MdMizanurVU",
  availability: "Available for immediate start",
  timezone: "AEST (UTC+10)"
}

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM AEST" },
  { day: "Weekend", hours: "Available for urgent matters" }
]

const preferredRoles = [
  {
    title: "IT Support Specialist",
    description: "ServiceNow administration, incident management, end-user support"
  },
  {
    title: "Data Analytics Specialist", 
    description: "Business intelligence, reporting, data visualization, SQL development"
  },
  {
    title: "ITSM Consultant",
    description: "ServiceNow implementation, ITIL process optimization, workflow automation"
  },
  {
    title: "Junior Full-Stack Developer",
    description: "MERN stack development, web applications, API integration"
  }
]

const quickFacts = [
  {
    icon: CheckCircle,
    text: "Master of Applied IT (Nov 2025)"
  },
  {
    icon: CheckCircle,
    text: "5+ years IT support experience"
  },
  {
    icon: CheckCircle,
    text: "ServiceNow certified professional"
  },
  {
    icon: CheckCircle,
    text: "Available for immediate start"
  },
  {
    icon: CheckCircle,
    text: "Australian work authorization"
  }
]

export default function Contact() {
  const scrollToChat = () => {
    const chatWidget = document.getElementById('chat-widget')
    if (chatWidget) {
      chatWidget.scrollIntoView({ behavior: 'smooth' })
      // Trigger chat widget to open
      const chatButton = chatWidget.querySelector('button')
      if (chatButton) {
        chatButton.click()
      }
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to contribute to your team's success. Available for immediate start 
            with flexible arrangements for the right opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Primary Contact */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-gray-600 dark:text-gray-300">{contactInfo.email}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">LinkedIn</div>
                    <div className="text-gray-600 dark:text-gray-300">Professional Profile</div>
                  </div>
                </motion.a>

                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">GitHub</div>
                    <div className="text-gray-600 dark:text-gray-300">Code Portfolio</div>
                  </div>
                </motion.a>

                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-300">{contactInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Availability
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{contactInfo.availability}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">{contactInfo.timezone}</span>
                </div>

                <div className="mt-6 space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{schedule.day}</span>
                      <span className="text-gray-600 dark:text-gray-300">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Facts
              </h3>
              
              <div className="space-y-3">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <fact.icon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Preferred Roles & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Preferred Roles */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Target Opportunities
              </h3>
              
              <div className="space-y-4">
                {preferredRoles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {role.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {role.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Collaborate?
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm passionate about leveraging technology to solve business challenges. 
                Whether you need reliable IT support, data-driven insights, or system 
                optimization, I'm ready to contribute from day one.
              </p>

              <div className="space-y-4">
                <Button
                  onClick={scrollToChat}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start AI Conversation
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 py-4 px-8 rounded-xl"
                >
                  <a href={`mailto:${contactInfo.email}?subject=Job Opportunity&body=Hi Mizanur,%0A%0AI'm interested in discussing a potential opportunity with you.%0A%0ABest regards`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Direct Email
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 py-4 px-8 rounded-xl"
                >
                  <a
                    href="/resume.pdf" // You'll need to add your resume file
                    download="Mizanur_Rahman_Resume.pdf"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Response Commitment */}
            <div className="glass rounded-2xl p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                💼 My Commitment
              </h3>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Response within 24 hours during business days</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Flexible interview scheduling including evenings/weekends</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Available for immediate start with 2-week notice to current role</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>References and work samples available upon request</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}