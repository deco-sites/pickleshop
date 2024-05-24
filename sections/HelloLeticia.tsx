interface Props {
  /**
   * @description The text to display in the heading.
   * @default "Hello, Letícia!"
   */
  headingText?: string;
}

export default function Banner({ headingText = "Hello, Letícia!" }: Props) {
  return (
    <section class="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
      <div class="container mx-auto text-center">
        <h1 class="text-6xl font-bold text-white">{headingText}</h1>
      </div>
    </section>
  );
}