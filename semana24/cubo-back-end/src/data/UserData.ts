import { UserInsertDTO } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {
    private static TABLE_NAME = "usuario_cubo";

    async insertUser(user: UserInsertDTO): Promise<string> {
        try {
            const { id, firstName, lastName, participation } = user;

            await this.getconnection()
                .insert({
                    id,
                    firstName,
                    lastName,
                    participation,
                })
                .into(UserData.TABLE_NAME);

            return "Usuário criado com sucesso!";
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro do banco de dados");
            }
        }
    }
}
