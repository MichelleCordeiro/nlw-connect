import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      //twMerge -> add new property or subscribe
      //without it all previous classname will be replaced
      //when IconButton is used passing some property it will be added to the existing ones or subscribe to some
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-200 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
