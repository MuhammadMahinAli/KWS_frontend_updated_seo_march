import svgPaths from "./svg-8pnkklzkks";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.585px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[50.4px] not-italic relative shrink-0 text-[#121212] text-[48px] text-center tracking-[-2.4px]">
        <p className="css-ew64yg mb-0">Bring AI</p>
        <p className="css-ew64yg">agents to life.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[18px] text-center w-full">
        <p className="css-4hzbpn leading-[28px]">KWS Technology helps founders and teams build secure, scalable AI agents and full-stack products fast, clean, and production-ready research-led engineering</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-1/2 max-w-[768px] min-w-[358px] top-[-0.81px] translate-x-[-50%]" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[289.78px] relative shrink-0 w-[358px]" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[28px] right-[28px] top-[28px]" data-name="Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px]">
        <p className="css-ew64yg leading-[20px]">What do you want your AI agent to do?</p>
      </div>
    </div>
  );
}

function Textarea() {
  return <div className="absolute bg-[#f9fafb] h-[128px] left-[16px] right-[16px] rounded-[12px] top-[60px]" data-name="Textarea" />;
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1c75eb80} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[30px]" data-name="Button">
      <IconifyIcon />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[4px] h-[30px] items-center px-[10px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[11px]">
        <p className="css-ew64yg leading-[20px]">Agent Templates</p>
      </div>
      <IconifyIcon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p22b13100} id="Vector" stroke="var(--stroke-0, #D0EF58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#121212] content-stretch flex gap-[2px] h-[30px] items-center overflow-clip px-[10px] py-[8px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[123px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[20px]">Generate a plan</p>
      </div>
      <IconifyIcon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[4.09px] pl-[7px] py-[12px] right-[3.37px] top-[191.22px]" data-name="Container">
      <Container2 />
      <Button2 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white h-[284px] overflow-clip relative rounded-[24px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] shrink-0 w-[322.19px]" data-name="Background+Shadow">
      <Label />
      <Textarea />
      <Container3 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.7)]">
        <p className="css-ew64yg leading-[16px]">Lead Gen</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.7)]">
        <p className="css-ew64yg leading-[16px]">Clinic Booking</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.7)]">
        <p className="css-ew64yg leading-[16px]">Product Sourcing</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-wrap gap-[0px_12px] items-start justify-center left-[9.97px] opacity-0" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex h-[480px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Background+Shadow">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.1)] inset-0 to-[rgba(255,255,255,0)]" data-name="Gradient" />
      <BackgroundShadow />
      <Container4 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_60px_0px_rgba(255,255,255,0.4)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Container">
      <BackgroundShadow1 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] px-[16px] relative shrink-0 w-[390px]" data-name="Section">
      <Margin />
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black tracking-[0.225px] w-full">
        <p className="css-4hzbpn leading-[40px]">Elevate your CX with AI agents proven to outperform humans</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-full">
        <p className="css-4hzbpn leading-[48px]">8X</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px]">
        <p className="css-ew64yg leading-[26px]">more productive than human agents</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[241px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[87px] items-start p-[32px] relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[242px] items-start overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Border+Shadow">
      <Container8 />
      <div className="absolute bg-[#00533d] bottom-0 left-0 top-0 w-[13px]" data-name="Background" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-full">
        <p className="css-4hzbpn leading-[48px]">162%</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
        <p className="css-4hzbpn leading-[26px]">{`increase in  CSAT scores`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[241px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[87px] items-start p-[32px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[242px] items-start overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Border+Shadow">
      <Container11 />
      <div className="absolute bg-[#febcfa] bottom-0 left-[-0.75px] top-0 w-[13px]" data-name="Background" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-full">
        <p className="css-4hzbpn leading-[48px]">357%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[26px] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">{`ROI on `}</p>
        <p className="css-4hzbpn">AI investment</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[241px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[87px] items-start p-[32px] relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[242px] items-start overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Border+Shadow">
      <Container14 />
      <div className="absolute bg-[#aaccf9] bottom-0 left-[-1.5px] top-0 w-[13px]" data-name="Background" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black w-full">
        <p className="css-4hzbpn leading-[48px]">84%</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
        <p className="css-4hzbpn leading-[26px]">automated resolution rate</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[242px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[87px] items-start p-[32px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[242px] items-start overflow-clip relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Border+Shadow">
      <Container17 />
      <div className="absolute bg-[#fde789] bottom-0 left-[-1.25px] top-0 w-[13px]" data-name="Background" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[337px]" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] h-[1227px] items-center max-w-[1280px] py-[25px] relative shrink-0 w-[366px]" data-name="Container">
      <Heading1 />
      <Container18 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[36px] not-italic relative shrink-0 text-[#121212] text-[30px] tracking-[-0.75px] w-full">
        <p className="css-4hzbpn mb-0">AI agents for every</p>
        <p className="css-4hzbpn">workflow.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.6667">
          <g id="Group">
            <path d={svgPaths.p2893e740} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1565aa00} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex items-center justify-center left-[33px] rounded-[8px] size-[40px] top-[33px]" data-name="Background">
      <IconifyIcon3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[97px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Lead Generation Agents</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.625px] right-[33px] top-[131.88px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Find, qualify, and follow up automatically</p>
        <p className="css-ew64yg">with zero human friction.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background />
        <Heading2 />
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.34%_8.33%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 18.3316">
          <g id="Group">
            <path d={svgPaths.p21cf76c0} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.pcea2f80} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p119a38f0} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1e52ee00} id="Vector_4" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex items-center justify-center left-[33px] rounded-[8px] size-[40px] top-[33px]" data-name="Background">
      <IconifyIcon4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[97px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Product Sourcing Agents</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.625px] right-[33px] top-[131.88px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Discover suppliers, compare prices, and</p>
        <p className="css-ew64yg">build shortlists fast.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background1 />
        <Heading6 />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3333">
          <g id="Group">
            <path d={svgPaths.p1e11dac0} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p366b7880} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p158fed6f} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex items-center justify-center left-[33px] rounded-[8px] size-[40px] top-[33px]" data-name="Background">
      <IconifyIcon5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[97px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Appointment Booking</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.625px] right-[33px] top-[131.88px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Voice + chat booking systems that never</p>
        <p className="css-ew64yg">sleep and sync instantly.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background2 />
        <Heading7 />
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <g id="Group">
            <path d={svgPaths.p1c971100} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2843cf00} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p3dc8ab00} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex items-center justify-center left-[33px] rounded-[8px] size-[40px] top-[33px]" data-name="Background">
      <IconifyIcon6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[97px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Workflow Automation</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.625px] right-[33px] top-[131.88px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Complex n8n pipelines that connect your</p>
        <p className="css-ew64yg">entire tech stack.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background3 />
        <Heading8 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3333">
          <g id="Group">
            <path d={svgPaths.p202b4800} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p171aee00} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2b22a600} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex items-center justify-center left-[33px] rounded-[8px] size-[40px] top-[33px]" data-name="Background">
      <IconifyIcon7 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[97px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">CRM Automation</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.625px] right-[33px] top-[131.88px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Update records, set reminders, and</p>
        <p className="css-ew64yg">generate reporting automatically.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background4 />
        <Heading9 />
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <g id="Group">
            <path d={svgPaths.p15e26f80} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p13b69400} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p7a3d980} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex items-center justify-center left-[33px] rounded-[8px] size-[40px] top-[33px]" data-name="Background">
      <IconifyIcon8 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[97px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Custom Agents</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[0.625px] right-[33px] top-[131.88px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Built specifically to your tools, unique</p>
        <p className="css-ew64yg">business rules, and data.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-white h-[211.5px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Background5 />
        <Heading10 />
        <Container25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_-4px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
      <BackgroundBorderShadow7 />
      <BackgroundBorderShadow8 />
      <BackgroundBorderShadow9 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] px-[24px] relative shrink-0 w-[390px]" data-name="Section">
      <Heading5 />
      <Container26 />
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-start px-[13px] py-[4.5px] relative rounded-[9999px] shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d0ef58] text-[12px] tracking-[0.3px] uppercase">
        <p className="css-ew64yg leading-[16px]">Featured Product</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-5px]" data-name="Container">
      <Border />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container27 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[36px] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.75px] w-full">
        <p className="css-4hzbpn mb-0">Appointment</p>
        <p className="css-4hzbpn">Booking AI Agent</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading11 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #D0EF58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Voice + WhatsApp booking</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon9 />
      <Container28 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #D0EF58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[61.89px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px]">
        <p className="css-ew64yg leading-[20px]">{`Ai driven scheduling & calendars`}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon10 />
      <Container29 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #D0EF58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Auto reminders and follow-ups</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon11 />
      <Container30 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #D0EF58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px]">
        <p className="css-ew64yg leading-[20px]">CRM updates + analytics</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon12 />
      <Container31 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] relative shrink-0 w-full" data-name="List:margin">
      <List />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Book Demo</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white">
        <p className="css-ew64yg leading-[20px]">See Features</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[40px] relative w-full">
          <Margin1 />
          <Heading2Margin />
          <ListMargin />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p24dfa740} id="Vector" stroke="var(--stroke-0, #4D7C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(208,239,88,0.2)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconifyIcon13 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#e5e7eb] h-[12px] rounded-[9999px] shrink-0 w-[96px]" data-name="Background" />
      <Overlay />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] self-stretch shrink-0 w-[181.19px]" data-name="Background">
      <div className="bg-[#d1d5db] h-[8px] opacity-50 rounded-[4px] shrink-0 w-full" data-name="Background" />
      <div className="bg-[#d1d5db] h-[8px] opacity-50 rounded-[4px] shrink-0 w-[104.78px]" data-name="Background" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#f3f4f6] rounded-[9999px] shrink-0 size-[32px]" data-name="Background" />
      <Background6 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#365314] text-[12px]">
          <p className="css-ew64yg leading-[16px]">Booking confirmed...</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(208,239,88,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(208,239,88,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[17px] relative w-full">
          <div className="bg-[#d0ef58] h-[12px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#d0ef58] h-[24px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#d0ef58] h-[16px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#d0ef58] h-[32px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#d0ef58] h-[20px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <div className="bg-[#d0ef58] h-[12px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px]">
        <p className="css-ew64yg leading-[16px]">14:00</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[16px]">Dr. Sarah • Dental Checkup</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#121212] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12.01px] items-center p-[12px] relative w-full">
          <Background7 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <OverlayBorder />
      <Background8 />
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start max-w-[360px] overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[273.59px]" data-name="Background+Shadow">
      <HorizontalBorder />
      <Container36 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#111827] content-stretch flex items-center justify-center min-h-[400px] overflow-clip py-[60.5px] relative shrink-0 w-full z-[1]" data-name="Background">
      <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "linear-gradient(49.4696deg, rgb(18, 18, 18) 0%, rgb(31, 41, 55) 100%)" }} />
      <BackgroundShadow2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[32px] shrink-0 w-[342px]" data-name="Section">
      <Container33 />
      <Background9 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[30px] text-center tracking-[-0.75px] w-[298px]">
        <p className="css-4hzbpn leading-[36px]">From idea to production—fast.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[266px]">
        <p className="css-4hzbpn leading-[22.75px]">We map your workflow and identify high-value automation targets.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[274px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] w-full">
        <p className="css-4hzbpn leading-[28px]">Discover</p>
      </div>
      <Container37 />
    </div>
  );
}

