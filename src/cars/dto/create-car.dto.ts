import { IsString} from "class-validator";

export class CreateCarDto{

   @IsString() //{message:}
   readonly brand:string;
   
   
   @IsString()
   readonly model:string

}