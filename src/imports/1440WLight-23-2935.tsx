import svgPaths from "./svg-8o0tb0ja3y";
import imgGradient from "figma:asset/9e693f6f66a31b8e9445e71dc440771129fff6c6.png";
import imgGradient1 from "figma:asset/0703c900d8c6edfb06ec4996078cc6c3a18b0a90.png";
import imgBackground from "figma:asset/ff2fccf5cf1f330330aa8e29bc32368a2852483c.png";
import imgBackground1 from "figma:asset/758a593b4534b1f69452f78cb63bd321254a6e4b.png";
import imgBackground2 from "figma:asset/37597b541c05652eebd880c4266bcd357c1e44bc.png";
import imgBackground3 from "figma:asset/15bdfc062445df5315aef788547d6145336201de.png";
import imgBackground4 from "figma:asset/a3a1b437e3ccd8620a645a8f785355bb89080706.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.5px]">
        <p className="css-ew64yg leading-[60px]">Portfolio</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[20px] text-center">
        <p className="css-ew64yg leading-[28px]">Our work across AI agents, platforms, and product design.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex h-[44px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[32px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Book Demo</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center justify-center pb-[12.5px] pt-[11.5px] px-[33px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center">
        <p className="css-ew64yg leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_16px] items-center justify-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(245,245,245,0.5)] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] text-center">
        <p className="css-ew64yg leading-[16px]">AI Agents</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(245,245,245,0.5)] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] text-center">
        <p className="css-ew64yg leading-[16px]">Platforms</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(245,245,245,0.5)] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] text-center">
        <p className="css-ew64yg leading-[16px]">Web Apps</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(245,245,245,0.5)] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Overlay">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] text-center">
        <p className="css-ew64yg leading-[16px]">UI/UX</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_12px] items-center justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <div className="bg-[#d4d4d4] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Overlay1 />
      <div className="bg-[#d4d4d4] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Overlay2 />
      <div className="bg-[#d4d4d4] rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
      <Overlay3 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[336px] max-w-[768px] right-[336px] top-[193px]" data-name="Section">
      <Heading />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] bottom-[16px] content-stretch flex flex-col items-start left-[16px] px-[13px] py-[7px] rounded-[8px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Img />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f5f5f5] h-[256px] relative rounded-[20px] shrink-0 w-[582px] z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 opacity-80" data-name="Gradient">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
        </div>
        <OverlayBorderShadowOverlayBlur />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.25px] uppercase">
        <p className="css-ew64yg leading-[15px]">AI Agent</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.25px] uppercase">
        <p className="css-ew64yg leading-[15px]">Clinic Management</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.25px] uppercase">
        <p className="css-ew64yg leading-[15px]">Multi-tenant</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">KWS Smart Appointment System</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-1.25px_0_32px_0] items-start" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#737373] text-[14px]">
        <p className="css-ew64yg mb-0">A multi-tenant clinic management platform with AI booking agent support,</p>
        <p className="css-ew64yg mb-0">quantum-inspired scheduling optimization, and a self-improvement system to</p>
        <p className="css-ew64yg">continuously improve performance.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">View Case Study</p>
      </div>
      <Margin2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[582px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Margin />
        <Heading3Margin />
        <Margin1 />
        <Link2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[28px] self-stretch" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start p-[9px] relative size-full">
          <Background />
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.6)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p2c4dcc00} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] bottom-[16px] content-stretch flex flex-col items-start left-[16px] px-[13px] py-[7px] rounded-[8px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Img1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f5f5f5] h-[256px] relative rounded-[20px] shrink-0 w-[582px] z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 opacity-80" data-name="Gradient">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient1} />
        </div>
        <OverlayBorderShadowOverlayBlur1 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.25px] uppercase">
        <p className="css-ew64yg leading-[15px]">Research</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.25px] uppercase">
        <p className="css-ew64yg leading-[15px]">Project Management</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[11px] py-[3px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.25px] uppercase">
        <p className="css-ew64yg leading-[15px]">AI Reports</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">Researchbdy</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-1.25px_0_32px_0] items-start" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#737373] text-[14px]">
        <p className="css-ew64yg mb-0">A platform for researchers and innovators to manage projects, meetings, and to-</p>
        <p className="css-ew64yg mb-0">dos, collaborate with teams, and generate AI-assisted reports and daily</p>
        <p className="css-ew64yg">summaries.</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">View Case Study</p>
      </div>
      <Margin5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[582px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Margin3 />
        <Heading3Margin1 />
        <Margin4 />
        <Link3 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[28px] self-stretch" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-start p-[9px] relative size-full">
          <Background1 />
          <Container8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.6)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start justify-center left-[104px] right-[104px] top-[515px]" data-name="Section">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.6px] w-full">
        <p className="css-4hzbpn leading-[32px]">All projects</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.45px] w-full">
        <p className="css-4hzbpn leading-[28px]">NFT ClosetX</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[8px] right-[20px] top-[232px]" data-name="Heading 3:margin">
      <Heading5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] w-full">
        <p className="css-4hzbpn mb-0">A fashion NFT marketplace that connects digital fashion with</p>
        <p className="css-4hzbpn mb-0">physical products, enabling minting, buying/selling, and</p>
        <p className="css-4hzbpn">interactive experiences with AR/VR-ready assets.</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[268px]" data-name="Margin">
      <Container9 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Web3</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Fashion</p>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">AR/VR</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[24px] right-[20px] top-[332px]" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">→</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">View</p>
      </div>
      <Margin8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col items-start left-[20px] right-[20px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fafafa] h-[192px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground} />
    </div>
  );
}

