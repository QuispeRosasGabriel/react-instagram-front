import React, {useEffect, useRef, useState} from 'react';
import { Button, Img, ImgWrapper, Article } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obserber$ = new window.IntersectionObserver((entries) => {
            const {isIntersecting} = entries[0];
            if(!!isIntersecting) {
                setShow(true);
                obserber$.disconnect();
            }
        });      
        obserber$.observe(ref.current);

    }, [ref])

    return (
        <Article ref={ref}>
            { show && 
                <>
                <a href={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} alt="animal" />
                    </ImgWrapper>
                </a>

                <Button>
                    <MdFavoriteBorder size="32px" /> <span>{likes} likes!</span>
                </Button>
                </>
            }
        </Article>
    )
}
