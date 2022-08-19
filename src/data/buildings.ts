import data from './buildings.json';

export const getAll = async () => {
    return data
}

export const getOne = async (id: number) => {
    return data.find((ele) => ele.id === id)
}