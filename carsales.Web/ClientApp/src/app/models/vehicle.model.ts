import { Guid } from 'guid-typescript';
import { VehicleType } from '../enums/vehicle-type.enum';

export interface Vehicle {
    id: Guid;
    vehicleType: VehicleType;
    make: string;
    model: string;
    engineSize: number;
}
