import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import Layout from '../components/Layout';

const Favs = () => {
    return (
        <Layout title='tus favoritos' subtitle='aqui puedes encontrar tus favoritos'>
            <h1>Favs</h1>
            <FavsWithQuery />
        </Layout>
    )
}

export default Favs;