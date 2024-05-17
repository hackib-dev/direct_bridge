import ReviewCard from "./ReviewCard";
import { ProfileIcon } from "../../../assets";

const generateReviewCards = (count: number, animateClass: string) => {
  const reviewCards = [];
  for (let i = 0; i < count; i++) {
    reviewCards.push(
      <ReviewCard
        key={i}
        review={
          '"The speed and ease of integrating with the product was incredible, but what really stood out was their intricate knowledge of email and relentless support day or night. Oh and we also ended up winning Product of the week."'
        }
        name={"Lola Anderson"}
        position={"Founder of Fowa Naturals"}
        image={ProfileIcon}
      />
    );
  }
  return (
    <div
      className={`flex animate-${animateClass} absolute left-0 top-0 md:gap-3 h-full w-full`}
    >
      {reviewCards}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="px-5 md:px-20">
      <div className="my-5 md:my-20">
        <h1 className="mx-auto text-3xl md:text-4xl text-left md:text-center font-medium w-full md:w-[500px] mb-3">
          Our users tell beautiful stories about us
        </h1>
        <p className="text-left md:text-center text-[#595959] md:px-40">
          Grow your business with our suite of growth tools like: commercial
          grade bank account, intelligent inventory management system, financial
          management tools and many more.
        </p>
      </div>
      <div className="">
        <div className=" w-[1400px] h-[200px] relative ">
          {generateReviewCards(3, "primary")}
          {generateReviewCards(3, "secondary")}
        </div>
        <div className=" w-[1400px] h-[200px] relative ">
          {generateReviewCards(3, "primary_right")}
          {generateReviewCards(3, "secondary_right")}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
