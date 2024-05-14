import Image from "next/image";

interface SectionCardProps {
  title: string;
  body: string;
  imageOne?: string | undefined;
  imageTwo?: string | undefined;
}

const SectionCard = ({ title, body, imageOne, imageTwo }: SectionCardProps) => {
  return (
    <div className="bg-white outline outline-[#E70002] outline-1 rounded-lg  px-3">
      <div className="py-6">
        <h1 className="text-lg font-medium mb-1.5">{title}</h1>
        <p className="text-[13px]">{body}</p>{" "}
      </div>

      {imageOne && (
        <div>
          <Image src={imageOne} alt="financing" className="rounded-t-lg " />
        </div>
      )}

      {imageTwo && (
        <div className="relative">
          <Image
            src={imageTwo}
            alt="financing"
            className="rounded-t-lg  md:absolute left-0 md:mt-[20.5px] md:w-[520px]"
          />
        </div>
      )}
    </div>
  );
};

export default SectionCard;
