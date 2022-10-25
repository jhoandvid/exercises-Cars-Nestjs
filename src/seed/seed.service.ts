import { Injectable } from '@nestjs/common';
import { BRAND_SEED} from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {

  constructor(private readonly carsService:CarsService, private readonly brandService:BrandsService){
  }

  populatDB(){
    //CARS_SEED
    //BRAND_SEED

    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return `Seed executed`
  

}



}
