
import axiosInstance from '../api/axiosInstance';
import { Painting } from '../models/Painting';

export const getPainting = async (id: string): Promise<Painting> => {
    const response = await axiosInstance.get<Painting>(`/GetPainting?id=${id}`);
    return response.data;
};

export const getAllPaintings = async (): Promise<Painting[]> => {
    const response = await axiosInstance.get<Painting[]>('/GetAllPaintings');
    return response.data;
};

export const getPaintings = async (paintingIds: string[]): Promise<Painting[]> => {
    const response = await axiosInstance.post<Painting[]>('/GetPaintings', { paintingIds });
    return response.data;
};

export const createPainting = async (painting: Painting): Promise<Painting> => {
    const response = await axiosInstance.post<Painting>('/CreatePainting', painting);
    return response.data;
};

export const updatePainting = async (painting: Painting): Promise<void> => {
    await axiosInstance.put('/UpdatePainting', painting);
};

export const deletePainting = async (paintingId: string): Promise<void> => {
    await axiosInstance.delete(`/DeletePainting?paintingId=${paintingId}`);
};
