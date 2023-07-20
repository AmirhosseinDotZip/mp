import { CharacterDataWrapper } from '@/types/marvels'
import md5 from 'md5'

const API_BASE_URL="https://gateway.marvel.com/v1/public"
const API_PUBLIC_KEY="37a5ab36ead555e33fd735675d629ed1"
const API_PRIVATE_KEY="768def5740079cd5709821849305946dfab6653d"

const getTimeStamp = () => Date.now().toString()
const getHash = (timeStamp: string) => md5(timeStamp+API_PRIVATE_KEY+API_PUBLIC_KEY)

const timeStamp = getTimeStamp()
const hash = getHash(timeStamp)
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T> (response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json()
    return data.data as T
}

export const getCharacters = async (): Promise<CharacterDataWrapper> => {
    const url = `${API_BASE_URL}/characters?${query}`
    const response = await fetch(url)
    return handleResponse<CharacterDataWrapper>(response)
}

export const detailCharacter = async (characterId: string): Promise<CharacterDataWrapper> => {
    const url = `${API_BASE_URL}/characters/${characterId}?${query}`
    const response = await fetch(url)
    return handleResponse<CharacterDataWrapper>(response)
}

export const searchCharacters = async (querySearch: string | null): Promise<CharacterDataWrapper> => {
    const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
    const response = await fetch(url)
    return handleResponse<CharacterDataWrapper>(response)
}

