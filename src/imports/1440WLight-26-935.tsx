import svgPaths from "./svg-9q4pdbpi8x";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[60px] text-center tracking-[-1.5px]">
        <p className="css-ew64yg leading-[60px]">Industries we serve</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[#525252] text-[18px] text-center">
        <p className="css-ew64yg mb-0">AI agents and automation for teams that book, follow up, answer questions,</p>
        <p className="css-ew64yg">and manage operations.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-clip px-[32px] py-[14px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">Book Demo</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[33px] py-[15px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-center tracking-[0.35px] uppercase">
        <p className="css-ew64yg leading-[20px]">Choose your industry to see common workflows we automate.</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[272px] max-w-[896px] px-[24px] right-[272px] top-[133px]" data-name="Section">
      <Heading />
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[32px] not-italic relative shrink-0 text-[#262626] text-[24px] text-center">
          <p className="css-ew64yg mb-0">“If your business handles appointments, inquiries, follow-ups, or CRM updates—KWS can</p>
          <p className="css-ew64yg">automate it with AI agents.”</p>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-px p-[49px] right-0 top-[508px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[30px] text-center tracking-[-0.75px]">
        <p className="css-ew64yg leading-[36px]">Interactive demo</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Select an industry, then tap a service to preview the experience.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Label() {
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
    <div className="h-[54px] relative shrink-0 w-[448px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center overflow-clip pl-[411px] pr-[13px] py-[15px] relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex items-start p-px relative rounded-[12px] shrink-0 w-[450px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <ImageFill />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <Label />
      <Options />
    </div>
  );
}

function Heading3() {
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

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black">
          <p className="css-ew64yg leading-[20.4px]">See Booking</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#bdff00] relative rounded-[12px] shrink-0 w-[289.68px]" data-name="Button">
      <div className="content-stretch flex items-center overflow-clip pb-[13.26px] pt-[12.45px] px-[17.34px] relative rounded-[inherit] w-full">
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[286.84px]" data-name="Button:css-transform">
      <Button />
    </div>
  );
}

function Container8() {
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

function Button1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
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

function Button2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-end relative shrink-0 w-full" data-name="Container">
      <ButtonCssTransform />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container10 />
    </div>
  );
}

function Heading5() {
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

function Container12() {
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

function Button3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
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

function Button4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
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

function Button5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[284px]" data-name="Container">
      <Container11 />
      <Container16 />
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

function Overlay() {
  return (
    <div className="bg-[rgba(189,255,0,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Img />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[80px] items-center pb-[16px] px-[106px] relative shrink-0 w-[276px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[18px] text-center">
        <p className="css-ew64yg leading-[28px]">Confirmed</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Button6() {
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
      <Button6 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <Margin />
          <Margin1 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative w-[324px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pb-[16px] pt-[40px] relative rounded-[inherit] size-full">
        <Background />
      </div>
    </div>
  );
}

function Container19() {
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

function Group() {
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
      <Group />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative self-stretch shrink-0" data-name="Container">
      <Img1 />
      <Img2 />
      <Img3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute left-[8px] right-[8px] top-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[16px] px-[24px] relative w-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#111] h-[650px] relative rounded-[56px] shrink-0 w-[340px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Background1 />
        <div className="absolute bg-[rgba(0,0,0,0.2)] bottom-[16px] h-[4px] left-1/2 rounded-[9999px] translate-x-[-50%] w-[128px]" data-name="Overlay" />
        <div className="absolute bg-black h-[28px] left-1/2 rounded-bl-[16px] rounded-br-[16px] top-[8px] translate-x-[-50%] w-[128px]" data-name="Background" />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#111] border-solid inset-0 pointer-events-none rounded-[56px] shadow-[0px_0px_0px_1px_rgba(17,17,17,0.1),0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bottom-[-32px] content-stretch flex gap-[8px] items-start left-[47.33%] right-[47.33%]" data-name="Container">
      <div className="bg-[rgba(0,0,0,0.2)] rounded-[9999px] shrink-0 size-[8px]" data-name="Overlay" />
      <div className="bg-black h-[8px] rounded-[9999px] shrink-0 w-[16px]" data-name="Background" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[600px]" data-name="Container">
      <BackgroundBorderShadow />
      <Container22 />
    </div>
  );
}

function Heading6() {
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

function Container24() {
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

function Button7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
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

function Button8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
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

function Button9() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container27 />
    </div>
  );
}

function Heading7() {
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

function Container29() {
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

function Button10() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
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

function Button11() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[13px] relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[284px]" data-name="Container">
      <Container28 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center pb-[24px] pt-[7px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container23 />
      <Container33 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-[1166px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[18px]">
          <p className="css-ew64yg leading-[28px]">Services for this industry</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[1166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px]">
          <p className="css-ew64yg leading-[20px]">What we typically deliver for this client type.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Appointment booking + rescheduling</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Lead follow-up + reminders</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">FAQ + pricing + aftercare replies</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">AI Skincare Chatbot</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Routine recommendations</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Product suggestions</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[1166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-[0px_8px] items-start pt-[16px] relative w-full">
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

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[33px] relative w-full">
        <Heading2 />
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[80px] max-w-[1280px] px-[24px] py-[48px] right-[80px] top-[740px]" data-name="Section">
      <Container5 />
      <Container6 />
      <Container34 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[36px] text-center tracking-[-0.9px]">
        <p className="css-ew64yg leading-[40px]">Who can be our client?</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[18px] text-center">
        <p className="css-ew64yg leading-[28px]">These industries benefit most from AI agents, voice/chat booking, workflow automation, and CRM-ready systems.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container37 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.32%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3373 18.3373">
          <g id="Group">
            <path d={svgPaths.p1ddffa80} id="Vector" stroke="var(--stroke-0, #4D7C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.pc250d80} id="Vector_2" stroke="var(--stroke-0, #4D7C0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ecfccb] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background2 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Beauty, Aesthetics & Personal Care`}</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading9 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Skincare/aesthetic clinics, med spas, salons</p>
        <p className="css-4hzbpn mb-0">{`(hair/barber/nails/lash/brow), hair transplant &`}</p>
        <p className="css-4hzbpn mb-0">cosmetic surgery centers, laser/facial studios,</p>
        <p className="css-4hzbpn">spas, massage centers.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[3.625px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">High-volume inquiries, bookings, and repeat</p>
        <p className="css-4hzbpn">visits.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group2 />
    </div>
  );
}

function ImgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img5 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Appointment booking + rescheduling</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group3 />
    </div>
  );
}

function ImgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img6 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin1 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Lead follow-up + reminders</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group4 />
    </div>
  );
}

function ImgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img7 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin2 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">FAQ + pricing + aftercare replies</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <List />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container40 />
        <Container42 />
        <Container44 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin3 />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link2 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[29px] relative rounded-[24px] shrink-0 w-[389.33px]" data-name="1">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin2 />
      <Heading3Margin />
      <Container45 />
      <LinkMargin />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6.32%_-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 17.8333">
          <g id="Group">
            <path d={svgPaths.p347a4420} id="Vector" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1a75c200} id="Vector_2" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1c756300} id="Vector_3" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group5 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img8 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background3 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn mb-0">{`Dental, Nutrition, Mental Health &`}</p>
        <p className="css-4hzbpn">Day Care</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading10 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Dental clinics, nutrition consultants, mental health</p>
        <p className="css-4hzbpn">practices, day care centers.</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Intake, scheduling, reminders, and client</p>
        <p className="css-4hzbpn">communication.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group6 />
    </div>
  );
}

function ImgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img9 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin3 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Intake questions + eligibility checks</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group7 />
    </div>
  );
}

function ImgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img10 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin4 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Booking, cancellation, and no-show reduction</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group8 />
    </div>
  );
}

function ImgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img11 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin5 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">CRM notes + follow-up sequences</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <List1 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[17.5px] relative w-full">
        <Container47 />
        <Container49 />
        <Container51 />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin5 />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link3 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[29px] relative rounded-[24px] shrink-0 w-[389.33px]" data-name="2">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin4 />
      <Heading3Margin1 />
      <Container52 />
      <LinkMargin1 />
    </div>
  );
}

function Img12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.pa432c80} id="Vector" stroke="var(--stroke-0, #C2410C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ffedd5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img12 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background4 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Fitness, Sports & Lifestyle`}</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading11 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Gyms, yoga/pilates studios, personal trainers,</p>
        <p className="css-4hzbpn mb-0">sports academies, swimming schools, martial</p>
        <p className="css-4hzbpn mb-0">arts, wellness coaching, weight management</p>
        <p className="css-4hzbpn">programs.</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[3.625px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Trial leads, class schedules, and membership</p>
        <p className="css-4hzbpn">conversions.</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group9 />
    </div>
  );
}

function ImgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img13 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin6 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Trial booking + membership inquiries</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group10 />
    </div>
  );
}

function ImgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img14 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin7 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Class scheduling + reminders</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group11 />
    </div>
  );
}

function ImgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img15 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin8 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Lead qualification + follow-ups</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <List2 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container54 />
        <Container56 />
        <Container58 />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin7 />
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link4 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[29px] relative rounded-[24px] shrink-0 w-[389.34px]" data-name="3">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin6 />
      <Heading3Margin2 />
      <Container59 />
      <LinkMargin2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-0 top-[-8px]">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[20.83%_8.27%_20.83%_8.34%]" data-name="Group">
      <div className="absolute inset-[-7.14%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.346 13.3336">
          <g id="Group">
            <path d={svgPaths.p9660200} id="Vector" stroke="var(--stroke-0, #7E22CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p3fded00} id="Vector_2" stroke="var(--stroke-0, #7E22CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group12 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img16 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background5 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">Coaching Centers</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading12 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Coaching institutes, training programs, tutors,</p>
        <p className="css-4hzbpn">learning centers.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Enrollment conversations and schedule</p>
        <p className="css-4hzbpn">coordination.</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group13 />
    </div>
  );
}

function ImgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img17 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin9 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Student inquiries + enrollment support</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group14 />
    </div>
  );
}

function ImgMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img18 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin10 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Schedule management + notifications</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group15 />
    </div>
  );
}

function ImgMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img19 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin11 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Payments/receipts guidance + CRM updates</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <List3 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[28px] relative w-full">
        <Container61 />
        <Container63 />
        <Container65 />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin9 />
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link5 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[29px] rounded-[24px] top-[530.25px] w-[389.33px]" data-name="4">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin8 />
      <Heading3Margin3 />
      <Container66 />
      <LinkMargin3 />
    </div>
  );
}

