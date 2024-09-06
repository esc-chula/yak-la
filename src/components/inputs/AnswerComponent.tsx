import AnswerButton from "./AnswerButton";

import type IAnswer from "@/types/answer";

const AnswerComponent = ({
  answers,
  redirectUrl,
  center = false
}: {
  answers: IAnswer[];
  redirectUrl?: string;
  center?: boolean;
}) => {
  return (
    <div
      className={`${
        center
          ? "fixed inset-0 flex justify-center items-center"
          : "absolute bottom-10 w-full flex justify-center"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        {answers.map((answer: IAnswer, idx: number) => (
          <AnswerButton
            key={idx}
            text={answer.text}
            attribute={answer.attribute}
            redirectUrl={answer.redirectUrl||redirectUrl||""}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswerComponent;
