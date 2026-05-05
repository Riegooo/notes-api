import { pool } from "../db/database";
import { getSQL } from "../sql-loader";



export const createUserNote = async (title: String, content: String) => {
    
    const createNote = getSQL('create_note.sql');

    const checkUserNote = await pool.query(createNote, [title, content]);

    if (checkUserNote.rows.length === undefined) {
        console.log("Undefined ROWS");
    }else{
        const userNotes = checkUserNote.rows;
        console.log(userNotes);
    }

}


export const selectAllUserNotes = async () => {

    const selectAll = getSQL('select_all_note.sql');

    const checkAllNotes = await pool.query(selectAll);


    if (checkAllNotes.rows.length === undefined) {
        console.log("Undefined Rows");
        return [];
    } 

    const Allnotes = checkAllNotes.rows;
    console.log(Allnotes);

    return Allnotes;

}



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