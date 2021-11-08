import { useEffect, useState } from "react";


const useDeviceDetect = () => {
    const [width, setWidth] = useState(1480);

    const handleWindowResize = () => {
        setTimeout(() => {
            setWidth(window.innerWidth);
        }, 300);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (width <= 768);
}

export default useDeviceDetect;