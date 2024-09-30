export const useDeviceSize = () => {
    return {
        mobile: window.innerWidth < 769,
        tablet: window.innerWidth < 1200,
        desktop: window.innerWidth >= 1200,
        notMobile: window.innerWidth >= 769,
    }
}