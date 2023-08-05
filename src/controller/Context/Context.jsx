import { createContext, useState, useEffect, useRef } from 'react';



const Context = createContext()

export const Controller = ({ children }) => {

    useEffect(() => { document.addEventListener('keydown', detectKeyDown, true,) });

    const detectKeyDown = (e) => {
        if (e.keyCode === 113) {
            setLocalhost(!localhost)
            if (localhost) {
                console.log("day");
                document.querySelector('body').style.background = "#fff"
            }
            else {
                console.log("night");
                document.querySelector('body').style.background = "#000"

            }
        }
    }


    // function scrollTop 
    const listenToScroll = () => {
        let heightToHidden_1 = 600;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            console.log("hello")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])
    
    const [log, setLog] = useState("TITLE")


    return <Context.Provider value={{
        log
    }}>
        {children}

    </Context.Provider>
}

export default Context