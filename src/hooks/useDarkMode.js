import {useEffect} from 'react';
import useLocalStorage from "./useLocalStorage"


function useDarkMode(){
    const [someValue, setSomeValue] = useLocalStorage('your key here')

    useEffect(()=>{
        if (storedValue = true) {body.add('dark-mode')}
        else {body.remove('dark-mode')}
    }, []);

    return (
        <div>{[storedValue, setStoredValue]}</div>
    )
}