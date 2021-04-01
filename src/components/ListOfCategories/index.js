import React from 'react';
import {Category} from '../Category';
import {List, Item} from './styles';

export const ListOfCategories = () => {
    return(
        <List>
            {
                [1,2,3].map((val, idx) => (
                    <Item>
                        <Category key={idx} />
                    </Item>
                ))
            }
        </List>
    )
}