"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2,
  RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    content: `👋 Hi! I'm Mizanur's AI assistant. I can help you learn about his:

• **Professional Experience** - 5+ years in IT support & analytics
• **Technical Skills** - ServiceNow, SQL, AWS, MERN stack
• **Education** - Master of Applied IT (Nov 2025)
• **Career Goals** - Target roles and availability
• **Project Examples** - Real work achievements and impact

What would you like to know about Mizanur?`,
    role: "assistant",
    timestamp: new Date()
  }
]

const suggestedQuestions = [
  "What's your experience with ServiceNow?",
  "Tell me about your analytics projects",
  "What technologies do you work with?",
  "Are you available for new opportunities?",
  "What's your educational background?",
  "Show me your key achievements"
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputValue),
        role: "assistant",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes("servicenow") || lowerInput.includes("itsm")) {
      return `🔧 **ServiceNow Expertise:**

I have extensive experience with ServiceNow, including:

• **ITSM Implementation** - Incident, Problem, Change Management modules
• **Workflow Automation** - Created custom workflows reducing resolution time by 40%
• **Integration Projects** - Connected ServiceNow with external systems via REST APIs
• **User Training** - Trained 50+ end users on platform functionality
• **Reporting & Analytics** - Built dashboards for performance tracking

**Certification:** ServiceNow Certified System Administrator (CSA)

At Victoria University, I managed the ServiceNow platform for 2,000+ users, maintaining 99.8% uptime and significantly improving our IT service delivery process.`
    }
    
    if (lowerInput.includes("analytics") || lowerInput.includes("data") || lowerInput.includes("sql")) {
      return `📊 **Data Analytics & SQL Expertise:**

My analytics experience includes:

**Technical Skills:**
• **SQL/BigQuery** - Complex queries, data modeling, performance optimization
• **Power BI** - Interactive dashboards, automated reporting
• **Python** - Pandas, NumPy for data processing and analysis
• **Excel/VBA** - Advanced formulas, pivot tables, automation scripts

**Real Projects:**
• **ShopUp Analytics** - Reduced logistics costs by 15% through route optimization
• **University Reporting** - Automated weekly reports saving 10+ hours/week
• **Performance Dashboards** - Real-time metrics for operations teams

I combine technical SQL skills with business understanding to deliver actionable insights that drive decision-making.`
    }
    
    if (lowerInput.includes("technology") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
      return `💻 **Technology Stack:**

**ITSM & Operations:**
• ServiceNow (CSA certified)
• ITIL Framework v4
• AWS (EC2, S3, RDS, Lambda)
• Microsoft 365 Administration

**Development:**
• **Frontend:** React, Next.js, TypeScript, Tailwind CSS
• **Backend:** Node.js, Express, Python
• **Databases:** PostgreSQL, MongoDB, SQL Server
• **Tools:** Git, Docker, VS Code, Postman

**Analytics & Automation:**
• SQL/BigQuery, Power BI, Tableau
• Python (Pandas, NumPy)
• VBA/Excel automation
• REST APIs & system integration

I'm always learning new technologies and staying current with industry trends!`
    }
    
    if (lowerInput.includes("available") || lowerInput.includes("opportunity") || lowerInput.includes("job")) {
      return `🚀 **Availability & Opportunities:**

**Current Status:** Available for immediate start!

**Target Roles:**
• **IT Support Specialist** - ServiceNow admin, incident management
• **Data Analytics Specialist** - BI, reporting, SQL development  
• **ITSM Consultant** - ServiceNow implementation & optimization
• **Junior Full-Stack Developer** - MERN stack applications

**Key Details:**
• ✅ Australian work authorization
• ✅ 2-week notice to current role
• ✅ Flexible with arrangements for the right opportunity
• ✅ Located in Queensland, open to remote/hybrid
• ✅ Graduating Master of Applied IT in November 2025

I'm passionate about roles where I can combine technical skills with business impact. Let's discuss how I can contribute to your team!`
    }
    
    if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("university")) {
      return `🎓 **Education & Continuous Learning:**

**Current:**
• **Master of Applied Information Technology**
  - Victoria University (Nov 2025)
  - Focus: Advanced IT systems, data analytics, project management

**Professional Development:**
• ServiceNow Certified System Administrator (CSA)
• ITIL Foundation v4
• AWS Cloud Practitioner (In Progress)
• Microsoft 365 Fundamentals
• Agile Project Management Certificate

**Academic Projects:**
• Data Analytics capstone project using Python & SQL
• ServiceNow implementation for university operations
• Full-stack web application development
• Cloud migration planning and execution

I believe in continuous learning and staying current with technology trends. Currently exploring AI/ML applications in IT operations!`
    }
    
    if (lowerInput.includes("achievement") || lowerInput.includes("success") || lowerInput.includes("impact")) {
      return `🏆 **Key Achievements & Impact:**

**Operational Excellence:**
• **40% reduction** in incident resolution time through workflow automation
• **99.8% system uptime** maintained across critical infrastructure
• **25% team efficiency improvement** via training and tool optimization

**Cost Savings & Optimization:**
• **15% logistics cost reduction** at ShopUp through route optimization
• **10+ hours/week saved** through automated reporting systems
• **30% faster onboarding** for new users via streamlined processes

**Leadership & Innovation:**
• Led cross-functional teams of 8+ members
• Implemented 15+ process improvements across departments
• Trained 50+ end users on new systems and procedures
• Managed IT infrastructure serving 2,000+ users

**Recognition:**
• Consistently exceeded performance targets
• Praised for problem-solving skills and technical expertise
• Successfully delivered projects on time and under budget

These achievements demonstrate my focus on delivering measurable business value through technology.`
    }

    // Default response
    return `Thanks for your question! I'm here to help you learn about Mizanur's professional background. 

Here are some topics I can discuss in detail:

🔧 **Technical Expertise:** ServiceNow, SQL, analytics, cloud platforms
💼 **Work Experience:** IT support, data analytics, project management  
🎓 **Education:** Master of Applied IT, certifications
🚀 **Career Goals:** Target roles and availability
📊 **Project Examples:** Real achievements and business impact

Feel free to ask about any of these areas, or try one of the suggested questions below!`
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question)
  }

  const resetConversation = () => {
    setMessages(initialMessages)
  }

  return (
    <>
      {/* Chat Widget */}
      <div id="chat-widget" className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                height: isMinimized ? "60px" : "600px",
                width: isMinimized ? "300px" : "400px"
              }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mizanur's AI Assistant</h3>
                      <p className="text-xs opacity-90">Ask me anything!</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setIsMinimized(!isMinimized)}
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      onClick={resetConversation}
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex space-x-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user" 
                              ? "bg-blue-500 text-white" 
                              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          }`}>
                            {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          <div className={`rounded-2xl p-3 ${
                            message.role === "user"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                          }`}>
                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex space-x-2 max-w-[80%]">
                          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center">
                            <Bot className="h-4 w-4" />
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested Questions */}
                  {messages.length === 1 && (
                    <div className="px-4 pb-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</div>
                      <div className="flex flex-wrap gap-1">
                        {suggestedQuestions.slice(0, 3).map((question, index) => (
                          <Button
                            key={index}
                            onClick={() => handleSuggestedQuestion(question)}
                            size="sm"
                            variant="outline"
                            className="text-xs h-6 px-2 border-gray-300 dark:border-gray-600"
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Ask about Mizanur's experience..."
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white text-sm"
                      />
                      <Button
                        onClick={handleSendMessage}
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        disabled={!inputValue.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${isOpen ? "hidden" : "block"}`}
        >
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </motion.div>
      </div>
    </>
  )
}