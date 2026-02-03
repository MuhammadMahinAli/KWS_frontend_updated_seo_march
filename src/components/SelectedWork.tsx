import nftClosetImg from '../assets/nftcloset_logo.png';
import researchBuddyImg from '../assets/Research_Buddy.png';
import datamImg from '../assets/DatamLogo.png';
import pinataImg from '../assets/Pinata_Themes.png';

export function SelectedWork() {
  const projects = [
    {
      title: 'NFT Closet X',
      category: 'Fashion NFT Marketplace',
      image: nftClosetImg,
    },
    {
      title: 'Research Buddy',
      category: 'Unified platform for Research tools',
      image: researchBuddyImg,
    },
    {
      title: 'DataM',
      category: 'AI Mentor for Business owners',
      image: datamImg,
    },
    {
      title: 'Pinata Themes',
      category: 'Web and Mobile UI design templates Platform',
      image: pinataImg,
    },
  ];

  return (
    <section className="py-12 px-6 md:px-[110px]">
      <div className="max-w-[1280px] mx-auto md:px-6">
        <h2 className="font-semibold text-[18px] md:text-[24px] text-[#121212] leading-[28px] md:leading-[32px] mb-8 md:mb-12">
          Selected work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[284/213] bg-[#e5e7eb] rounded-[16px] overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-medium text-[14px] md:text-[16px] text-[#121212] leading-[20px] md:leading-[24px] mb-1 group-hover:text-[#6b7280] transition-colors">
                {project.title}
              </h3>
              <p className="font-normal text-[12px] text-[#6b7280] leading-[16px]">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}