function Margin9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[212px] items-start left-[20px] pb-[20px] right-[20px] top-[20px]" data-name="Margin">
      <Background2 />
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-white border border-[rgba(229,229,229,0.6)] border-solid h-[415px] left-0 right-[837.34px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Background+Border+Shadow">
      <Heading3Margin2 />
      <Margin6 />
      <Margin7 />
      <Container11 />
      <Margin9 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.45px] w-full">
        <p className="css-4hzbpn leading-[28px]">DataM</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[8px] right-[20px] top-[232px]" data-name="Heading 3:margin">
      <Heading6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] w-full">
        <p className="css-4hzbpn mb-0">An AI business mentor designed to guide founders with</p>
        <p className="css-4hzbpn mb-0">structured insights, planning support, and decision</p>
        <p className="css-4hzbpn">assistance.</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[268px]" data-name="Margin">
      <Container12 />
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">AI Mentor</p>
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Business</p>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Strategy</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder9 />
      <BackgroundBorder10 />
      <BackgroundBorder11 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[24px] right-[20px] top-[332px]" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">→</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">View</p>
      </div>
      <Margin12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col items-start left-[20px] right-[20px]" data-name="Container">
      <Link5 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#fafafa] h-[192px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground1} />
    </div>
  );
}

function Margin13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[212px] items-start left-[20px] pb-[20px] right-[20px] top-[20px]" data-name="Margin">
      <Background3 />
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="absolute bg-white border border-[rgba(229,229,229,0.6)] border-solid h-[415px] left-[418.66px] right-[418.67px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Background+Border+Shadow">
      <Heading3Margin3 />
      <Margin10 />
      <Margin11 />
      <Container14 />
      <Margin13 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.45px] w-full">
        <p className="css-4hzbpn leading-[28px]">SHY</p>
      </div>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[8px] right-[20px] top-[232px]" data-name="Heading 3:margin">
      <Heading7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] w-full">
        <p className="css-4hzbpn mb-0">An AI agent concept for youth sexual wellness help, created</p>
        <p className="css-4hzbpn">for supportive guidance, education, and safe conversations.</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[268px]" data-name="Margin">
      <Container15 />
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">AI Agent</p>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Wellness</p>
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Support</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder12 />
      <BackgroundBorder13 />
      <BackgroundBorder14 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[24px] right-[20px] top-[316px]" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">→</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">View</p>
      </div>
      <Margin16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col h-[32px] items-start justify-end left-[20px] min-h-[16px] pt-[16px] right-[20px]" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fafafa] h-[192px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground2} />
    </div>
  );
}

