import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BodyTypeName } from '../enums/body-type-map-enum';
import { VehicleService } from '../services/vehicle.service';
import { Car } from '../models/car.model';
import { BodyType } from '../enums/body-type.enum';
import { VehicleType } from '../enums/vehicle-type.enum';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  createCarForm: FormGroup;
  submitted = false;
  public BodyTypeName = BodyTypeName;
  public bodyTypesArray = Object.values(BodyType).filter(value => typeof value === 'number');
  constructor(private formBuilder: FormBuilder, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.createCarForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      engineSize: ['', Validators.required],
      numberOfDoors: ['', Validators.required],
      numberOfWheels: ['', Validators.required],
      bodyType: [null, Validators.required]
    });
  }

  get controls() { return this.createCarForm.controls; }
  createCar() {
    this.submitted = true;

    if (this.createCarForm.invalid) {
      return;
    }
    this.CreateNewCar(this.createCarForm.value as Car);

  }

  private CreateNewCar(car: Car) {
    car.vehicleType = VehicleType.Car; // Explicit Default Value
    car.id = Guid.create().toString();//Guid
    this.vehicleService.createCar(car).subscribe(data => { alert("Succesfully Created Car") }, Error => { alert("Failed while creating car") });
  }
}
