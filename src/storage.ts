import { Memo } from "./types";
/*
    変数一覧
*/
export const STORAGE_KEY = 'memos';

/*
    関数一覧
*/
export function readLocalStorage(key:string): Memo[] {
    const data = localStorage.getItem(key);
    if(data === null) {
        return [];
    } else {
        return JSON.parse(data);
    }
}
export function saveLocalStorage(key:string, memos:Memo[]){
    // ローカルストレージにデータを保存する
    localStorage.setItem(key, JSON.stringify(memos));
}
