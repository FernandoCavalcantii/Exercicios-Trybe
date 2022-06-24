import PlantsController from '../Controllers/plants.controller';
import PlantsModel from '../Models/Entities/Plants';
import PlantsService from '../Service/plants.service';

class Factory {
    plantsFactory = (): PlantsController => {
        const model = new PlantsModel();
        const service = new PlantsService(model);
        const controller = new PlantsController(service);

        return controller;
    }
}

export default Factory;