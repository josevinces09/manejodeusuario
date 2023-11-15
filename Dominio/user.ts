//interfaces(puertos)
 export interface UserRepository{
    getUserById(userId:string):Promise<User|null>;
    saveUser(user:User): Promise<void>;
}
//Modelo de dominio
export class User{
    constructor(public id:string,public name:string){
    }
}
//Servicio de dominio
export class UserHandler{
    constructor(private userRepository:UserRepository){
    }
    async getUserInfo(userId:string){
        const user=await
        this.userRepository.getUserById(userId);
        if (user){
            this.displayUserInfo(user);
        }else{
            console.log("Usuario no encontrado");
        }
    }
    private displayUserInfo(user:User){
        console.log(`User ID: ${user.id}, Name: ${user.name}`);
    }
}
