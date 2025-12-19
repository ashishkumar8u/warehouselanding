"use client"

import type React from "react"
import { useState } from "react"

export function WarehouseLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    warehouseSize: "",
    location: "",
    budget: "",
    leaseDuration: "",
    timeline: "",
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)

    setIsSubmitting(false)

    // Reset form
    setFormData({
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      warehouseSize: "",
      location: "",
      budget: "",
      leaseDuration: "",
      timeline: "",
      notes: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <div className="rounded-xl border  lg:w-[65%] border-neutral-200 bg-white shadow-lg">
        <div className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-6 md:px-8">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl font-semibold text-[#173c65]">Warehouse Inquiry Form</h2>
          <p className="mt-2 md:text-base text-sm text-gray-600">
          Share your requirements and we will match you with available warehouse spaces

          </p>
        </div>

        <div className="px-6 py-8 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">Contact Information</h3>
                <p className="text-sm text-neutral-600">Let us know how to reach you</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Acme Corporation"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Warehouse Requirements Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">Warehouse Requirements</h3>
                <p className="text-sm text-neutral-600">Tell us about your space needs</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="warehouseSize" className="block text-sm font-medium text-neutral-700">
                    Warehouse Size (sq ft) <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="warehouseSize"
                    value={formData.warehouseSize}
                    onChange={(e) => handleChange("warehouseSize", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select size range
                    </option>
                    <option value="5000-10000">5,000 - 10,000 sq ft</option>
                    <option value="10000-25000">10,000 - 25,000 sq ft</option>
                    <option value="25000-50000">25,000 - 50,000 sq ft</option>
                    <option value="50000-100000">50,000 - 100,000 sq ft</option>
                    <option value="100000+">100,000+ sq ft</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-neutral-700">
                    Preferred Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="City, State or Region"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700">
                    Monthly Budget <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="leaseDuration" className="block text-sm font-medium text-neutral-700">
                    Lease Duration <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="leaseDuration"
                    value={formData.leaseDuration}
                    onChange={(e) => handleChange("leaseDuration", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select duration
                    </option>
                    <option value="short-term">Short-term (1-6 months)</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="1-3-years">1-3 years</option>
                    <option value="3-5-years">3-5 years</option>
                    <option value="5+-years">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700">
                  Timeline to Move In <span className="text-red-600">*</span>
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => handleChange("timeline", e.target.value)}
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                >
                  <option value="" disabled>
                    When do you need the space?
                  </option>
                  <option value="immediate">Immediate (Within 30 days)</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6+-months">6+ months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">Additional Information</h3>
                <p className="text-sm text-neutral-600">Any special requirements or questions?</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="block text-sm font-medium text-neutral-700">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  placeholder="Tell us about any specific requirements: loading docks, ceiling height, temperature control, security features, etc."
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-neutral-600">
                <span className="text-red-600">*</span> Required fields
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-950 px-8 py-3 font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg border border-green-200 bg-white p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 rounded-full bg-green-100 p-1">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-neutral-900">Thank you for your inquiry!</h4>
              <p className="mt-1 text-sm text-neutral-600">
                Our team will contact you within 24 hours to discuss your warehouse needs.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
