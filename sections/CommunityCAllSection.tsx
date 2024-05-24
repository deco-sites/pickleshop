interface Props {
  /**
   * @description The text to display in the heading.
   * @format textarea
   */
  headingText?: string;
}

export default function HelloCommunityCall({ headingText = "Hello Community Call" }: Props) {
  return (
    <section class="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-20">
      <div class="container mx-auto text-center">
        <h1 class="text-6xl font-bold mb-4">{headingText}</h1>
      </div>
    </section>
  );
}