import { AppDataSource } from "../Datasource/Connection";
import { Shoes } from "../Entities/Shoes";
import { User } from "../Entities/User";
const userRepo = AppDataSource.getRepository(User);
const shoeRepo = AppDataSource.getRepository(Shoes);
class UserService {
  public getUser = async (id: number) => {
    // const data = await shoeRepo.find({ where: { id: id } });
    // console.log(data);
    const data = await shoeRepo
      .createQueryBuilder("Shoes")
      .leftJoinAndSelect("Shoes.user", "user")
      .where("Shoes.user= :userId", { userId: id })
      .getOne();
    console.log(data);

    return data;
  };

  public createUser = async (user: User, shoe: Shoes) => {
    const userId = await userRepo.save(user);
    shoe.user = userId;
    await shoeRepo.save(shoe);
    return "created successfully";
  };
}
export default UserService;
