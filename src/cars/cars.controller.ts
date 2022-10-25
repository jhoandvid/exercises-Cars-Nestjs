import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {


    constructor(private readonly carsService:CarsService){

    }


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

     @Get(':id')
        getCardById(@Param('id', ParseUUIDPipe)  id:string){
         return this.carsService.findOneById(id);
    }
    
    
    @Post()
    createCard(@Body() createCarDto:CreateCarDto){    
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(@Body() updateCarDto:UpdateCarDto, @Param('id', ParseUUIDPipe) id:string){
        return this.carsService.updateCar(id, updateCarDto);
    }


    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        this.carsService.delete(id);
    }



}


