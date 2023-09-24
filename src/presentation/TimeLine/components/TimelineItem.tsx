import React from 'react'

interface TimelineItemProps {
  date: string
  title: string
  description: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description
}) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary bg-primary dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  )
}

export default TimelineItem
