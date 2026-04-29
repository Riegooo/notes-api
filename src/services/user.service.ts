import { pool } from "../db/database";
import { getSQL } from "../sql-loader";

type user = {
    username: string,
    password: string
}

const users: user[] = [];

export const createUser = async (username: string, password: string) => {
    
    const create_account = getSQL('create_user.sql');

    const check_username = await pool.query(create_account, [username, password]);

    const user = check_username.rows[0];
    console.log(user)

}


export const loginUser = async (username: string, password: string) => {

    const findUser = users.find(u => u.username === username);

    if (!findUser) {
        throw new Error("User Account not found.");
    }

    if (!(findUser.password === password)) {
        throw new Error("Incorrect Password.")
    }


    return {
        username: findUser.username
    }


}