import axios, {AxiosResponse} from 'axios';

// Definir el tipo para un elemento
interface Element {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

type ElementsResponse = Element[];

const API_URL = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

export async function getContacts(): Promise<ElementsResponse> {
  try {
    const response: AxiosResponse<ElementsResponse> = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de elementos:', error);
    throw new Error('No se pudo obtener la lista de elementos');
  }
}
