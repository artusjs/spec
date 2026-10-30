function mergeRefs(...refs) {
    return (value)=>{
        refs.forEach((ref)=>{
            if ('function' == typeof ref) ref(value);
            else if (null !== ref) ref.current = value;
        });
    };
}
export { mergeRefs };
