import { Control, ControlSchema, MapControlTypes } from "./control";

// This should return the title of ALL blocks
export type ControlDeclaration<C extends Control = Control> =
  C extends ControlSchema<infer ControlName> ? { name: ControlName } : never;

export type BlockControl = {
  [key: string]: ControlDeclaration;
};

export type BlockSchema<BC extends BlockControl = BlockControl> = {
  title: string;
  controls: BC;
};

export interface AllBlocksInterface extends BlockSchema {}
export type AllBlocksType<T extends BlockSchema = BlockSchema> = T;

export type Block = AllBlocksType | AllBlocksInterface;

// Ref: https://stackoverflow.com/questions/71785211/how-to-infer-types-of-an-object-created-from-a-schema
export type InferBlockPropsFromControl<BS> = BS extends BlockSchema<infer BC>
  ? { [P in keyof BC]: MapControlTypes<BC[P]["name"]> }
  : never;

// Ref: https://stackoverflow.com/questions/71785211/how-to-infer-types-of-an-object-created-from-a-schema
export const buildBlockSchema = <
  BC extends BlockControl,
  B extends BlockSchema<BC> = BlockSchema<BC>
>(
  b: B
) => b;
