export type ControlSchema<
  ControlName extends string = string,
  // This is used for inference on MapControlTypes hence why it's unused here
  _Type = any
> = {
  name: ControlName;
};

export interface AllControlsInterface extends ControlSchema {}
export type AllControlsType<T extends ControlSchema = ControlSchema> = T;

export type Control = AllControlsType | AllControlsInterface;

// This should return the names of ALL controls
export type ControlNames = Control["name"];

// Converts "Test 1" to "number",  "Test 2" to "string"
export type MapControlTypes<
  Name extends ControlNames,
  C extends Control = Control
> = C extends ControlSchema<Name, infer Type> ? Type : never;

export const buildControlSchema = <
  ControlName extends string,
  Type,
  C extends ControlSchema<ControlName, Type> = ControlSchema<ControlName, Type>
>(
  c: C
) => c;
