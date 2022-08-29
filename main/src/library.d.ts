import "library";
import { MyBlocks, MyControls } from ".";

declare module "library" {
  export interface AllBlocks extends MyBlocks {}
  export interface AllControls extends MyControls {}
}
