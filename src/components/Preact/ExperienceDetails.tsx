import React from "react";
import pkg from "react-vertical-timeline-component";

const { VerticalTimelineElement, VerticalTimeline } = pkg;

import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    title: "Senior Software Developer II",
    company_name: "SOTI",
    icon: "https://media.licdn.com/dms/image/C4E0BAQHETgb9QfxStw/company-logo_200_200/0/1651013588203/soti_logo?e=1724284800&v=beta&t=n0I6raaJ5ThVkq_kvnNxETMOxsN7Uwu7ZxXaFHSWIas",
    iconBg: "#000000",
    date: "Nov 2019 - Current",
    points: [
      "Developed a web application using HTML, CSS, Javascript, PHP, and Bootstrap for the client.",
      "Designed user-friendly UI/UX with responsive designs to make it easy for users to navigate through the website. ",
      "Designed various different websites with responsive designs and dynamic content. ",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Ranosys",
    icon: "https://media.licdn.com/dms/image/C560BAQE9wHnTOIxtXw/company-logo_200_200/0/1630650646042/ranosys_logo?e=1724284800&v=beta&t=nr8dLu3vjWlbbqHnHx_aDiqqM2jfa6nIO40DBb87YvU",
    iconBg: "#000000",
    date: "Jan 2019 - Oct 2019",
    points: [
      "Raised awareness about Internshala across the entire campus.",
      "Encouraged students to explore Internshala training programs and internships.",
      "Motivated students to enhance their skills by utilizing the opportunities provided by Internshala.",
      "I stood 279 out of 21,963 students selected from different colleges across India",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Akeo",
    icon: "https://media.licdn.com/dms/image/C4E0BAQFYlbR5GnT9lQ/company-logo_200_200/0/1630592175327/adelantetechnolabspvtltd_logo?e=1724284800&v=beta&t=tll2CQJnKBFnVB-2WMjf4_ru0qvoEV_K1lRkLm0V944",
    iconBg: "#000000",
    date: "Aug 2017 - Dec 2018",
    points: [
      "Raised awareness about Internshala across the entire campus.",
      "Encouraged students to explore Internshala training programs and internships.",
      "Motivated students to enhance their skills by utilizing the opportunities provided by Internshala.",
      "I stood 279 out of 21,963 students selected from different colleges across India",
    ],
  },
];

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceDetails = () => {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// const ExperienceDetails = () => {
//   return <div>Hello, world!</div>;
// };

export default ExperienceDetails;
