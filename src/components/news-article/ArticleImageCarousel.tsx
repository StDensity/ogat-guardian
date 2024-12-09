import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Asset } from "contentful";
import Image from "next/image";

interface ImageCarouselProps {
  imageData:
    | (Asset<"WITHOUT_UNRESOLVABLE_LINKS", "en-US"> | undefined)[]
    | undefined;
}

const ArticleImageCarousel = (props: ImageCarouselProps) => {
  return props.imageData ? (
    <Carousel className="mr-14">
      <CarouselContent>
        {props.imageData.map((item) => {
          return (
            <CarouselItem
              key={item?.sys.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                className="h-[500px] w-[800px] object-contain"
                src={`https:${item?.fields.file?.url}`}
                height={500}
                width={400}
                alt={item?.fields.title || ""}
              />
              <div className="pt-4 text-sm text-gray-500">
                {item?.fields.title}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ) : (
    <div className="flex justify-center">
      <Image
        className="h-[500px] w-[800px] object-contain"
        src={"/ogat_guardian_img.png"}
        height={400}
        width={400}
        alt="Placeholder image"
      />
    </div>
  );
};

export default ArticleImageCarousel;
