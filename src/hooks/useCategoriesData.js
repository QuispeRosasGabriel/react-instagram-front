import { useEffect, useState } from "react";

export const useCategoriesData = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = 'https://petgram-server-edsf8xpy2.now.sh/categories';
        fetch(url).then(res => res.json())
        .then((resp) => {
            setLoading(false)
            setCategories(resp)
        })
    }, []);

    return {
        categories,
        loading
    };
}