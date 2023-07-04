import { useEffect, useState } from "react"

const breakpoints = 576;

const detectDevice = () => {
    return window.innerWidth <= breakpoints ? "mobile" : 'desktop'
}

const useWindowSize = () => {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const handleResize = () => {
        setDevice(() => detectDevice()) 
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {device}
}

export default useWindowSize