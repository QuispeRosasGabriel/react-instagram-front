import React, { useState, useEffect } from 'react';
import { useCategoriesData } from '../../hooks/useCategoriesData';
import {Category} from '../Category';
import {List, Item} from './styles';

export const ListOfCategories = () => {
    const [showFixed, setShowFixed] = useState(false);
    const {categories, loading} = useCategoriesData();

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }

        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed])

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : '' }>
        {
            categories.map((category, idx) => (
                <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`} />
                </Item>
            ))
        }
        </List>
    )

    if(!!loading) return 'Cargando...'

    return(
      <>  
        {renderList()}
        {showFixed && renderList(true)}
      </>
    )
}