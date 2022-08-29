import { buildBlockSchema, InferBlockPropsFromControl } from "./block";
import { buildControlSchema } from "./control";

export const firstControl = buildControlSchema<"Test 1", number>({
  name: "Test 1",
});

export const secondControl = buildControlSchema<"Test 2", string>({
  name: "Test 2",
});

export const controls = [firstControl, secondControl];

// This must be fed back into Library package
export type AllControls = typeof controls[number];

export var firstBlock = buildBlockSchema<"First block">({
  title: "First block",
  controls: {
    testOne: {
      name: "Test 1",
    },
    testTwo: {
      name: "Test 2",
    },
  },
});

export var secondBlock = buildBlockSchema<"Second block">({
  title: "Second block",
  controls: {
    second: {
      name: "Test 2",
    },
    block: {
      name: "Test 1",
    },
  },
});

export const blocks = [firstBlock, secondBlock];

// This must be fed back into Library package
export type AllBlocks = typeof blocks[number];

export type NewSchemaProps = InferBlockPropsFromControl<typeof firstBlock>;

/* Expected result:
    NewSchemaProps = {
      testOne: number;
      testTwo: string;
    }
  */
