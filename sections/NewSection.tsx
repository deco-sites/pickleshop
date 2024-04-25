interface Props {
  /**
  * @description The name of the person.
  */
  name?: string;
  /**
  * @description The description of the section.
  */
  description?: string;
}

export default function Section({ name = "Capy", description = "This is a default description" }: Props) {
  return (
    <div class="bg-white p-8 rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-4">{name}'s Section</h2>
      <p class="text-gray-600">{description}</p>
    </div>
  )
} 