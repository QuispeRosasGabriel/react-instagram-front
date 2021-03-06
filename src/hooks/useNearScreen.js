import { useEffect, useRef, useState } from 'react';

export const useNearScreen = () => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver
            :import ('intersection-observer')
        ).then(() => {
            const obserber$ = new window.IntersectionObserver((entries) => {
                const {isIntersecting} = entries[0];
                if(!!isIntersecting) {
                    setShow(true);
                    obserber$.disconnect();
                }
            });      
            obserber$.observe(ref.current);
        })
    }, [ref]);

    return {
        show,
        ref
    }
}
