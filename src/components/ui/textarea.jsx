import React from "react"

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black min-h-[120px] ${className}`}
      {...props}
    />
  )
}
