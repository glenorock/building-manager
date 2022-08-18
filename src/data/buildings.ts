import * as data from './buildings.json';

export const getAll = () => {
    return data
}

export const getOne = (id: string) => {
    return data.find((ele) => ele.id === id)
}