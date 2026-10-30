import { useEffect, useState } from "react";
const useMediaQuery = (query)=>{
    const [matches, setMatches] = useState(()=>"u" > typeof window ? window.matchMedia(query).matches : false);
    useEffect(()=>{
        const mediaQueryList = window.matchMedia(query);
        const listener = (e)=>setMatches(e.matches);
        mediaQueryList.addEventListener('change', listener);
        return ()=>mediaQueryList.removeEventListener('change', listener);
    }, [
        query
    ]);
    return matches;
};
export { useMediaQuery };
