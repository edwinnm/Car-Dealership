import { CARS_SEED } from './data/cars.seed';
import { CarsService } from './../cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService) {}


  populateDB(){
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED)
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    
    return `Seed executed`;
  }
}
