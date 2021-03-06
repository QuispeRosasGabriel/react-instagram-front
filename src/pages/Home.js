import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const HomePage = ({ id }) => {
    return (
        <Layout title='tu app de fotos de mascotas' subtitle='con Petgram puedes encontrar fotos de animales'>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.id === props.id   
});
// https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql