"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Settings,
  Save,
  RefreshCw,
  Eye,
  Edit3,
  Database,
  BarChart3,
  Shield,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProfileData {
  personalInfo: {
    name: string
    title: string
    location: string
    email: string
    phone: string
    linkedin: string
    github: string
    availability: string
  }
  summary: {
    experience: string
    valueProposition: string
    keyStrengths: string[]
  }
  skills: {
    technical: string[]
    certifications: string[]
    tools: string[]
  }
  experience: {
    currentRole: string
    previousRoles: string[]
    achievements: string[]
  }
}

const initialData: ProfileData = {
  personalInfo: {
    name: "Md. Mizanur Rahman",
    title: "IT Professional & Data Analytics Specialist",
    location: "Clayfield, Queensland, Australia",
    email: "rmanmizanur@gmail.com",
    phone: "+61 423 456 789",
    linkedin: "https://www.linkedin.com/in/md-mizanur-rahman-vu",
    github: "https://github.com/MdMizanurVU",
    availability: "Available for immediate start"
  },
  summary: {
    experience: "5+ years in IT support, analytics, and program management",
    valueProposition: "I deliver reliable IT support and build data-driven systems that optimize operations. My work combines end-user troubleshooting, analytics, and automation to reduce downtime and improve decision-making.",
    keyStrengths: [
      "ServiceNow ITSM Implementation",
      "Data Analytics & Visualization", 
      "Cross-functional Team Leadership",
      "Process Optimization",
      "Full-Stack Development",
      "Cloud Infrastructure Management"
    ]
  },
  skills: {
    technical: [
      "ServiceNow (CSA Certified)",
      "SQL/BigQuery",
      "Power BI & Tableau",
      "Python Analytics",
      "AWS Cloud Services",
      "React/Next.js",
      "ITIL Framework v4"
    ],
    certifications: [
      "ServiceNow Certified System Administrator (CSA)",
      "AWS Cloud Practitioner (In Progress)",
      "ITIL Foundation v4",
      "Microsoft 365 Certified: Fundamentals"
    ],
    tools: [
      "ServiceNow Platform",
      "Microsoft 365 Admin",
      "AWS Console",
      "Power BI Desktop",
      "VS Code",
      "Git/GitHub"
    ]
  },
  experience: {
    currentRole: "IT Support Specialist - Victoria University",
    previousRoles: [
      "Assistant Manager, Operations - ShopUp (REDX)",
      "Process Improvement Analyst - Various Projects"
    ],
    achievements: [
      "40% reduction in incident resolution time",
      "99.8% system uptime maintenance",
      "25% team efficiency improvement",
      "15% logistics cost reduction at ShopUp"
    ]
  }
}

