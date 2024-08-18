type NumberDataType = {
  data: number;
};

type StringDataType = {
  data: string;
};

type BooleanDataType = {
  data: boolean;
};

type MagicDataType<T> = {
  data: T;
};

function function1<T>({ data }: MagicDataType<T>) {
  console.log(data);
}

function1<{
  age: number;
  name: string;
}>({
  data: {
    age: 1,
    name: "name",
  },
});
