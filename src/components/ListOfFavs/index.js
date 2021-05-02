import React from 'react';
import { Link, Grid, Image } from './styles.js';

const ListOfFavs = ({ favs = [] }) => {
    return (
        <Grid>
            {favs.map((fav) =>
                (<Link key={fav.id} to={`/detail/${fav.id}`}>
                    <Image src={fav.src} alt='img' />
                </Link>)
            )}
        </Grid>
    )
}

export default ListOfFavs;
