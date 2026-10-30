import { useRef } from "react";
const useHandler = (handler)=>{
    const handlerRef = useRef(handler);
    handlerRef.current = handler;
    return useRef((...args)=>handlerRef.current(...args)).current;
};
export { useHandler };
