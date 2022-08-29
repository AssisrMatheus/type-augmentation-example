import { Control, ControlSchema, MapControlTypes } from "./control";

export type ControlDeclaration<C extends Control = Control> =
  C extends ControlSchema<infer ControlName> ? { name: ControlName } : never;

export type BlockControl = {
  [key: string]: ControlDeclaration;
};

export type BlockSchema<
  BlockTitle extends string = string,
  BC extends BlockControl = BlockControl
> = {
  title: BlockTitle;
  controls: BC;
};

export interface AllBlocksInterface extends BlockSchema {}
export type AllBlocksType<T extends BlockSchema = BlockSchema> = T;

export type Block = AllBlocksType | AllBlocksInterface;

// This should return the title of ALL blocks
export type BlockTitles = Block["title"];

// Ref: https://stackoverflow.com/questions/71785211/how-to-infer-types-of-an-object-created-from-a-schema
export type InferBlockPropsFromControl<BS> = BS extends BlockSchema<
  infer _BlockTitle,
  infer BC
>
  ? { [P in keyof BC]: MapControlTypes<BC[P]["name"]> }
  : never;

// Ref: https://stackoverflow.com/questions/71785211/how-to-infer-types-of-an-object-created-from-a-schema
export const buildBlockSchema = <
  BlockTitle extends string,
  BC extends BlockControl = BlockControl,
  B extends BlockSchema<BlockTitle, BC> = BlockSchema<BlockTitle, BC>
>(
  b: B
) => b;
