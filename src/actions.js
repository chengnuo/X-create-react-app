/**
 * Created by xujunchao on 2017/6/27.
 */


//添加
export const ADD_TODO = 'ADD_TODO';
export function actionsTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

