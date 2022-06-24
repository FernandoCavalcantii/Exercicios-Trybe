import { Request, Response } from 'express';
import ErrorObj from '../Helpers/ErrorObj';
import { IPlant } from '../Types/Types';

export interface IPlantsModel {
    getPlants(): Promise<IPlant[]>
    getPlantById(id: string): Promise<IPlant | null>
}

export interface IPlantsService {
    plantsModel: IPlantsModel
    getPlants(): Promise<IPlant[]>
    getPlantById(id: string): Promise<IPlant | ErrorObj>
}

export interface IPlantsController {
    plantsService: IPlantsService
    getPlants(req: Request, res: Response): Promise<void>
    getPlantById(req: Request, res: Response): Promise<void>
}