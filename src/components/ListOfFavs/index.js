import React from 'react';
import { Link, Grid, Image } from './styles.js';
import PropTypes from 'prop-types';

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

ListOfFavs.propTypes = {
    favs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            src: PropTypes.string,
        })
    )
}

export default ListOfFavs;
