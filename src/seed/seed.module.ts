import { CarsModule } from './../cars/cars.module';
import { BrandsModule } from './../brands/brands.module';
import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [ SeedController ],
  providers: [ SeedService ],
  imports: [ BrandsModule, CarsModule ]
})
export class SeedModule {}
