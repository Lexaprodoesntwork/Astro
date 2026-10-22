import { createSignal, type Component, type JSX } from 'solid-js';

interface Props {
  initValue: number;
  children?: JSX.Element;
}

const [counter, setCounter] = createSignal(20);

export const Counter: Component<Props> = (props) => {
  return (
    <>
      {props.children}

      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        onClick={() => setCounter((prev) => prev + 1)}
        class="bg-blue-500 p-2 mr-2 rounded"
      >
        +1
      </button>

      <button
        onClick={() => setCounter((prev) => prev - 1)}
        class="bg-blue-500 p-2 mr-2 rounded"
      >
        -1
      </button>
    </>
  );
};