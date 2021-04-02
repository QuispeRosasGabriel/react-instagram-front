import React, {useEffect, useRef, useState} from 'react';
import { Button, Img, ImgWrapper, Article } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, setShow] = useState(false);
    const key = `like${id}`;
    const [liked, setLiked] = useState(() => {
        try {
            const like = localStorage.getItem(key)
            return like;
        } catch (error) {
            console.log(error);
        }
    });
    const ref = useRef(null);
    const Icon  = !!liked ? MdFavorite : MdFavoriteBorder;
    const setLocalStorage = (value) => {
        try {
            localStorage.setItem(key, value);
            setLiked(value);
        } catch (error) {
            console.log(error);
        }
    }

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

                <Button onClick={() => setLocalStorage(!liked)}>
                    <Icon size="32px" /> {likes} likes
                </Button>
                </>
            }
        </Article>
    )
}
