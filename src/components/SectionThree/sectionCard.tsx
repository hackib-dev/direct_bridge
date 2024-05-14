import { ReactNode } from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  body: string;
  subbody?: ReactNode;
  buttonText: string;
}

const SectionCard = ({
  title,
  subtitle,
  body,
  buttonText,
  subbody,
}: SectionCardProps) => {
  return (
    <div>
      <h1 className="font-medium text-3xl w-full md:w-60 mb-3">{title}</h1>
      <p className="text-[#595959] mb-3">{body}</p>
      <h3 className="font-medium mb-3">{subtitle}</h3>
      <div className="text-[#595959] mb-8">{subbody}</div>
      <Button size="lg" icon={<FaArrowRight />}>
        {buttonText}
      </Button>
    </div>
  );
};

export default SectionCard;