function Margin18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[212px] items-start left-[20px] pb-[20px] right-[20px] top-[20px]" data-name="Margin">
      <Background4 />
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="absolute bg-white border border-[rgba(229,229,229,0.6)] border-solid h-[415px] left-[837.33px] right-[0.01px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Background+Border+Shadow">
      <Heading3Margin4 />
      <Margin14 />
      <Margin15 />
      <Margin17 />
      <Margin18 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.45px] w-full">
        <p className="css-4hzbpn leading-[28px]">Pinata Themes</p>
      </div>
    </div>
  );
}

function Heading3Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[8px] right-[20px] top-[232px]" data-name="Heading 3:margin">
      <Heading8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] w-full">
        <p className="css-4hzbpn mb-0">A website theme platform with multiple design themes and</p>
        <p className="css-4hzbpn">templates for fast launches.</p>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[8px] right-[20px] top-[268px]" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] w-full">
        <p className="css-4hzbpn leading-[15px]">Includes theme: Pongoo</p>
      </div>
    </div>
  );
}

function Margin20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[308px]" data-name="Margin">
      <Container19 />
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Themes</p>
      </div>
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Templates</p>
      </div>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Web Design</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder15 />
      <BackgroundBorder16 />
      <BackgroundBorder17 />
    </div>
  );
}

function Margin21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[24px] right-[20px] top-[339px]" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">→</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">View</p>
      </div>
      <Margin22 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col items-start left-[20px] right-[20px]" data-name="Container">
      <Link7 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#fafafa] h-[192px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground3} />
    </div>
  );
}

function Margin23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[212px] items-start left-[20px] pb-[20px] right-[20px] top-[20px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="absolute bg-white border border-[rgba(229,229,229,0.6)] border-solid h-[422px] left-0 right-[837.34px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[439px]" data-name="Background+Border+Shadow">
      <Heading3Margin5 />
      <Margin19 />
      <Margin20 />
      <Margin21 />
      <Container21 />
      <Margin23 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.45px] w-full">
        <p className="css-4hzbpn leading-[28px]">Pongoo</p>
      </div>
    </div>
  );
}

function Heading3Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[8px] right-[20px] top-[232px]" data-name="Heading 3:margin">
      <Heading9 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[16px] not-italic relative shrink-0 text-[#737373] text-[12px] w-full">
        <p className="css-4hzbpn mb-0">A wheelchair controller app concept with AI-driven help and</p>
        <p className="css-4hzbpn">accessible UX patterns.</p>
      </div>
    </div>
  );
}

function Margin24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[16px] right-[20px] top-[268px]" data-name="Margin">
      <Container22 />
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Mobile App</p>
      </div>
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">Accessibility</p>
      </div>
    </div>
  );
}

function BackgroundBorder20() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[6px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px]">
        <p className="css-ew64yg leading-[15px]">AI Assist</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder18 />
      <BackgroundBorder19 />
      <BackgroundBorder20 />
    </div>
  );
}

function Margin25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] pb-[24px] right-[20px] top-[316px]" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Margin26() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">→</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black">
        <p className="css-ew64yg leading-[16px]">View</p>
      </div>
      <Margin26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link8 />
    </div>
  );
}

function Margin27() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col h-[39px] items-start justify-end left-[20px] min-h-[16px] pt-[23px] right-[20px]" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fafafa] h-[192px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackground4} />
    </div>
  );
}

