import styles from "./Style.module.css"

export  function MovieCard({ movie }){
    const imageUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path
    return(

        <li className={styles.listNameMovieCss}>

        <img className={styles.imageMovieCss} src={ imageUrl } alt={ movie.title }></img>
        <p>{ movie.title }</p> 

        </li>
    )
}