import { MoviesGrid } from "./MoviesGrid";
import styles from "./Style.module.css"

export function App(){
    return (
    <div>
      <header>

        <h1 className={styles.titleNetflixCss}>Netflix</h1>

      </header>

      <main>
        
                <MoviesGrid></MoviesGrid>
        
      </main>
    </div>
)}