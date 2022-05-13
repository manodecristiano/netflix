import {MovieCard} from "./MovieCard"
import moviesJson from "./assets/movies.json"
import styles from "./Style.module.css"

export function MoviesGrid(){
   
    return(

        <ul className={styles.movieGridCss}>
            
            {moviesJson.map((movie) => (
            
                <MovieCard key={movie.id} movie={movie}/>
         
            ))}
            
        </ul>
    );
}