function Heading3() {
  return <div className="absolute h-[28px] left-0 right-0 top-[72px]" data-name="Heading 4" />;
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow10 />
      <Frame3 />
      <Heading3 />
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Design</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[255px]">
        <p className="css-4hzbpn leading-[22.75px]">Architecting the agent logic, prompts, and tool integration.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative">
      <Heading13 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow11 />
      <Frame />
    </div>
  );
}

function BackgroundBorderShadow12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Build</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[255px]">
        <p className="css-4hzbpn leading-[22.75px]">Rapid development of custom agents and n8n pipelines.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative">
      <Heading14 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow12 />
      <Frame1 />
    </div>
  );
}

function BackgroundBorderShadow13() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(163,230,53,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Deploy</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[255px]">
        <p className="css-4hzbpn leading-[22.75px]">Launch to production with monitoring and maintenance included.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-h-px min-w-px relative">
      <Heading15 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow13 />
      <Frame2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex h-[412px] items-center justify-center left-[24px] right-[317px] top-[0.22px]">
        <div className="flex-none h-px rotate-[-90deg] w-[412px]">
          <div className="bg-[#e5e7eb] size-full" data-name="Horizontal Divider" />
        </div>
      </div>
      <Container38 />
      <Container40 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] px-[24px] relative shrink-0 w-[390px]" data-name="Section">
      <Heading12 />
      <Container45 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[30px] text-center tracking-[-0.75px]">
        <p className="css-ew64yg leading-[36px]">Interactive demo</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#737373] text-[16px] text-center">
        <p className="css-ew64yg mb-0">Select an industry, then tap a service to</p>
        <p className="css-ew64yg">preview the experience.</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Container46 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Select an industry</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="h-[54px] relative shrink-0 w-[342px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center overflow-clip pl-[305px] pr-[13px] py-[15px] relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex items-start p-px relative rounded-[12px] shrink-0 w-[344px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <ImageFill />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Options />
    </div>
  );
}

