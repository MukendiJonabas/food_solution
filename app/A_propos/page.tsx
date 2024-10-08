import Image from "next/image";
import dev from "@/public/ops.jpg";
import DecouvSection2 from "@/components/decouvsection2";
import DecouvSection1 from "@/components/decouvsection1";
import DecouvSection3 from "@/components/decouvsection3";

export default function Page() {
  return (
    <div>
      <DecouvSection1 />
      <DecouvSection2 />
    </div>
  );
}
