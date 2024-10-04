"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { Send, Copy, Check } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "theneorene@gmail.com"
  const subject = "Inquiry from Portfolio"
  const body = "Hello, I visited your portfolio and would like to connect."

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="mb-16 scroll-mt-header text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6">Feel free to reach out to me on any of these platforms:</p>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
        <a href="http://discord.com/users/952324984108355624" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <DiscordLogoIcon className="mr-2 h-4 w-4" />
            Discord
          </Button>
          </a>
          <a href="https://twitter.com/coppercor3" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <TwitterLogoIcon className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </a>
          <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Send className="mr-2 h-4 w-4" />
              Email
            </Button>
          </a>
          <Button
            variant="outline"
            onClick={copyEmail}
          >
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Copied!" : "Copy Email"}
          </Button>
        </div>
        <p className="text-sm mt-2">
          If the email link doesn't work, please copy the address and use your preferred email client.
        </p>
      </div>
    </section>
  )
}