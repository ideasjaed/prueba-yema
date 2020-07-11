import React, {useEffect} from 'react'
import { useHistory, useParams } from "react-router-dom";
import CharactersQuery from "../components/CharactersQuery";
import Pagination from '../components/Pagination';

const Home = ({data, onChangePage}) => {
    const history = useHistory();
    let { page } = useParams();

    useEffect(() => {
        onChangePage && onChangePage(page)
    }, [page])
    
    return (
            
        <div className="container mx-auto">
        <div className="grid grid-cols-1 row-gap-8 sm:grid-cols-2 sm:col-gap-5 sm:row-gap-6 md:grid-cols-4 lg:col-span-4">
            {data.launchesPast.map(launche => (<CharactersQuery  data={launche}/>))}
        </div>
        {data && data.launchesPastResult && <Pagination selectPage={page} onSelectPage={page => history.push("/home/"+page) } totalCount={data.launchesPastResult.result.totalCount} />}
      </div>

    )
}

export default Home;