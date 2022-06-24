import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorObj from '../Helpers/ErrorObj';
import { IPlantsService } from '../Interfaces/Interfaces';

export default class PlantsController {
  plantsService: IPlantsService;

  constructor(service: IPlantsService) {
    this.plantsService = service;
  }

  async getPlants(_req: Request, res: Response): Promise<void> {
    const plants = await this.plantsService.getPlants();
    res.status(StatusCodes.OK).json(plants);
  }

  async getPlantById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const plant = await this.plantsService.getPlantById(id);
    if (plant instanceof ErrorObj) return next(plant);
    res.status(StatusCodes.OK).json(plant);
  }
}
