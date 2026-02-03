function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] tracking-[-0.45px]">
        <p className="css-ew64yg leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M4 5H20M4 12H20M4 19H20" id="Vector" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="iconify-icon">
      <Svg />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <IconifyIcon />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Link />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(247,245,239,0.85)] content-stretch flex flex-col items-start pb-px relative size-full" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.03)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container />
    </div>
  );
}