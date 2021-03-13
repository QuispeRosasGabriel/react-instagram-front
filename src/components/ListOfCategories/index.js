import React from 'react';
import {Category} from '../Category';

export const ListOfCategories = () => {
    return(
        <ul>
            {
                [1,2,3].map((val, idx) => (
                <Category key={idx} />
                ))
            }
        </ul>
    )
}