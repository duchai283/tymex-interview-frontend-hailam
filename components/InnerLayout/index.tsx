import React from 'react'

const InnerLayout = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
  )
}

export default InnerLayout
