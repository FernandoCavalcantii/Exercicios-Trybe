import { StatusCodes } from 'http-status-codes';
import { IPlantsModel } from '../Interfaces/Interfaces';
import { IPlant } from '../Types/Types';
import ErrorObj from '../Helpers/ErrorObj';

export default class PlantsService {
  plantsModel: IPlantsModel;

  constructor(plantsModel: IPlantsModel) {
    this.plantsModel = plantsModel;
  }

  async getPlants(): Promise<IPlant[]> {
    const plants = await this.plantsModel.getPlants();
    return plants;
  }

  async getPlantById(id: string): Promise<IPlant | ErrorObj> {
    const plant = await this.plantsModel.getPlantById(id);
    if (!plant) return new ErrorObj(StatusCodes.NOT_FOUND, 'Plant ID not found');
    return plant;
  }
}
