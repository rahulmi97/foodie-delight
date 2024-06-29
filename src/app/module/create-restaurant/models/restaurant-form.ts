import { FormControl } from "@angular/forms";

export interface IRestaurantForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  location: FormControl<string | null>;
}
