interface Movie {
    title: string;
    poster_path: string;
    overview: string;
    videoTrailer: string;
    release_date: string;
    genre_ids: number[];
}

export async function fetchLatestAnimatedMovies(url: string, options: any) {
    try {
        const res = await fetch(url, options);
        const json = await res.json();

        if (json.results && Array.isArray(json.results)) {
            const AnimatedMovies = json.results.filter((movie: Movie) => movie.genre_ids.includes(16));
            const firstFiveMovies = AnimatedMovies.slice(0, 5).map((movie: Movie) => ({
                movie: movie.title,
                image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                description: movie.overview,
                videoTrailer: `https://www.youtube.com/results?search_query=${movie.title} trailer`,
                releaseDate: movie.release_date
            }));
            return firstFiveMovies;
        } else {
            console.error('No results found');
            return null;
        }
    } catch (err) {
        console.error('error:', err);
        return null;
    }
}