function Margin28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[212px] items-start left-[20px] pb-[20px] right-[20px] top-[20px]" data-name="Margin">
      <Background6 />
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="absolute bg-white border border-[rgba(229,229,229,0.6)] border-solid h-[422px] left-[418.66px] right-[418.67px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[439px]" data-name="Background+Border+Shadow">
      <Heading3Margin6 />
      <Margin24 />
      <Margin25 />
      <Margin27 />
      <Margin28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[883px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[955px] items-start left-[80px] max-w-[1280px] px-[24px] right-[80px] top-[1104px]" data-name="Section">
      <Heading1 />
      <Container25 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.6px] w-full">
        <p className="css-4hzbpn leading-[32px]">How we deliver</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[13.39%_9.22%_12.5%_9.21%]" data-name="Group">
      <div className="absolute inset-[-5.62%_-5.1%_-5.62%_-5.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9812 16.4891">
          <g id="Group">
            <path d={svgPaths.p2109a900} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p29ad0280} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p26957c00} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group />
      </div>
    </div>
  );
}

function BackgroundBorder21() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Img2 />
    </div>
  );
}

function Margin29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 pb-[4px] top-0 w-[40px]" data-name="Margin">
      <BackgroundBorder21 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black">
        <p className="css-ew64yg leading-[28px]">Discover</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.75px] right-0 top-[95px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px]">
        <p className="css-ew64yg leading-[22.75px]">We map goals, users, and workflows.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative self-stretch shrink-0 w-[378.66px]" data-name="Container">
      <Margin29 />
      <Heading11 />
      <Container26 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_10.06%_10.06%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9882 17.9882">
          <g id="Group">
            <path d={svgPaths.p2e4aa180} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1da0be00} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.pf125180} id="Vector_3" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group1 />
      </div>
    </div>
  );
}

function BackgroundBorder22() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Img3 />
    </div>
  );
}

function Margin30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 pb-[4px] top-0 w-[40px]" data-name="Margin">
      <BackgroundBorder22 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black">
        <p className="css-ew64yg leading-[28px]">Design</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.75px] right-0 top-[95px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px]">
        <p className="css-ew64yg leading-[22.75px]">We design UI and agent logic.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative self-stretch shrink-0 w-[378.67px]" data-name="Container">
      <Margin30 />
      <Heading12 />
      <Container28 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_8.33%_10.42%_10.42%]" data-name="Group">
      <div className="absolute inset-[-5.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 17.9169">
          <g id="Group">
            <path d={svgPaths.p3a83b580} id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p36eca700} id="Vector_2" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group2 />
      </div>
    </div>
  );
}

function BackgroundBorder23() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Img4 />
    </div>
  );
}

function Margin31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 pb-[4px] top-0 w-[40px]" data-name="Margin">
      <BackgroundBorder23 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black">
        <p className="css-ew64yg leading-[28px]">Deploy</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.75px] right-0 top-[95px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px]">
        <p className="css-ew64yg leading-[22.75px]">We ship, monitor, and improve.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative self-stretch shrink-0 w-[378.66px]" data-name="Container">
      <Margin31 />
      <Heading13 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Heading10 />
        <Container32 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[96px] pt-[97px] px-[80px] right-0 top-[2138.25px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <Container33 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0 w-[542px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[36px] not-italic relative shrink-0 text-[30px] text-black text-center tracking-[-0.75px]">
          <p className="css-ew64yg mb-0">Want something similar for your</p>
          <p className="css-ew64yg">business?</p>
        </div>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#111] content-stretch flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] px-[32px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white">
        <p className="css-ew64yg leading-[20px]">Book Demo</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[#d4f844] content-stretch flex h-[48px] items-center justify-center pb-[14.5px] pt-[13.5px] px-[32px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center">
        <p className="css-ew64yg leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[542px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center relative w-full">
        <Link9 />
        <Link10 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.5)] content-stretch flex flex-col gap-[32px] items-start left-[384px] max-w-[672px] p-[65px] right-[384px] rounded-[32px] top-[2600px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Heading14 />
      <Container34 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] tracking-[-0.45px]">
        <p className="css-ew64yg leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-1/2 translate-y-[-50%]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[149.47px] pl-[32px] top-0" data-name="Link:margin">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[325.5px] pl-[32px] top-0" data-name="Link:margin">
      <Link14 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.16667" />
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

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Products</p>
      </div>
      <IconifyIcon />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Margin32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39.55px] pl-[32px] top-0" data-name="Margin">
      <Container36 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.16667" />
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

