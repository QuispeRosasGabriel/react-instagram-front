import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useQuery } from 'react-apollo';
import { getPhotos } from '../../hoc/getPhotos';


export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, data } = useQuery(getPhotos, { variables: { categoryId } })
    return (
        <ul>
            {
                !loading && data?.photos?.map((photo, idx) => (<PhotoCard key={idx}  {...photo} />))
            }
        </ul>
    )
}
