/// <reference types="react-scripts" />


export interface TaskContent {
    id: number
    title: string
    desc: string
    done: boolean
}


type TaskArray = Array<TaskContent>;
