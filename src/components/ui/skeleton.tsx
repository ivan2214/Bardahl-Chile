import React, { type HTMLAttributes } from 'react'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  cardWidth?: string
  cardHeight?: string
  circleSize?: string
  line1Width?: string
  line2Width?: string
  line3Width?: string
  line4Width?: string
  line5Width?: string
  iconSize?: string
  iconColor?: string
  circleColor?: string
  lineColor?: string
}

const Skeleton: React.FC<SkeletonProps> = ({
  cardWidth = 'max-w-sm',
  cardHeight = 'h-48',
  circleSize = 'h-12 w-12',
  line1Width = 'w-3/5',
  line2Width = 'w-[90%]',
  line3Width = 'w-48',
  line4Width = 'w-32',
  line5Width = 'w-48',
  iconSize = 'h-10 w-10',
  iconColor = 'text-gray-200 dark:text-gray-600',
  circleColor = 'bg-gray-300 dark:bg-gray-700',
  lineColor = 'bg-gray-200 dark:bg-gray-700',
  className,
  ...rest
}) => {
  return (
    <div
      role="status"
      className={` animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6 ${cardWidth} ${className} overflow-hidden`}
      {...rest}
    >
      <div className={`mb-4 flex items-center justify-center rounded ${cardHeight} ${circleColor}`}>
        <svg
          className={`${iconSize} ${iconColor}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className={`mb-4 h-2.5 ${line1Width} rounded-full ${lineColor}`}></div>
      <div className={`mb-2.5 h-2 ${line2Width} rounded-full ${lineColor}`}></div>
      <div className={`mb-2.5 h-2 ${line3Width} rounded-full ${lineColor}`}></div>
      <div className={`mb-2.5 h-2 ${line4Width} rounded-full ${lineColor}`}></div>
      <div className={`h-2 ${line5Width} rounded-full ${lineColor}`}></div>

      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Skeleton