function Img20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.pdab9800} id="Vector" stroke="var(--stroke-0, #A16207)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fef9c3] content-stretch flex h-[43px] items-center justify-center relative rounded-[8px] shrink-0 w-[40px]" data-name="Background">
      <Img20 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background6 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Hospitality, Travel & Tourism`}</p>
      </div>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading13 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Hotels, resorts, serviced apartments, travel</p>
        <p className="css-4hzbpn mb-0">agencies, tour operators, event venues, ticketing,</p>
        <p className="css-4hzbpn">experiences.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[3.25px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Booking inquiries and guest support at scale.</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group16 />
    </div>
  );
}

function ImgMargin12() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img21 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin12 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Booking inquiries + confirmations</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group17 />
    </div>
  );
}

function ImgMargin13() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img22 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin13 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Upsell packages + itinerary sharing</p>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img23() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group18 />
    </div>
  );
}

function ImgMargin14() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img23 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin14 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Support FAQs + post-trip follow-ups</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <List4 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[28px] relative w-full">
        <Container68 />
        <Container70 />
        <Container72 />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin11 />
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link6 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[421.33px] p-[29px] rounded-[24px] top-[529px] w-[389.33px]" data-name="5">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin10 />
      <Heading3Margin4 />
      <Container73 />
      <LinkMargin4 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 17.5004">
          <g id="Group">
            <path d={svgPaths.p1fb6d9c0} id="Vector" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p34676c00} id="Vector_2" stroke="var(--stroke-0, #047857)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group19 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img24 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background7 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn mb-0">{`Brokerages & Property`}</p>
        <p className="css-4hzbpn">Management</p>
      </div>
    </div>
  );
}

function Heading3Margin5() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading14 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Real estate brokerages, agents, property</p>
        <p className="css-4hzbpn">management companies.</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Lead capture, qualification, and viewing</p>
        <p className="css-4hzbpn">coordination.</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group20 />
    </div>
  );
}

function ImgMargin15() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img25 />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin15 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Lead capture + qualification</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group21 />
    </div>
  );
}

function ImgMargin16() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img26 />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin16 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Viewing scheduling + reminders</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img27() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group22 />
    </div>
  );
}

function ImgMargin17() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img27 />
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin17 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Document collection + CRM sync</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item15 />
      <Item16 />
      <Item17 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <List5 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container75 />
        <Container77 />
        <Container79 />
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin13 />
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link7 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[842.66px] p-[29px] rounded-[24px] top-[530.25px] w-[389.34px]" data-name="6">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin12 />
      <Heading3Margin5 />
      <Container80 />
      <LinkMargin5 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[8.33%_10.06%_10.06%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9915 17.9915">
          <g id="Group">
            <path d={svgPaths.p30d43400} id="Vector" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.pefca480} id="Vector_2" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p2a7bbc00} id="Vector_3" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group23 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img28 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Background8 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Container81 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Architecture & Interior Design Firms`}</p>
      </div>
    </div>
  );
}

function Heading3Margin6() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading15 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Architecture firms, interior design studios,</p>
        <p className="css-4hzbpn">design/build teams.</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Client onboarding and vendor/product sourcing.</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group24 />
    </div>
  );
}

function ImgMargin18() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img29 />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin18 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Client onboarding + requirement collection</p>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img30() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group25 />
    </div>
  );
}

function ImgMargin19() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img30 />
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin19 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Vendor/product sourcing assistance</p>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img31() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group26 />
    </div>
  );
}

function ImgMargin20() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img31 />
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin20 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Project updates + approvals workflow</p>
      </div>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item18 />
      <Item19 />
      <Item20 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <List6 />
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[22.75px] relative w-full">
        <Container83 />
        <Container85 />
        <Container87 />
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin15 />
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link8 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[29px] rounded-[24px] top-[1051.5px] w-[389.33px]" data-name="7">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin14 />
      <Heading3Margin6 />
      <Container88 />
      <LinkMargin6 />
    </div>
  );
}

function Img32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p1c1cb100} id="Vector" stroke="var(--stroke-0, #4A6FA5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#cce0ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img32 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background9 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Manufacturing & Industrial`}</p>
      </div>
    </div>
  );
}

function Heading3Margin7() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading16 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Small factories, OEMs, workshops, industrial</p>
        <p className="css-4hzbpn">suppliers.</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container89 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Procurement, documentation, and internal</p>
        <p className="css-4hzbpn">workflows.</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img33() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group27 />
    </div>
  );
}

function ImgMargin21() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img33 />
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin21 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Procurement + vendor sourcing automation</p>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img34() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group28 />
    </div>
  );
}

function ImgMargin22() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img34 />
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin22 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Quality/log documentation workflows</p>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img35() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group29 />
    </div>
  );
}

function ImgMargin23() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img35 />
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin23 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Internal request handling + reporting</p>
      </div>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item21 />
      <Item22 />
      <Item23 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <List7 />
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container90 />
        <Container92 />
        <Container94 />
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin17 />
    </div>
  );
}

