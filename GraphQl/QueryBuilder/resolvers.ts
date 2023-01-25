import movieService from "../../Service/Service";
const resolver = {
  Query: {
    getMovie(_parent: unknown, args: { id: number }) {
      return new movieService().getMovie(args.id);
    },
    getAll() {
      return new movieService().getAll();
    },
  },
  Mutation: {
    createMovie(
      _parnet: unknown,
      args: { input: { title: string; language: string } }
    ) {
      return new movieService().createMovie(args.input);
    },

    updateMovie(
      _parent: unknown,
      args: { id: number; input: { title: string; language: string } }
    ) {
      return new movieService().updateMovie(args.id, args.input);
    },

    deleteMovie(_parent: unknown, args: { id: number }) {
      return new movieService().deleteMovie(args.id);
    },
  },
};
export default resolver;
