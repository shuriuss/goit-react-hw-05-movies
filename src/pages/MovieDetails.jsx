import { useParams } from "react-router-dom";
import {fetchMovieId} from '../components/service/fetchMovieId'

export const MovieDetails = () => {
    const { id } = useParams();

    fetchMovieId(id).then(r=>console.log(r))

    return(
        <p>{id}</p>
    )


}