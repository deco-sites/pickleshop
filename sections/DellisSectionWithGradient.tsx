interface Props {
  /**
   * @description The main heading text.
   * @format textarea
   */
  heading?: string;
  /**
   * @description The background gradient colors, comma separated.
   * @format color-input
   */
  gradientColors?: string;
}

export default function LoveMessage({ heading = "I love you, Dellis!", gradientColors = "#ff0080, #7928ca" }: Props) {
  return (
    <section class={`bg-gradient-to-r from-[${gradientColors.split(',')[0]}] to-[${gradientColors.split(',')[1]}] py-20`}>
      <div class="container mx-auto text-center">
        <h1 class="text-6xl md:text-8xl font-bold text-white">{heading}</h1>
      </div>
    </section>
  );
}