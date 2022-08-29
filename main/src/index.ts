import {
  buildBlockSchema,
  buildControlSchema,
  InferBlockPropsFromControl,
} from "library";

export const firstControl = buildControlSchema<"Test 1", number>({
  name: "Test 1",
});

export const secondControl = buildControlSchema<"Test 2", string>({
  name: "Test 2",
});

export const controls = [firstControl, secondControl];

export type MyControls = typeof controls[number];

export var firstBlock = buildBlockSchema<"First block">({
  title: "First block",
  controls: {
    testOne: {
      name: "Test 1", // <--- Autocomplete is lost
    },
    testTwo: {
      name: "Test 2", // <--- Autocomplete is lost
    },
  },
});

export var secondBlock = buildBlockSchema<"Second block">({
  title: "Second block",
  controls: {
    second: {
      name: "Test 2", // <--- Autocomplete is lost
    },
    block: {
      name: "Test 1", // <--- Autocomplete is lost
    },
  },
});

export const blocks = [firstBlock, secondBlock];

export type MyBlocks = typeof blocks[number];

// Types don't work
export type NewSchemaProps = InferBlockPropsFromControl<typeof firstBlock>;

/* Expected result(doesn't work):
    NewSchemaProps = {
      testOne: number;
      testTwo: string;
    }
  */
