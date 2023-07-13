import fs from 'fs';
import path from 'path';

interface Movie {
  Release_Date: string;
  Title: string;
  Overview: string;
  Popularity: number;
  Vote_Count: string;
  Vote_Average: string;
  Original_Language: string;
  Genre: string;
  Poster_Url: string;
}

export const movieData = () => {
  try {
    const filePath = path.resolve('./src/helpers/constants/movies.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const movies: Movie[] = JSON.parse(jsonData);

    // Process the movies data
    return movies;
  } catch (err) {
    console.error('Error reading JSON file:', err);
    return []; // Return an empty array or handle the error accordingly
  }
};

movieData();