function LinkMargin7() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link9 />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[421.33px] p-[29px] rounded-[24px] top-[1051.5px] w-[389.33px]" data-name="8">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin16 />
      <Heading3Margin7 />
      <Container95 />
      <LinkMargin7 />
    </div>
  );
}

function Img36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p1dc8c900} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#ffc8c8] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img36 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background10 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Car Dealerships & Garages`}</p>
      </div>
    </div>
  );
}

function Heading3Margin8() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading17 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Car dealerships, service centers, repair garages.</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Service bookings and quote follow-ups.</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img37() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group30 />
    </div>
  );
}

function ImgMargin24() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img37 />
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin24 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Service appointment booking</p>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img38() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group31 />
    </div>
  );
}

function ImgMargin25() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img38 />
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin25 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Quote requests + follow-up</p>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img39() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group32 />
    </div>
  );
}

function ImgMargin26() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img39 />
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin26 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Status updates + reminders</p>
      </div>
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item24 />
      <Item25 />
      <Item26 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <List8 />
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[45.5px] relative w-full">
        <Container97 />
        <Container99 />
        <Container101 />
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin19 />
    </div>
  );
}

function LinkMargin8() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link10 />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[842.66px] p-[29px] rounded-[24px] top-[1051.5px] w-[389.34px]" data-name="9">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin18 />
      <Heading3Margin8 />
      <Container102 />
      <LinkMargin8 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.57%_-5.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3368 16.67">
          <g id="Group">
            <path d={svgPaths.p11837e80} id="Vector" stroke="var(--stroke-0, #1E3A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p1caa5d80} id="Vector_2" stroke="var(--stroke-0, #1E3A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group33 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#becfff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img40 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background11 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Legal & Case Intake`}</p>
      </div>
    </div>
  );
}

function Heading3Margin9() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading18 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Law firms, legal consultancies, immigration</p>
        <p className="css-4hzbpn">consultancies, document services.</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container103 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Client intake and consultation scheduling.</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img41() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group34 />
    </div>
  );
}

function ImgMargin27() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img41 />
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin27 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Case intake questions + eligibility triage</p>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img42() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group35 />
    </div>
  );
}

function ImgMargin28() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img42 />
    </div>
  );
}

function Item28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin28 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Consultation scheduling</p>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img43() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group36 />
    </div>
  );
}

function ImgMargin29() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img43 />
    </div>
  );
}

function Item29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin29 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Document checklist + follow-ups</p>
      </div>
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item27 />
      <Item28 />
      <Item29 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <List9 />
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[22.75px] relative w-full">
        <Container104 />
        <Container106 />
        <Container108 />
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin21 />
    </div>
  );
}

function LinkMargin9() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link11 />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[29px] rounded-[24px] top-[1544.5px] w-[389.33px]" data-name="10">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin20 />
      <Heading3Margin9 />
      <Container109 />
      <LinkMargin9 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.57%_-5.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3367 16.67">
          <g id="Group">
            <path d={svgPaths.p27397000} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p3d0b7600} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group37 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#b9ffd3] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img44 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background12 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`HR, Recruiting & Staffing`}</p>
      </div>
    </div>
  );
}

function Heading3Margin10() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading19 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Recruitment agencies, staffing firms, HR service</p>
        <p className="css-4hzbpn">providers.</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container110 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Candidate screening and pipeline coordination.</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container112 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img45() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group38 />
    </div>
  );
}

function ImgMargin30() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img45 />
    </div>
  );
}

function Item30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin30 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Candidate screening + scheduling</p>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img46() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group39 />
    </div>
  );
}

function ImgMargin31() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img46 />
    </div>
  );
}

function Item31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin31 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Client intake + requirement gathering</p>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img47() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group40 />
    </div>
  );
}

function ImgMargin32() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img47 />
    </div>
  );
}

function Item32() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin32 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Pipeline updates + automated reminders</p>
      </div>
    </div>
  );
}