function Container37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Company</p>
      </div>
      <IconifyIcon1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container37 />
    </div>
  );
}

function Margin33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[211.33px] pl-[32px] top-0" data-name="Margin">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[404.25px]" data-name="Container">
      <Link12 />
      <LinkMargin />
      <LinkMargin1 />
      <Margin32 />
      <Margin33 />
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex items-center px-[20px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Contact</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col items-start overflow-clip px-[20px] py-[8px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05),0px_4px_6px_-4px_rgba(0,0,0,0.05)] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[16px]">Book Demo</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Link:margin">
      <Link16 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[0.01px] items-center relative shrink-0" data-name="Container">
      <Link15 />
      <LinkMargin2 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[64px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[24.02px] relative size-full">
          <Link11 />
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(247,245,239,0.85)] content-stretch flex flex-col items-start left-0 pb-px px-[80px] top-0 w-[1440px]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.03)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container41 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#121212] text-[18px] top-[14px] tracking-[-0.45px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[214.39px]" data-name="Container">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">© 2024 KWS Technology.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[214.39px]" data-name="Container">
      <Link17 />
      <Container42 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Heading 5">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#121212] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Products</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Clinic Agent</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Pinata Themes</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[214.41px]" data-name="Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Research Buddy</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[214.41px]" data-name="Item">
      <Link20 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[84px] left-0 top-[36px] w-[214.41px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[120px] left-[254.39px] top-0 w-[214.41px]" data-name="Container">
      <Heading4 />
      <List />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Heading 5">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#121212] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Services</p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Automation</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Item">
      <Link21 />
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Web Dev</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[214.39px]" data-name="Item">
      <Link22 />
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Consulting</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[214.39px]" data-name="Item">
      <Link23 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[84px] left-0 top-[36px] w-[214.39px]" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[120px] left-[508.8px] top-0 w-[214.39px]" data-name="Container">
      <Heading15 />
      <List1 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Heading 5">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#121212] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Company</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Item">
      <Link24 />
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[214.41px]" data-name="Item">
      <Link25 />
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Careers</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[214.41px]" data-name="Item">
      <Link26 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute h-[84px] left-0 top-[36px] w-[214.41px]" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[120px] left-[763.2px] top-0 w-[214.41px]" data-name="Container">
      <Heading16 />
      <List2 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Heading 5">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#121212] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Connect</p>
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

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-[0.4px] top-0">
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

function Container47() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[214.39px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[120px] left-[1017.6px] top-0 w-[214.39px]" data-name="Container">
      <Heading17 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[120px] left-[24px] top-0 w-[1232px]" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container48 />
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[79px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute h-[16px] left-[103px] top-0 w-[96px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[199px]" data-name="Container">
      <Link27 />
      <Link28 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[16px] left-[16px] top-0 w-[132px]" data-name="Container">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">All systems operational</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[16px] left-[1084px] top-[32px] w-[148px]" data-name="Container">
      <div className="absolute bg-[#d0ef58] left-0 rounded-[9999px] size-[8px] top-[4px]" data-name="Background" />
      <Container51 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[#f3f4f6] border-solid border-t h-[49px] left-[24px] top-[165px] w-[1232px]" data-name="HorizontalBorder">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[249px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] px-[80px] top-[2952px] w-[1440px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Container53 />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="relative size-full" data-name="1440w light" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Nav />
      <Footer />
    </div>
  );
}