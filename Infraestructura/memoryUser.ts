//adaptador(repositorio de datos)
import { User } from "../Dominio/user";
import { UserRepository } from "../Dominio/user";
export class InMemoryUserRepository implements UserRepository {
    private users: Record<string, User> = {};

    async getUserById(userId: string): Promise<User | null> {
        return this.users[userId] || null;
    }

    async saveUser(user: User): Promise<void> {
        this.users[user.id] = user;
    }
}

// Adaptador (Interfaz de Usuario por consola)
export class ConsoleUserInterface {
    displayUserInfo(user: User): void {
        console.log(`Mostrar información del usuario en la consola: ${user.id}, ${user.name}`);
    }
}
