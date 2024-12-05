import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { newsImagesType } from "@/types/contentful";
import Image from "next/image";

interface ImageCarouselProps {
  imageData: newsImagesType[];
}

const ArticleImageCarousel = (props: ImageCarouselProps) => {
  return (
    <Carousel className="mr-14">
      <CarouselContent>
        {props.imageData.map((item) => {
          return (
            <CarouselItem
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                className="h-[500px] w-[800px] object-contain"
                src={item.fields.url}
                height={500}
                width={400}
                alt={item.fields.title}
              />
              <div className="pt-4 text-sm text-gray-500">
                {item.fields.title}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ArticleImageCarousel;
