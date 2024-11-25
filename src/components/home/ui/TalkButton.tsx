import Link from "next/link";

const TalkButton = () => {
  return (
      <div className="flex space-x-4">
          {/* Let's Talk Button (mailto) */}
          <Link
              className="app__filled_btn min-w-[10rem]"
              href="mailto:notifynajish@gmail.com?subject=Let's%20Talk&body=Hi%20there,%0A%0AI%20would%20like%20to%20get%20in%20touch."
          >
              Let&apos;s Talk
          </Link>

          {/* Download CV Button */}
          <Link
              className="app__filled_btn min-w-[10rem]"
              href="https://drive.google.com/file/d/1JDmBvULFRoaC4rdEwkKdOxYz5kU_MlgS/view?usp=sharing"
              target="_blank"
          >
              Download CV
          </Link>
      </div>
  );
};

export default TalkButton;
