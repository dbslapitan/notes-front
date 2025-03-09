import { text } from "@/lib/css-presets";
import Image from "next/image";
import tagSrc from "../../public/icons/icon-tag.svg"

export default function Tags({ tags }: { tags: string[] }) {

  return (
    <section>
      <h2 className={`${text["preset-1"]}`}>Tags</h2>
      <ul className="mt-4 gap-1">
        {
          tags.map(tag => {
            return (
              <li key={tag}>
                <button className="w-full flex py-2.5 border-b gap-2">
                  <Image src={tagSrc} alt=""/>
                  {tag}
                </button>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}