import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = () => {
    return (
        <ul>
            {
                [1, 2, 3, 5, 9].map((id) => <PhotoCard key={id}  id={id} />)
            }
        </ul>
    )
}