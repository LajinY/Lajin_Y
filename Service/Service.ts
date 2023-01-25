import AppDataSource from "../DataSource/Connection";
import { Movie } from "../Entities/Movie";

const movieRepo = AppDataSource.getRepository(Movie);

class movieService {
  public async getMovie(id: number) {
    // const data=await movieRepo.findOne({where:{id:id}})
    const data = await movieRepo
      .createQueryBuilder("movie")
      .where("movie.id=:movieId", { movieId: id })
      .getOne();
    return data;
  }

  public async getAll() {
    const data = await movieRepo
      .createQueryBuilder("movie")
      .orderBy("movie.id", "ASC")
      .getMany();
    return data;
  }

  public async createMovie(input: { title: string; language: string }) {
    const data = await movieRepo.save(input);
    return data;
  }

  public async updateMovie(
    id: number,
    input: {
      title: string;
      language: string;
    }
  ) {
    // const data=await movieRepo.findOne({where:{id:id}})
    const movie = await movieRepo
      .createQueryBuilder("movie")
      .where("movie.id=:movieId", { movieId: id })
      .getOne();
    if (!movie) {
      throw new Error("no movies found this id");
    }
    const data = await movieRepo.update(movie, input);
    movie.language = input.language;
    movie.title = input.title;
    return movie;
  }

  public async deleteMovie(id: number) {
    // const data=await movieRepo.findOne({where:{id:id}})
    const movie = await movieRepo
      .createQueryBuilder("movie")
      .where("movie.id=:movieId", { movieId: id })
      .getOne();
    if (!movie) {
      throw new Error("no movies found this id");
    }
    const data = await movieRepo.delete(movie);
    return data;
  }
}

export default movieService;