function List10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item30 />
      <Item31 />
      <Item32 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <List10 />
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[22.75px] relative w-full">
        <Container111 />
        <Container113 />
        <Container115 />
      </div>
    </div>
  );
}

function Margin23() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin23 />
    </div>
  );
}

function LinkMargin10() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link12 />
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[421.33px] p-[29px] rounded-[24px] top-[1544.5px] w-[389.33px]" data-name="11">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin22 />
      <Heading3Margin10 />
      <Container116 />
      <LinkMargin10 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.27%_-5.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.67 17.5033">
          <g id="Group">
            <path d={svgPaths.p27f8780} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            <path d={svgPaths.p17f19000} id="Vector_2" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group41 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#f9ddca] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img48 />
    </div>
  );
}

function Margin24() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background13 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Marketing, Sales & Lead Businesses`}</p>
      </div>
    </div>
  );
}

function Heading3Margin11() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading20 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Digital marketing agencies, SEO agencies,</p>
        <p className="css-4hzbpn mb-0">SDR/lead gen agencies, call centers, B2B</p>
        <p className="css-4hzbpn">outbound teams, appointment setters.</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col gap-[3.25px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Lead operations and conversion workflows.</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container119 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img49() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group42 />
    </div>
  );
}

function ImgMargin33() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img49 />
    </div>
  );
}

function Item33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin33 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Lead capture + qualification</p>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img50() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group43 />
    </div>
  );
}

function ImgMargin34() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img50 />
    </div>
  );
}

function Item34() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin34 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Outreach follow-ups + appointment setting</p>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img51() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group44 />
    </div>
  );
}

function ImgMargin35() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img51 />
    </div>
  );
}

function Item35() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin35 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">CRM updates + reporting summaries</p>
      </div>
    </div>
  );
}

function List11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item33 />
      <Item34 />
      <Item35 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container121 />
      <List11 />
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container118 />
        <Container120 />
        <Container122 />
      </div>
    </div>
  );
}

function Margin25() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin25 />
    </div>
  );
}

function LinkMargin11() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link13 />
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[842.66px] p-[29px] rounded-[24px] top-[1544.75px] w-[389.34px]" data-name="12">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin24 />
      <Heading3Margin11 />
      <Container123 />
      <LinkMargin11 />
    </div>
  );
}

function Container124() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Img52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p17361d80} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#e4f0ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img52 />
    </div>
  );
}

function Margin26() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Container124 />
        <Background14 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Nonprofits & Communities`}</p>
      </div>
    </div>
  );
}

function Heading3Margin12() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading21 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">NGOs, charities, associations, community</p>
        <p className="css-4hzbpn">organizations.</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container125 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Donor/supporter communication and event</p>
        <p className="css-4hzbpn">operations.</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container127 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img53() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group45 />
    </div>
  );
}

function ImgMargin36() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img53 />
    </div>
  );
}

function Item36() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin36 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Donor/supporter FAQ + intake</p>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img54() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group46 />
    </div>
  );
}

function ImgMargin37() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img54 />
    </div>
  );
}

function Item37() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin37 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Event operations + reminders</p>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #D4F23F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img55() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group47 />
    </div>
  );
}

function ImgMargin38() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img55 />
    </div>
  );
}

function Item38() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <ImgMargin38 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Donor CRM updates + automation</p>
      </div>
    </div>
  );
}

function List12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item36 />
      <Item37 />
      <Item38 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <List12 />
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container126 />
        <Container128 />
        <Container130 />
      </div>
    </div>
  );
}

function Margin27() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin27 />
    </div>
  );
}

