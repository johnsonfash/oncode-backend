import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class AppointmentDto {

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsInt()
  @IsNotEmpty()
  doctor_id: number;

}