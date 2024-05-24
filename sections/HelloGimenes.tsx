import { HTMLWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @description The main title text.
   * @format textarea
   */
  title?: string;
  /**
   * @description The content of the section.
   */
  content?: HTMLWidget;
  /**
   * @description The background color of the section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The text color of the section.
   * @format color-input
   */
  textColor?: string;
}

export default function HelloSection({ 
  title = "Hello Gimenes", 
  content = "<p>This is a sample paragraph saying hello to Gimenes.</p><p>You can add more paragraphs and customize the content using the HTML editor.</p>", 
  backgroundColor = "#ffffff",
  textColor = "#000000"
}: Props) {
  return (
    <section class="py-12" style={{ backgroundColor, color: textColor }}>
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold mb-6 text-center">{title}</h2>
        <div class="max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}