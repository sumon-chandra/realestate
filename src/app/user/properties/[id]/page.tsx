import { getProperty } from "@/lib/actions/get-property";
import { FC } from "react";

interface Props {
  params: { id: string };
}

const PropertyPage: FC<Props> = async ({ params }) => {
  const data = await getProperty(parseInt(params.id));
  console.log(data);

  return (
    <main className="container">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {data.name}
      </h2>
    </main>
  );
};

export default PropertyPage;