function Heading17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="css-4hzbpn leading-[16px]">Scheduling</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black">
          <p className="css-ew64yg leading-[20.4px]">See Bookin</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#bdff00] relative rounded-[12px] shrink-0 w-[348.84px]" data-name="Button">
      <div className="content-stretch flex items-center overflow-clip pb-[13.26px] pt-[12.45px] px-[17.34px] relative rounded-[inherit] w-full">
        <Container49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[345.42px]" data-name="Button:css-transform">
      <Button5 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Waitlist</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Rescheduling</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-end relative shrink-0 w-full" data-name="Container">
      <ButtonCssTransform />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Container52 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="css-4hzbpn leading-[16px]">AI Skincare Chatbot</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">See AI Skincare Chatbot</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Routine recommendations</p>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Product suggestions</p>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 right-0 top-[682px]" data-name="Container">
      <Container53 />
      <Container58 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="css-4hzbpn leading-[16px]">Client Engagement</p>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Lead follow-up + reminders</p>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">FAQ + pricing + aftercare replies</p>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Reviews/Feedback</p>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading19 />
      <Container63 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="content-stretch flex flex-col items-start pl-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="css-4hzbpn leading-[16px]">{`CRM & Workflow`}</p>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">See CRM Updates</p>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
          <p className="css-ew64yg leading-[20px]">Reporting summaries</p>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading20 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 right-0 top-[1110px]" data-name="Container">
      <Container64 />
      <Container68 />
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Img">
          <path d={svgPaths.pd320180} id="Vector" stroke="var(--stroke-0, #65A30D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(189,255,0,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Img />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-center pb-[16px] px-[106px] relative shrink-0 w-[276px]" data-name="Margin">
      <Overlay1 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[18px] text-center">
        <p className="css-ew64yg leading-[28px]">Confirmed</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container70 />
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-px py-[13px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center">
        <p className="css-ew64yg leading-[20px]">Done</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Button:margin">
      <Button16 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <Margin3 />
          <Margin4 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[324px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pb-[16px] pt-[40px] relative rounded-[inherit] size-full">
        <Background10 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black">
        <p className="css-ew64yg leading-[15px]">9:41</p>
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p10133180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.pf70c400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Group">
      <div className="absolute inset-[-8.33%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
          <g id="Group">
            <path d={svgPaths.p1e9a1600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3c77fa00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <Group6 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative self-stretch shrink-0" data-name="Container">
      <Img1 />
      <Img2 />
      <Img3 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute left-[8px] right-[8px] top-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[16px] px-[24px] relative w-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow14() {
  return (
    <div className="bg-[#111] h-[650px] relative rounded-[56px] shrink-0 w-[340px]" data-name="Background+Border+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Background11 />
        <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-[16px] h-[4px] left-1/2 rounded-[9999px] translate-x-[-50%] w-[128px]" data-name="Overlay" />
        <div className="absolute bg-black h-[28px] left-1/2 rounded-bl-[16px] rounded-br-[16px] top-[8px] translate-x-[-50%] w-[128px]" data-name="Background" />
        <Container73 />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#111] border-solid inset-0 pointer-events-none rounded-[56px] shadow-[0px_0px_0px_1px_rgba(17,17,17,0.1),0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black">
        <p className="css-ew64yg leading-[15px]">9:41</p>
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.p10133180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Img5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Img">
          <path d={svgPaths.pf70c400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Group">
      <div className="absolute inset-[-8.33%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
          <g id="Group">
            <path d={svgPaths.p1e9a1600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3c77fa00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Img">
      <Group7 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative self-stretch shrink-0" data-name="Container">
      <Img4 />
      <Img5 />
      <Img6 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute left-[8px] right-[8px] top-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[16px] px-[24px] relative w-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow15() {
  return (
    <div className="bg-[#111] h-[650px] relative rounded-[56px] shrink-0 w-[340px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <BackgroundBorderShadow14 />
        <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-[16px] h-[4px] left-1/2 rounded-[9999px] translate-x-[-50%] w-[128px]" data-name="Overlay" />
        <div className="absolute bg-black h-[28px] left-1/2 rounded-bl-[16px] rounded-br-[16px] top-[8px] translate-x-[-50%] w-[128px]" data-name="Background" />
        <Container76 />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#111] border-solid inset-0 pointer-events-none rounded-[56px] shadow-[0px_0px_0px_1px_rgba(17,17,17,0.1),0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bottom-[-32px] content-stretch flex gap-[8px] items-start left-[45.32%] right-[45.32%]" data-name="Container">
      <div className="bg-black h-[8px] rounded-[9999px] shrink-0 w-[16px]" data-name="Background" />
      <div className="bg-[rgba(0,0,0,0.2)] rounded-[9999px] shrink-0 size-[8px]" data-name="Overlay" />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 right-0 top-0" data-name="Container">
      <BackgroundBorderShadow15 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[1459px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container69 />
      <Container78 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="relative shrink-0 w-[276px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[18px]">
          <p className="css-ew64yg leading-[28px]">Services for this industry</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-[276px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">
          <p className="css-ew64yg mb-0">What we typically deliver for this client</p>
          <p className="css-ew64yg">type.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[26px] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Appointment booking + rescheduling</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[26px] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Lead follow-up + reminders</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[26px] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">FAQ + pricing + aftercare replies</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[26px] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">AI Skincare Chatbot</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[26px] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Routine recommendations</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[26px] items-start px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Product suggestions</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 w-[276px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center pt-[16px] relative w-full">
        <BackgroundBorder />
        <BackgroundBorder1 />
        <BackgroundBorder2 />
        <BackgroundBorder3 />
        <BackgroundBorder4 />
        <BackgroundBorder5 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow16() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[33px] pt-[57px] px-[33px] relative w-full">
        <Heading21 />
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[2197px] items-start max-w-[1280px] px-[24px] py-[48px] relative shrink-0 w-[390px]" data-name="Section">
      <Container47 />
      <Container48 />
      <Container79 />
      <BackgroundBorderShadow16 />
    </div>
  );
}

function IconifyIconSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="iconify-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="iconify-icon â SVG">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIconMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="iconify-icon:margin">
      <IconifyIconSvg />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[20px]">View all services</p>
      </div>
      <IconifyIconMargin />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px]">
          <p className="css-ew64yg leading-[32px]">More from KWS</p>
        </div>
        <LinkMargin />
      </div>
    </div>
  );
}

function IconifyIconSvg1() {
  return (
    <div className="absolute left-[25px] size-[24px] top-[25px]" data-name="iconify-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconify-icon â SVG">
          <path d={svgPaths.p1a9690c0} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[65px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Web Development</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[93px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[20px]">High-performance custom web apps.</p>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white h-[138px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconifyIconSvg1 />
      <Heading22 />
      <Container83 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p21cd2d00} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p34e4f440} id="Vector_2" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pbded780} id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconifyIconSvg2() {
  return (
    <div className="absolute left-[25px] size-[24px] top-[25px]" data-name="iconify-icon → SVG">
      <Group8 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[65px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Pinata Themes</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[93px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Premium templates for modern brands.</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-white h-[138px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconifyIconSvg2 />
      <Heading23 />
      <Container84 />
    </div>
  );
}

function IconifyIconSvg3() {
  return (
    <div className="absolute left-[25px] size-[24px] top-[25px]" data-name="iconify-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconify-icon â SVG">
          <path d={svgPaths.p2dd2f900} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[65px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">{`Integrations & Maintenance`}</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] right-[25px] top-[93px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg mb-0">Keeping your systems connected and</p>
        <p className="css-ew64yg">running.</p>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white h-[158px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconifyIconSvg3 />
      <Heading24 />
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <BackgroundBorder6 />
        <BackgroundBorder7 />
        <BackgroundBorder8 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] pt-[25px] px-[24px] relative shrink-0 w-[390px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container82 />
      <Container86 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px] w-full">
        <p className="css-4hzbpn leading-[32px]">Selected work</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute aspect-[342/256.5] bg-[#e5e7eb] left-0 overflow-clip right-0 rounded-[16px] top-0" data-name="Background">
      <div className="absolute bg-[rgba(31,41,55,0.05)] inset-0" data-name="Overlay" />
      <div className="absolute bg-white inset-[16px] opacity-80 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow" />
    </div>
  );
}

function Heading26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[272.5px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">NFT Closet X</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[300.5px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Web3 Marketplace Platform</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[316.5px] relative shrink-0 w-full" data-name="Container">
      <Background12 />
      <Heading26 />
      <Container87 />
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[16px] items-center justify-center opacity-80 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <div className="bg-[#f3f4f6] h-[8px] rounded-[4px] shrink-0 w-[48px]" data-name="Background" />
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute aspect-[342/256.5] bg-[#e5e7eb] left-0 overflow-clip right-0 rounded-[16px] top-0" data-name="Background">
      <BackgroundShadow3 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[272.5px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Research Buddy</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[300.5px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">AI Data Aggregation Agent</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[316.5px] relative shrink-0 w-full" data-name="Container">
      <Background13 />
      <Heading27 />
      <Container89 />
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute aspect-[342/256.5] bg-[#e5e7eb] left-0 overflow-clip right-0 rounded-[16px] top-0" data-name="Background">
      <div className="absolute bg-white inset-[16px] opacity-80 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow" />
    </div>
  );
}

function Heading28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[272.5px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">DataM</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[300.5px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Analytics Dashboard</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[316.5px] relative shrink-0 w-full" data-name="Container">
      <Background14 />
      <Heading28 />
      <Container91 />
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute aspect-[342/256.5] bg-[#e5e7eb] left-0 overflow-clip right-0 rounded-[16px] top-0" data-name="Background">
      <div className="absolute bg-white inset-[16px] opacity-80 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow" />
    </div>
  );
}

function Heading29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[272.5px]" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Pinata Themes</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[300.5px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Product Design System</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[316.5px] relative shrink-0 w-full" data-name="Container">
      <Background15 />
      <Heading29 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container90 />
      <Container92 />
      <Container94 />
    </div>
  );
}

function Section6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] px-[24px] relative shrink-0 w-[390px]" data-name="Section">
      <Heading25 />
      <Container95 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1917] text-[18px] tracking-[-0.5px]">
        <p className="css-ew64yg leading-[28px]">FAQ</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading30 />
      <div className="bg-[#dadada] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Horizontal Divider" />
    </div>
  );
}

function MinusCircleSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="minus-circle_svgrepo.com">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_19_2041)" id="minus-circle_svgrepo.com">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #18181B)" strokeWidth="1.3" />
          <path d="M11.25 9H6.75" id="Vector_2" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_19_2041">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] text-center">
        <p className="css-ew64yg leading-[32px]">How long does it take to build an agent?</p>
      </div>
      <MinusCircleSvgrepoCom />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[105px] items-start relative shrink-0 w-full" data-name="2">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] w-[297px]">
        <p className="css-4hzbpn leading-[20px]">Most pilot agents are ready within 1-2 weeks. Complex production systems typically take 3-5 weeks depending on integration requirements.</p>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-0" data-name="Page-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon-Set">
          <path clipRule="evenodd" d={svgPaths.p12fd9800} fill="var(--fill-0, #A3A09E)" fillRule="evenodd" id="plus-circle" />
        </g>
      </svg>
    </div>
  );
}

function PlusCircleSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="plus-circle-svgrepo-com (1) 1">
      <Page />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] text-center">
        <p className="css-ew64yg leading-[32px]">Do you integrate with my existing CRM?</p>
      </div>
      <PlusCircleSvgrepoCom />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col h-[63px] items-start justify-center relative shrink-0 w-full" data-name="1">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <Frame5 />
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute contents inset-0" data-name="Page-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon-Set">
          <path clipRule="evenodd" d={svgPaths.p12fd9800} fill="var(--fill-0, #A3A09E)" fillRule="evenodd" id="plus-circle" />
        </g>
      </svg>
    </div>
  );
}

function PlusCircleSvgrepoCom1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="plus-circle-svgrepo-com (1) 1">
      <Page1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] text-center">
        <p className="css-ew64yg leading-[32px]">Is my data private?</p>
      </div>
      <PlusCircleSvgrepoCom1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start justify-center relative shrink-0 w-full" data-name="4">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <Frame6 />
    </div>
  );
}

function Page2() {
  return (
    <div className="absolute contents inset-0" data-name="Page-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon-Set">
          <path clipRule="evenodd" d={svgPaths.p12fd9800} fill="var(--fill-0, #A3A09E)" fillRule="evenodd" id="plus-circle" />
        </g>
      </svg>
    </div>
  );
}

function PlusCircleSvgrepoCom2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="plus-circle-svgrepo-com (1) 1">
      <Page2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[298px]">
        <p className="css-4hzbpn leading-[32px]">What support do you provide after launch?</p>
      </div>
      <PlusCircleSvgrepoCom2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col h-[63px] items-start justify-center relative shrink-0 w-full" data-name="3">
      <div aria-hidden="true" className="absolute border-[#dadada] border-b border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component1 />
      <Component />
      <Component3 />
      <Component2 />
    </div>
  );
}

