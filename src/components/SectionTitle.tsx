type SectionTitleType = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleType) => {
  return (
    <div className="block mt-6 w-fit px-2 md:px-4 mx-auto  py-0.5 md:py-1.5 rounded-full bg-yellow-400/10 text-yellow-300 text-sm md:text-base">
      {title}
    </div>
  );
};

export default SectionTitle;