const adminSections = [
  { id: "overview", name: "Overview", icon: BarChart3 },
  { id: "personal", name: "Personal Info", icon: User },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "skills", name: "Skills", icon: Code },
  { id: "settings", name: "Settings", icon: Settings }
]

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [profileData, setProfileData] = useState<ProfileData>(initialData)
  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  useEffect(() => {
    // Load data from localStorage if available
    const savedData = localStorage.getItem('portfolioData')
    if (savedData) {
      try {
        setProfileData(JSON.parse(savedData))
        setLastSaved(new Date(localStorage.getItem('portfolioLastSaved') || Date.now()))
      } catch (error) {
        console.error('Failed to load saved data:', error)
      }
    }
  }, [])

  const handleSave = async () => {
    setIsSaving(true)
    
    // Simulate API save delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Save to localStorage (in a real app, this would be an API call)
    localStorage.setItem('portfolioData', JSON.stringify(profileData))
    localStorage.setItem('portfolioLastSaved', new Date().toISOString())
    
    setHasChanges(false)
    setLastSaved(new Date())
    setIsSaving(false)
  }

  const updateProfileData = (section: keyof ProfileData, field: string, value: any) => {
    setProfileData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
    setHasChanges(true)
  }

  const updateArrayField = (section: keyof ProfileData, field: string, index: number, value: string) => {
    setProfileData(prev => {
      const sectionData = prev[section] as any
      const updatedArray = [...sectionData[field]]
      updatedArray[index] = value
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: updatedArray
        }
      }
    })
    setHasChanges(true)
  }

  const addArrayItem = (section: keyof ProfileData, field: string) => {
    setProfileData(prev => {
      const sectionData = prev[section] as any
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: [...sectionData[field], ""]
        }
      }
    })
    setHasChanges(true)
  }

  const removeArrayItem = (section: keyof ProfileData, field: string, index: number) => {
    setProfileData(prev => {
      const sectionData = prev[section] as any
      const updatedArray = sectionData[field].filter((_: any, i: number) => i !== index)
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: updatedArray
        }
      }
    })
    setHasChanges(true)
  }

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="h-8 w-8 text-blue-500" />
            <h3 className="text-lg font-semibold">Profile</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">Complete</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">All fields filled</p>
        </div>
        
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="h-8 w-8 text-purple-500" />
            <h3 className="text-lg font-semibold">Skills</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600">{profileData.skills.technical.length}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Technical skills</p>
        </div>
        
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-green-500" />
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">{profileData.skills.certifications.length}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active certifications</p>
        </div>
        
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="h-8 w-8 text-orange-500" />
            <h3 className="text-lg font-semibold">Last Updated</h3>
          </div>
          <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {lastSaved ? lastSaved.toLocaleDateString() : 'Never'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Portfolio sync</p>
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Portfolio website deployed successfully</span>
            <span className="text-sm text-gray-500 ml-auto">Today</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>AI chat assistant activated</span>
            <span className="text-sm text-gray-500 ml-auto">Today</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Skills section updated</span>
            <span className="text-sm text-gray-500 ml-auto">Today</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={profileData.personalInfo.name}
              onChange={(e) => updateProfileData('personalInfo', 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Professional Title</label>
            <input
              type="text"
              value={profileData.personalInfo.title}
              onChange={(e) => updateProfileData('personalInfo', 'title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={profileData.personalInfo.location}
              onChange={(e) => updateProfileData('personalInfo', 'location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={profileData.personalInfo.email}
              onChange={(e) => updateProfileData('personalInfo', 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
            <input
              type="url"
              value={profileData.personalInfo.linkedin}
              onChange={(e) => updateProfileData('personalInfo', 'linkedin', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">GitHub URL</label>
            <input
              type="url"
              value={profileData.personalInfo.github}
              onChange={(e) => updateProfileData('personalInfo', 'github', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-bold mb-6">Professional Summary</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Experience Summary</label>
            <input
              type="text"
              value={profileData.summary.experience}
              onChange={(e) => updateProfileData('summary', 'experience', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Value Proposition</label>
            <textarea
              value={profileData.summary.valueProposition}
              onChange={(e) => updateProfileData('summary', 'valueProposition', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio Admin
              </h1>
              {hasChanges && (
                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Unsaved changes
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.open('/', '_blank')}
                variant="outline"
                size="sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview Site
              </Button>
              
              <Button
                onClick={handleSave}
                disabled={!hasChanges || isSaving}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSaving ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {adminSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span className="font-medium">{section.name}</span>
                </motion.button>
              ))}
            </nav>

            {lastSaved && (
              <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-300">
                  Last saved: {lastSaved.toLocaleString()}
                </p>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "overview" && renderOverview()}
              {activeSection === "personal" && renderPersonalInfo()}
              {activeSection === "experience" && (
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Experience Management</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experience management features coming soon...
                  </p>
                </div>
              )}
              {activeSection === "skills" && (
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Skills Management</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Skills management features coming soon...
                  </p>
                </div>
              )}
              {activeSection === "settings" && (
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Settings</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Settings panel coming soon...
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}