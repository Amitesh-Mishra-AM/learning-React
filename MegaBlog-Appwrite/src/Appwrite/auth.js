import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
    client= new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(appwriteUrl)
        .setProject(appwriteProjectId);
        this.account= new Account(this.client);

    }
    
    async createAccount({email, Password, Name}){
        try{
            const userAccount= await this.account.create(ID.unique(),email, Password, name);
            if(userAccount){
                // do soomething i.e call the function to login or redirect 
                return this.login(email,Password)  
            }
            else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    };
    async login(email,Password){
        try{
            return await this.account.createEmailPasswordSession('email@example.com', 'password'); // check here if error comes
            // if(login){
            //     return login;
            // }

        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            throw error;
        }
        return null;
    }   

    async logout(){
        try{
            await this.account.deleteSessions();
        }   
        catch(error){
            throw error;
        }
    }
}

const authService= new AuthService; // creating an object

