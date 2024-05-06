interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function TestingPersistency({ name = "World" }: Props) {
  return <div>Hello {name}</div>;
}
