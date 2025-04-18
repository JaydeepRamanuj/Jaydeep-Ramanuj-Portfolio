type SectionTitleType = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleType) => {
  return (
    <div className="block px-3 py-1 w-fit mx-auto rounded-full bg-slate-600 text-gray-300">
      {title}
    </div>
  );
};

export default SectionTitle;
