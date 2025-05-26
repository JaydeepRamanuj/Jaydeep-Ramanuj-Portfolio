type SectionTitleType = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleType) => {
  return (
    <div className="block mt-6 w-fit px-4 mx-auto py-1.5 rounded-full bg-yellow-400/10 text-yellow-300">
      {title}
    </div>
  );
};

export default SectionTitle;
