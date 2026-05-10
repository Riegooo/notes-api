
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


export const getNote = async (id: number) => {

    const getnotebyid = getSQL('get_note.sql');

    const checknoteid = await pool.query(getnotebyid, [id]);

    if (checknoteid.rows.length === undefined) {
        console.log("Undefined Rows");
        return [];
    }

    if (checknoteid.rows.length === 0) {
        console.log("Invalid, ID NOT FOUND")
        throw new Error("NOT_FOUND");
    }

    const getSelectedNote = checknoteid.rows;
    console.log(getSelectedNote);

}


export const deleteUserNotes = async (id: number) => {
    
    const deletenote = getSQL('delete_note.sql');

    const checkDeleteNote = await pool.query(deletenote, [id]);

    if (checkDeleteNote.rowCount === 0) {
        console.log("Invalid, ID NOT FOUND");
        throw new Error("NOT_FOUND");
    }

    console.log(checkDeleteNote.rows);

    return checkDeleteNote.rows;
}