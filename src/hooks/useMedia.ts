import React from 'react'

export const useMedia = (media: string) => {
  const [match, setMatch] = React.useState(false)

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => window.removeEventListener('resize', changeMatch)
  }, [media])
  return match
}
