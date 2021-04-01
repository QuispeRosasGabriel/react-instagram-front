import React from 'react';
import {Category} from '../Category';
import {List, Item} from './styles';
import  {categories} from '../../assets/db.json';

export const ListOfCategories = () => {
    return(
        <List>
            {
                categories.map((category, idx) => (
                    <Item key={category.id}>
                        <Category {...category} />
                    </Item>
                ))
            }
        </List>
    )
}