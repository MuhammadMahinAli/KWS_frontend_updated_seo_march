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
      alt: 'NFT ClosetX — Web3 fashion marketplace with AR/VR assets and digital-to-physical product claims by KWS Technology',
    },
    {
      title: 'Research Buddy',
      category: 'Unified platform for Research tools',
      image: researchBuddyImg,
      alt: 'ResearchBuddy — AI-powered research and project management collaboration platform by KWS Technology',
    },
    {
      title: 'DataM',
      category: 'AI Mentor for Business owners',
      image: datamImg,
      alt: 'DataM — AI business mentor platform for founders with strategic insights and decision support by KWS Technology',
    },
    {
      title: 'Pinata Themes',
      category: 'Web and Mobile UI design templates Platform',
      image: pinataImg,
      alt: 'Pinata Themes — multi-design web theme and template platform for fast product launches by KWS Technology',
    },
  ];

  return (
    <section className="py-12 px-6 md:px-[110px]">
      <div className="max-w-[1280px] mx-auto md:px-6">
        <h2 className="font-semibold text-[18px] md:text-[24px] text-[#121212] leading-[28px] md:leading-[32px] mb-8 md:mb-12">
          AI Agent Portfolio &amp; Case Studies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[284/213] bg-[#e5e7eb] rounded-[16px] overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={284}
                  height={213}
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