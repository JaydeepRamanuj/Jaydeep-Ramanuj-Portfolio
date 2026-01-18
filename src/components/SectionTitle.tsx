type SectionTitleType = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleType) => {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 pb-2">
        {title}
      </h2>
      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </div>
  );
};

export default SectionTitle;
