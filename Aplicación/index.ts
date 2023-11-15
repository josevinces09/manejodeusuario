// Configuración e inyección de dependencias
import { User, UserRepository } from "../Dominio/user";
import { InMemoryUserRepository } from "../Infraestructura/memoryUser";
import { UserHandler } from "../Dominio/user";
import { ConsoleUserInterface } from "../Infraestructura/memoryUser";
const userRepository: UserRepository = new InMemoryUserRepository();
const userInterface = new ConsoleUserInterface();
const userHandler = new UserHandler(userRepository);

// Uso de la Aplicación
const userId = '1';
userHandler.getUserInfo(userId);
const user1=new User("01","Pablo");
userInterface.displayUserInfo(user1);