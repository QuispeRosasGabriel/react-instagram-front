import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useQuery } from 'react-apollo';
import {gql} from 'apollo-boost';

const getPhotos = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const ListOfPhotoCards = () => {
    const { loading, data}  = useQuery(getPhotos)
    console.log(data?.photos)
    return (
        <ul>
            {
               !loading && data?.photos?.map((photo, idx) => (<PhotoCard key={idx}  {...photo} />))
            }
        </ul>
    )
}

// export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);