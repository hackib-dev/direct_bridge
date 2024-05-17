import Image from "next/image";

interface ReviewCardProps {
  review: string;
  name: string;
  position: string;
  image: string | undefined;
}

const ReviewCard = ({ review, name, position, image }: ReviewCardProps) => {
  return (
    <div className="mt-4 w-[488px] text-sm flex flex-col border border-primary rounded-lg py-3 md:py-6 px-3 md:px-7">
      <div className="">
        <p>{review}</p>
      </div>
      <div className="flex mt-3">
        {image && (
          <div>
            <Image src={image} alt="reviews" />
          </div>
        )}
        <div className="ml-3">
          <p>{name}</p>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
