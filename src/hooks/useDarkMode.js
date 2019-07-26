import {useEffect} from 'react';
import useLocalStorage from "./useLocalStorage"


function useDarkMode(initialValue){
    const [darkMode, setDarkMode] = useLocalStorage('example', initialValue)

    useEffect(()=>{
        if (darkMode) {document.body.classList.add('dark-mode')}
        else {document.body.classList.remove('dark-mode')}
    }, [darkMode]);

    return [darkMode, setDarkMode]
    
}

export default useDarkMode

