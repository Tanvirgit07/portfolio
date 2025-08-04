// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

// export function ContactSection() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     toast({
//       title: "Message sent!",
//       description: "Thank you for your message. I'll get back to you soon.",
//     })

//     setIsSubmitting(false)
//     ;(e.target as HTMLFormElement).reset()
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "john@example.com",
//       href: "mailto:john@example.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (555) 123-4567",
//       href: "tel:+15551234567",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "San Francisco, CA",
//       href: "#",
//     },
//   ]

//   return (
//     <section id="contact" className="py-20 bg-muted/50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Have a project in mind? Let's work together to bring your ideas to life.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
//               <p className="text-muted-foreground mb-8">
//                 I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
//                 question or just want to say hi, feel free to reach out!
//               </p>
//             </div>

//             <div className="space-y-4">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={info.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-center space-x-4"
//                 >
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                     <info.icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{info.label}</p>
//                     <a
//                       href={info.href}
//                       className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
//                     >
//                       {info.value}
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send me a message</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" name="firstName" required />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" name="lastName" required />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" name="email" type="email" required />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input id="subject" name="subject" required />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       rows={5}
//                       required
//                       placeholder="Tell me about your project..."
//                     />
//                   </div>

//                   <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       "Sending..."
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    console.log("Environment variables check:")
    console.log("Service ID:", serviceId ? "✓ Present" : "✗ Missing")
    console.log("Template ID:", templateId ? "✓ Present" : "✗ Missing")
    console.log("Public Key:", publicKey ? "✓ Present" : "✗ Missing")

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "Please check your EmailJS environment variables in .env.local",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Initialize EmailJS with the public key
      emailjs.init(publicKey)

      const formData = new FormData(e.target as HTMLFormElement)
      const templateParams = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        to_email: "ahmmedtanvir9090@gmail.com",
      }

      console.log("Sending email with params:", templateParams)

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      console.log("EmailJS success:", result)

      if (result.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        ;(e.target as HTMLFormElement).reset()
      }
    } catch (error: any) {
      console.error("EmailJS error:", error)

      let errorMessage = "Failed to send message. Please try again."

      if (error.status === 400) {
        if (error.text?.includes("Public Key is invalid")) {
          errorMessage = "EmailJS Public Key is invalid. Please check your configuration."
        } else if (error.text?.includes("Service ID")) {
          errorMessage = "EmailJS Service ID is invalid. Please check your configuration."
        } else if (error.text?.includes("Template ID")) {
          errorMessage = "EmailJS Template ID is invalid. Please check your configuration."
        } else {
          errorMessage = "Invalid EmailJS configuration. Please check all your credentials."
        }
      } else if (error.status === 401) {
        errorMessage = "EmailJS authentication failed."
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmmedtanvir9090@gmail.com",
      href: "mailto:ahmmedtanvir9090@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1911662898",
      href: "tel:+8801911662898",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Mohakhali, Bangladesh",
      href: "#",
    },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
