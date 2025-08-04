"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Eye, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ResumeSection() {
  const { toast } = useToast()

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your actual resume file to the public folder
    link.download = "John_Doe_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "Resume Downloaded!",
      description: "Thank you for downloading my resume. I look forward to hearing from you!",
    })
  }

  const handleViewResume = () => {
    // Open resume in new tab
    window.open("/resume.pdf", "_blank")
  }

  const handleShareResume = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "John Doe - Resume",
          text: "Check out John Doe's resume - Full Stack Developer",
          url: window.location.origin + "/resume.pdf",
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.origin + "/resume.pdf")
      toast({
        title: "Link Copied!",
        description: "Resume link has been copied to your clipboard.",
      })
    }
  }

  const resumeStats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Client Satisfaction", value: "100%" },
  ]

  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Download Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a comprehensive overview of my skills, experience, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-32 mx-auto mb-4 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-white/10"
                >
                  <FileText className="w-12 h-12 text-blue-400" />
                </motion.div>
                <CardTitle className="text-2xl mb-2">Professional Resume</CardTitle>
                <p className="text-muted-foreground">
                  A detailed overview of my professional journey, skills, and accomplishments
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {resumeStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 rounded-lg bg-background/50"
                    >
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Download Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
              <p className="text-muted-foreground mb-6">
                My resume contains detailed information about my professional experience, technical skills, education,
                and notable achievements. It's regularly updated to reflect my latest projects and certifications.
              </p>
            </div>

            <motion.div
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Button
                  size="lg"
                  onClick={handleDownloadResume}
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume (PDF)
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleViewResume}
                  className="w-full cursor-pointer bg-transparent"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Online
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Button variant="ghost" size="lg" onClick={handleShareResume} className="w-full cursor-pointer">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-50/10 to-purple-50/10 border border-blue-200/20"
            >
              <p className="text-sm text-muted-foreground text-center">
                📄 Last updated: December 2024 | 📧 Available for new opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
