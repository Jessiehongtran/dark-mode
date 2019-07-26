import {useEffect} from 'react';
import useLocalStorage from "./useLocalStorage"


function useDarkMode(){
    const [darkMode, setDarkMode] = useLocalStorage('')
    const body = document.querySelector('body')

    useEffect(()=>{
        if (darkMode === true) {body.classList.add('.dark-mode')}
        else {body.classList.remove('.dark-mode')}
    }, [darkMode]);

    return [darkMode, setDarkMode]
    
}

export default useDarkMode