function LinkMargin12() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link14 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[2048px_842.67px_2px_0] items-start p-[29px] rounded-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin26 />
      <Heading3Margin12 />
      <Container131 />
      <LinkMargin12 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[2548px] relative shrink-0 w-[1232px]" data-name="Container">
      <Frame />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[2760px] items-start left-[80px] max-w-[1280px] px-[24px] py-[80px] right-[80px] top-[2030px]" data-name="Section">
      <Container38 />
      <Container132 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[30px] tracking-[-0.75px] w-full">
        <p className="css-4hzbpn leading-[36px]">Common workflows we automate</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">These workflows apply across almost every industry.</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading22 />
      <Container133 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Group">
            <path d="M6 1V5M14 1V5" id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2d5bb400} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M1 9H19M7 15L9 17L13 13" id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img56() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Img">
      <Group48 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 size-[25px]" data-name="Container">
      <Img56 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[11.5px] items-center p-[24px] relative size-full">
          <Container135 />
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">Booking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Img57() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Img">
          <path d={svgPaths.p261dfb00} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[25px]" data-name="Container">
      <Img57 />
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[11.5px] items-center p-[24px] relative size-full">
          <Container136 />
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">Inquiries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Img58() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Img">
          <path d={svgPaths.p3d456600} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[25px]" data-name="Container">
      <Img58 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[11.5px] items-center p-[24px] relative size-full">
          <Container137 />
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">Reminders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Group">
            <path d={svgPaths.p3dbdf300} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p24688180} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p38abd500} id="Vector_3" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Img59() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Img">
      <Group49 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[25px]" data-name="Container">
      <Img59 />
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[11.5px] items-center p-[24px] relative size-full">
          <Container138 />
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">CRM Sync</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Background15 />
      <Background16 />
      <Background17 />
      <Background18 />
    </div>
  );
}

function Container140() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container134 />
        <Container139 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[80px] py-[81px] right-0 top-[4860px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container140 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[36px] text-center tracking-[-0.9px]">
        <p className="css-ew64yg leading-[40px]">Tell us your industry and workflow.</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[20px] text-center">
        <p className="css-ew64yg leading-[28px]">We’ll suggest the best automation approach for your team.</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-clip px-[32px] py-[14px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">Book Demo</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[33px] py-[15px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Link15 />
      <Link16 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[272px] max-w-[896px] px-[24px] py-[96px] right-[272px] top-[5312.5px]" data-name="Section">
      <Heading23 />
      <Container141 />
      <Container142 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[18px] tracking-[-0.45px]">
        <p className="css-ew64yg leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-1/2 translate-y-[-50%]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function LinkMargin13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[149.47px] pl-[32px] top-0" data-name="Link:margin">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Pricing</p>
      </div>
    </div>
  );
}

function LinkMargin14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[325.5px] pl-[32px] top-0" data-name="Link:margin">
      <Link20 />
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

function Container143() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Products</p>
      </div>
      <IconifyIcon />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container143 />
    </div>
  );
}

function Margin28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39.55px] pl-[32px] top-0" data-name="Margin">
      <Container144 />
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

function Container145() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(17,24,39,0.8)]">
        <p className="css-ew64yg leading-[20px]">Company</p>
      </div>
      <IconifyIcon1 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container145 />
    </div>
  );
}

function Margin29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[211.33px] pl-[32px] top-0" data-name="Margin">
      <Container146 />
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[20px] relative shrink-0 w-[404.25px]" data-name="Container">
      <Link18 />
      <LinkMargin13 />
      <LinkMargin14 />
      <Margin28 />
      <Margin29 />
    </div>
  );
}

function Link21() {
  return (
    <div className="bg-[#d0ef58] content-stretch flex items-center px-[20px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Contact</p>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col items-start overflow-clip px-[20px] py-[8px] relative rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05),0px_4px_6px_-4px_rgba(0,0,0,0.05)] shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[16px]">Book Demo</p>
      </div>
    </div>
  );
}

function LinkMargin15() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Link:margin">
      <Link22 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex gap-[0.01px] items-center relative shrink-0" data-name="Container">
      <Link21 />
      <LinkMargin15 />
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[64px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[24.02px] relative size-full">
          <Link17 />
          <Container147 />
          <Container148 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(247,245,239,0.85)] content-stretch flex flex-col items-start left-0 pb-px px-[80px] top-0 w-[1440px]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.03)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container149 />
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#121212] text-[18px] top-[14px] tracking-[-0.45px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[28px]">KWS</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[214.39px]" data-name="Container">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">© 2024 KWS Technology.</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute h-[120px] left-0 top-0 w-[214.39px]" data-name="Container">
      <Link23 />
      <Container150 />
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

