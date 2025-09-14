"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const scrollToChat = () => {
    const chatElement = document.getElementById('ai-chat')
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
          >
            <Image
              src="/profile.jpg"
              alt="Md. Mizanur Rahman - IT Professional"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">MR</div>';
                }
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="gradient-text">Md. Mizanur Rahman</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto"
          >
            Aspiring IT Professional | Master of Applied Information Technology Candidate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-2"
          >
            📍 Clayfield, Queensland, Australia
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Master of Applied IT (Nov 2025) with <strong>5+ years in IT support, analytics, and program management</strong>. 
              Skilled in ITSM (ServiceNow), SQL/BigQuery, AWS, and MERN full-stack development. 
              Strong record of delivering measurable operational improvements.
            </p>
            
            <div className="glass rounded-2xl p-6 mb-8">
              <p className="text-lg text-gray-800 dark:text-gray-200 italic">
                "I deliver reliable IT support and build data-driven systems that optimize operations. 
                My work combines end-user troubleshooting, analytics, and automation to reduce downtime 
                and improve decision-making."
              </p>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToChat}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with My AI
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 py-4 px-8 rounded-xl"
            >
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center space-x-6"
          >
            <Link
              href="https://www.linkedin.com/in/md-mizanur-rahman-vu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-blue-600 hover:text-blue-700"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/MdMizanurVU"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:rmanmizanur@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-red-600 hover:text-red-700"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}