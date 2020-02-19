import { BodyType } from '../enums/body-type.enum';
import { Vehicle } from './vehicle.model';
import { Guid } from 'guid-typescript';
import { VehicleType } from '../enums/vehicle-type.enum';

export class Car implements Vehicle {
    id: Guid;
    vehicleType: VehicleType;
    make: string;
    model: string;
    engineSize: number;
    numberOfDoors: number;
    numberOfWheels: number;
    bodyType: BodyType;

    Car() {
        this.vehicleType = VehicleType.Car;
    }
}
