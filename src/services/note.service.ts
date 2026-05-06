
import { pool } from "../config/database";
import { getSQL } from "../sql-loader";

export const updatedNote = async (title: string, content: string, id: number) => {

    const noteSql = getSQL('update_note.sql');

    const result = await pool.query(noteSql, [title, content, id]);

    if (result.rows.length === 0) {
        throw new Error("NOTE_NOT_FOUND_OR_NOT_UPDATED");
    }

    return result.rows[0];
};