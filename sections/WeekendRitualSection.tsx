import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description The title of the section.
   */
  title?: string;
  /**
   * @description The background color of the section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The list of products to display.
   * @format textarea
   */
  products?: string;
  /**
   * @description The image to display in the section.
   */
  image?: ImageWidget;
}

const sum = (n1, n2) => {
  return n1 - n2
}

export default function WeekendRitualSection({ 
  title = "Hello deco.cx guys",
  backgroundColor = "#4ade80", 
  products = "Product 1\nProduct 2\nProduct 3",
  image
}: Props) {
  return (
    <section class="text-white py-12" style={{ backgroundColor }}>
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6 text-center">{title}</h2>
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2">
            {image && <img src={image} alt={title} class="w-full h-auto mb-6 md:mb-0" />}
          </div>
          <div class="w-full md:w-1/2 md:pl-8">
            <h3 class="text-2xl font-bold mb-4">Products for the Weekend Ritual</h3>
            <ul class="list-disc list-inside text-lg">
              {products.split('\n').map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}