function Link24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Clinic Agent</p>
      </div>
    </div>
  );
}

function Item39() {
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
        <p className="css-ew64yg leading-[20px]">Pinata Themes</p>
      </div>
    </div>
  );
}

function Item40() {
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
        <p className="css-ew64yg leading-[20px]">Research Buddy</p>
      </div>
    </div>
  );
}

function Item41() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[214.41px]" data-name="Item">
      <Link26 />
    </div>
  );
}

function List13() {
  return (
    <div className="absolute h-[84px] left-0 top-[36px] w-[214.41px]" data-name="List">
      <Item39 />
      <Item40 />
      <Item41 />
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute h-[120px] left-[254.39px] top-0 w-[214.41px]" data-name="Container">
      <Heading4 />
      <List13 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Heading 5">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#121212] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Services</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Automation</p>
      </div>
    </div>
  );
}

function Item42() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Item">
      <Link27 />
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Web Dev</p>
      </div>
    </div>
  );
}

function Item43() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[214.39px]" data-name="Item">
      <Link28 />
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.39px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Consulting</p>
      </div>
    </div>
  );
}

function Item44() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[214.39px]" data-name="Item">
      <Link29 />
    </div>
  );
}

function List14() {
  return (
    <div className="absolute h-[84px] left-0 top-[36px] w-[214.39px]" data-name="List">
      <Item42 />
      <Item43 />
      <Item44 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute h-[120px] left-[508.8px] top-0 w-[214.39px]" data-name="Container">
      <Heading24 />
      <List14 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Heading 5">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#121212] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Company</p>
      </div>
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Item45() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Item">
      <Link30 />
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function Item46() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[214.41px]" data-name="Item">
      <Link31 />
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[214.41px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[14px] top-[10px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Careers</p>
      </div>
    </div>
  );
}

function Item47() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[214.41px]" data-name="Item">
      <Link32 />
    </div>
  );
}

function List15() {
  return (
    <div className="absolute h-[84px] left-0 top-[36px] w-[214.41px]" data-name="List">
      <Item45 />
      <Item46 />
      <Item47 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute h-[120px] left-[763.2px] top-0 w-[214.41px]" data-name="Container">
      <Heading25 />
      <List15 />
    </div>
  );
}

function Heading26() {
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

function Frame1() {
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

function Container155() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[214.39px]" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[120px] left-[1017.6px] top-0 w-[214.39px]" data-name="Container">
      <Heading26 />
      <Container155 />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute h-[120px] left-[24px] top-0 w-[1232px]" data-name="Container">
      <Container151 />
      <Container152 />
      <Container153 />
      <Container154 />
      <Container156 />
    </div>
  );
}

function Link33() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[79px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link34() {
  return (
    <div className="absolute h-[16px] left-[103px] top-0 w-[96px]" data-name="Link">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[199px]" data-name="Container">
      <Link33 />
      <Link34 />
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute h-[16px] left-[16px] top-0 w-[132px]" data-name="Container">
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[12px] top-[8px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[16px]">All systems operational</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute h-[16px] left-[1084px] top-[32px] w-[148px]" data-name="Container">
      <div className="absolute bg-[#d0ef58] left-0 rounded-[9999px] size-[8px] top-[4px]" data-name="Background" />
      <Container159 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[#f3f4f6] border-solid border-t h-[49px] left-[24px] top-[165px] w-[1232px]" data-name="HorizontalBorder">
      <Container158 />
      <Container160 />
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[249px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container157 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] px-[80px] top-[5712px] w-[1440px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Container161 />
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
      <Section5 />
      <Nav />
      <Footer />
    </div>
  );
}