import React from 'react';

const ResumeButton = (props) => {
  return (
    <li className="hover:scale-110 transition ease-in-out delay-100">
      <a
        className="bg-[#385E8F] text-[#ffffff] md:text-lg px-4 py-2 rounded-md ml-8 font-Nunito font-[800] cursor-pointer "
        href="https://resume.creddle.io/resume/j1ryfjyu3f1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    </li>
  );
};

export default ResumeButton;
