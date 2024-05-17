import { useState, useEffect } from "preact/hooks";

const thankyouList = [
  "thank you",
  "gracias",
  "धन्यवाद",
  "merci",
  "danke",
  "ありがとう",
  "谢谢",
  "Спасибо",
  "شكراً",
  "감사합니다",
  "grazie mille",
  "teşekkür ederim",
  "dziękuję",
  "ευχαριστώ",
  "obrigado",
  "tack",
  "шое",
  "mahalo",
  "salamat",
  "děkuji ",
];

const ThankYou = () => {
  const [currThank, setCurrThank] = useState(thankyouList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = thankyouList.indexOf(currThank);
      const nextIndex = (currentIndex + 1) % thankyouList.length;
      setCurrThank(thankyouList[nextIndex]);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [currThank]);

  return (
    <div class="grid place-content-end text-2xl font-semibold w-full diff-font-one">
      <p>
        {currThank === "شكراً" && "!"} {currThank}{" "}
        {currThank !== "شكراً" && "!"}
      </p>
    </div>
  );
};

export default ThankYou;
