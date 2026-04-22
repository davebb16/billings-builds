import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import {
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

// ─── EmailJS config (set these in your .env file) ────────────────────────────
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''

// ─── Schema ───────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(20, 'Please describe your project in at least 20 characters'),
})

type ContactFormValues = z.infer<typeof contactSchema>

// ─── Contact info ──────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dbillings100@gmail.com',
    href: 'mailto:dbillings100@gmail.com',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
  {
    icon: MessageSquare,
    label: 'Preferred Contact',
    value: 'Email or the form →',
    href: null,
  },
]

const projectTypes = [
  { value: 'web-app', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'api', label: 'API / Backend' },
  { value: 'ui-ux', label: 'UI/UX Engineering' },
  { value: 'consulting', label: 'Technical Consulting' },
  { value: 'other', label: 'Something Else' },
]

const budgetRanges = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 – $15,000' },
  { value: '15k-30k', label: '$15,000 – $30,000' },
  { value: '30k-plus', label: '$30,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

// ─── Form ──────────────────────────────────────────────────────────────────────

async function sendEmail(data: ContactFormValues) {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone ?? 'Not provided',
      project_type: projectTypes.find((p) => p.value === data.projectType)?.label ?? data.projectType,
      budget: budgetRanges.find((b) => b.value === data.budget)?.label ?? data.budget,
      message: data.message,
      to_email: 'dbillings100@gmail.com',
    },
    EMAILJS_PUBLIC_KEY,
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const mutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => setSubmitted(true),
  })

  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 h-full min-h-[500px]">
        <div className="h-16 w-16 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-yellow-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-zinc-400 max-w-sm leading-relaxed">
          Thanks for reaching out. I'll review your project details and get back to you within 24
          hours.
        </p>
        <Button
          variant="outline"
          className="mt-8 border-white/15 text-white hover:bg-white/8 cursor-pointer bg-transparent"
          onClick={() => {
            setSubmitted(false)
            form.reset()
            mutation.reset()
          }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-sm font-medium">
                  Full Name <span className="text-yellow-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="David Billings"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-yellow-400/20 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-sm font-medium">
                  Email <span className="text-yellow-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-yellow-400/20 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-300 text-sm font-medium">
                Phone <span className="text-zinc-600 font-normal">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-yellow-400/20 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        {/* Project type + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-sm font-medium">
                  Project Type <span className="text-yellow-400">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-yellow-400/50 focus:ring-yellow-400/20 cursor-pointer">
                      <SelectValue placeholder="Select type" className="text-zinc-600" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-zinc-900 border-white/10 text-white">
                    {projectTypes.map(({ value, label }) => (
                      <SelectItem
                        key={value}
                        value={value}
                        className="text-zinc-300 focus:bg-white/10 focus:text-white cursor-pointer"
                      >
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300 text-sm font-medium">
                  Budget Range <span className="text-yellow-400">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-yellow-400/50 focus:ring-yellow-400/20 cursor-pointer">
                      <SelectValue placeholder="Select budget" className="text-zinc-600" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-zinc-900 border-white/10 text-white">
                    {budgetRanges.map(({ value, label }) => (
                      <SelectItem
                        key={value}
                        value={value}
                        className="text-zinc-300 focus:bg-white/10 focus:text-white cursor-pointer"
                      >
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-300 text-sm font-medium">
                Project Details <span className="text-yellow-400">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Tell me about your project — what are you building, what problem does it solve, and what's your timeline?"
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-yellow-400/20 transition-colors resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        {/* Error state */}
        {mutation.isError && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Failed to send message.</p>
              <p className="text-red-400/70 mt-0.5">
                Please email me directly at{' '}
                <a href="mailto:dbillings100@gmail.com" className="underline hover:text-red-300">
                  dbillings100@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={mutation.isPending}
          className={cn(
            'w-full bg-yellow-400 text-zinc-950 hover:bg-yellow-300 font-bold text-base py-6 cursor-pointer',
            'shadow-lg shadow-yellow-500/20 transition-all duration-200',
            'disabled:opacity-60 disabled:cursor-not-allowed',
          )}
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-zinc-600">
          By submitting, you agree to be contacted about your project. No spam, ever.
        </p>
      </form>
    </Form>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="section-container mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="border-yellow-400/30 text-yellow-400 bg-yellow-400/10 mb-4"
          >
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5">
            Let's Build{' '}
            <span className="gold-gradient-text">Something Great</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
            No commitments, just a conversation.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-2xl glass-card hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white font-medium hover:text-yellow-400 transition-colors cursor-pointer text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* What to expect */}
            <div className="p-6 rounded-2xl glass-card mt-2">
              <h3 className="font-bold text-white mb-4 text-sm">What happens next?</h3>
              <ol className="space-y-3">
                {[
                  'I review your message within 24 hours',
                  'We schedule a quick discovery call',
                  'I send a proposal with scope & pricing',
                  'We kick off if it\'s a good fit',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/8">
              <h2 className="text-2xl font-bold text-white mb-1">Tell me about your project</h2>
              <p className="text-zinc-500 text-sm mb-8">
                The more detail, the better I can help.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