function Section7() {
  return (
    <div className="max-w-[800px] relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[24px] relative w-full">
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function Heading31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[36px] not-italic relative shrink-0 text-[#121212] text-[30px] text-center tracking-[-1.5px]">
        <p className="css-ew64yg mb-0">Tell us what you</p>
        <p className="css-ew64yg">want to automate.</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#121212] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[14px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="css-ew64yg leading-[20px]">Book Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[rgba(208,239,88,0.1)] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(101,163,13,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[15px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">Contact Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button17 />
      <Button18 />
    </div>
  );
}

function Section8() {
  return (
    <div className="bg-[rgba(243,244,246,0.5)] content-stretch flex flex-col gap-[32px] items-start p-[48px] relative rounded-[40px] shrink-0 w-[342px]" data-name="Section">
      <Heading31 />
      <Container98 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] tracking-[-0.45px] w-full">
        <p className="css-4hzbpn leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">© 2024 KWS Technology.</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-0 top-0" data-name="Container">
      <Link1 />
      <Container99 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Products</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Clinic Agent</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Pinata Themes</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Research Buddy</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link4 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-[191px] top-[100px]" data-name="Container">
      <Heading4 />
      <List1 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Services</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Automation</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Web Dev</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Consulting</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link7 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[191px] right-0 top-[100px]" data-name="Container">
      <Heading32 />
      <List2 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Company</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Careers</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link10 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-[191px] top-[260px]" data-name="Container">
      <Heading33 />
      <List3 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Connect</p>
      </div>
    </div>
  );
}

function FacebookBoxedSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="facebook-boxed-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="facebook-boxed-svgrepo-com 1">
          <path clipRule="evenodd" d={svgPaths.p1aa36900} fill="var(--fill-0, #9CA3AF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InstaSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="insta-svgrepo-com (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="insta-svgrepo-com (1) 1">
          <path d={svgPaths.p7c25480} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="1.4" />
          <path d={svgPaths.pee274f0} fill="var(--fill-0, #9CA3AF)" id="Vector_2" />
          <path d={svgPaths.p3b27f100} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function RedditSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="reddit-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="reddit-svgrepo-com 1">
          <path d={svgPaths.pb9bd800} fill="var(--fill-0, #9CA3AF)" id="Vector" />
          <path d={svgPaths.p105aad80} fill="var(--fill-0, #9CA3AF)" id="Vector_2" />
          <path d={svgPaths.p4fa1280} fill="var(--fill-0, #9CA3AF)" id="Vector_3" />
          <path d={svgPaths.p30f48b80} id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeWidth="1.4" />
          <path d={svgPaths.p399e0d70} id="Vector_5" stroke="var(--stroke-0, #9CA3AF)" strokeWidth="1.4" />
          <path clipRule="evenodd" d={svgPaths.pfff9500} fill="var(--fill-0, #9CA3AF)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function TiktokOutlineSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="tiktok-outline-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="tiktok-outline-svgrepo-com 1">
          <path d={svgPaths.p158d2980} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TwitterXLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="twitter-x-logo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="twitter-x-logo 1">
          <path d={svgPaths.p37323280} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ThreadsBrandsSolidFull() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="threads-brands-solid-full 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="threads-brands-solid-full 1">
          <path d={svgPaths.pdb786f0} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedinSvgrepoCom() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="linkedin-svgrepo-com 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="linkedin-svgrepo-com 1">
          <path clipRule="evenodd" d={svgPaths.p273bcd80} fill="var(--fill-0, #9CA3AF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] items-start relative shrink-0 w-[104px]">
      <FacebookBoxedSvgrepoCom />
      <InstaSvgrepoCom />
      <RedditSvgrepoCom />
      <TiktokOutlineSvgrepoCom />
      <TwitterXLogo />
      <ThreadsBrandsSolidFull />
      <LinkedinSvgrepoCom />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[88px] items-start left-[191px] pb-[64px] right-[47px] top-[259.72px]" data-name="Container">
      <Heading34 />
      <Frame8 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[380px] relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <Container101 />
      <Container102 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Container">
      <Link11 />
      <Link12 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative">
        <Container106 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px]">
        <p className="css-ew64yg leading-[16px]">All systems operational</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <div className="bg-[#d0ef58] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container107 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Margin5 />
      <Container108 />
    </div>
  );
}

function Container109() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container105 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container109 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[48px] pt-[31px] relative shrink-0 w-[390px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Frame9 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center py-[128px] relative shrink-0 w-full" data-name="Main">
      <Section />
      <Container19 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] tracking-[-0.45px]">
        <p className="css-ew64yg leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Svg14() {
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

function IconifyIcon14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="iconify-icon">
      <Svg14 />
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <IconifyIcon14 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[64px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Link13 />
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(247,245,239,0.85)] content-stretch flex flex-col items-start left-0 pb-px top-0 w-[390px]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.03)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container110 />
    </div>
  );
}

export default function Component390WLight() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="390w light" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Nav />
      <Main />
    </div>
  );
}