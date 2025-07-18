"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Award, Calendar } from "lucide-react"

export interface TeamMember {
  name: string
  title: string
  bio?: string
  image?: string
  experience?: string
  certifications?: string[]
  specialties?: string[]
  contact?: {
    email?: string
    phone?: string
    linkedin?: string
  }
  featured?: boolean
}

export interface TeamGridProps {
  title?: string
  subtitle?: string
  team: TeamMember[]
  layout?: "grid" | "cards"
  showContact?: boolean
  showCertifications?: boolean
  className?: string
}

export const TeamGrid = ({
  title = "Meet Our Team",
  subtitle = "Experienced professionals dedicated to delivering exceptional service and results",
  team,
  layout = "grid",
  showContact = true,
  showCertifications = true,
  className = ""
}: TeamGridProps) => {
  const gridCols = team.length === 1 ? "lg:grid-cols-1" :
                  team.length === 2 ? "md:grid-cols-2" :
                  team.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" :
                  "md:grid-cols-2 lg:grid-cols-3"

  return (
    <section className={`py-16 bg-white dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-8 max-w-6xl mx-auto`}>
          {team.map((member, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 ${member.featured ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''} ${layout === "cards" ? "text-center" : ""}`}
            >
              {member.featured && (
                <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-medium">
                  Team Lead
                </div>
              )}
              
              {/* Profile Image */}
              <div className={`${layout === "cards" ? "p-6 pb-0" : "p-6"}`}>
                <div className={`${layout === "cards" ? "flex justify-center mb-6" : "flex gap-4"}`}>
                  <div className={`${layout === "cards" ? "w-32 h-32" : "w-20 h-20"} rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0`}>
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500">
                        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {layout !== "cards" && (
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {member.title}
                      </p>
                      {member.experience && (
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{member.experience}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {layout === "cards" && (
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {member.title}
                    </p>
                    {member.experience && (
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{member.experience}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Bio */}
                {member.bio && (
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {member.bio}
                  </p>
                )}
                
                {/* Specialties */}
                {member.specialties && member.specialties.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <span 
                          key={specIndex}
                          className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Certifications */}
                {showCertifications && member.certifications && member.certifications.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Certifications:
                    </h4>
                    <ul className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="text-xs text-slate-600 dark:text-slate-300">
                          • {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Contact */}
                {showContact && member.contact && (
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                    <div className="flex justify-center gap-3">
                      {member.contact.email && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={`mailto:${member.contact.email}`}>
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.contact.phone && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={`tel:${member.contact.phone}`}>
                            <Phone className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.contact.linkedin && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-12">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Work With Our Expert Team
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Our experienced professionals are ready to help you achieve your goals. 
              Contact us today to discuss your project.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get Started Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 