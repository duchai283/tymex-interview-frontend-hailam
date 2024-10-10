import React from 'react'

const InnerLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  // md:px-8 lg:px-16 py-6
  return <div className={`max-w-[1280px] mx-auto ${className}`}>{children}</div>
}

export default InnerLayout
