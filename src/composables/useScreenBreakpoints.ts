import { useBreakpoints } from '@vueuse/core'

export const useScreenBreakpoints = () => {
  // Добавляем + 1 к изначальным параметрам
  const breakpoints = useBreakpoints({
    mobile: 561,
    tablet: 781,
    wideTablet: 1026,
    laptop: 1371,
  })

  return {
    isMobile: breakpoints.smaller('mobile'),
    isTablet: breakpoints.between('mobile', 'tablet'),
    isWideTablet: breakpoints.between('tablet', 'wideTablet'),
    isLaptop: breakpoints.between('wideTablet', 'laptop'),
    isDesktop: breakpoints.greaterOrEqual('laptop'),
  }
}
