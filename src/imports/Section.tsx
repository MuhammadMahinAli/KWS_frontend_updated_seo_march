import svgPaths from "./svg-wjfw2vgkw1";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[36px] text-center tracking-[-0.9px]">
        <p className="css-ew64yg leading-[40px]">Who can be our client?</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[18px] text-center">
        <p className="css-ew64yg leading-[28px]">These industries benefit most from AI agents, voice/chat booking, workflow automation, and CRM-ready systems.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}

function Group() {
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

function Img() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ecfccb] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background />
      </div>
    </div>
  );
}

function Heading1() {
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
        <Heading1 />
      </div>
    </div>
  );
}

function Container2() {
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[3.625px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">High-volume inquiries, bookings, and repeat</p>
        <p className="css-4hzbpn">visits.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group1() {
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

function Img1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group1 />
    </div>
  );
}

function ImgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img1 />
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

function Img2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group2 />
    </div>
  );
}

function ImgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img2 />
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

function Img3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group3 />
    </div>
  );
}

function ImgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img3 />
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

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <List />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container3 />
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin1 />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[29px] relative rounded-[24px] shrink-0 w-[389.33px]" data-name="1">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin />
      <Heading3Margin />
      <Container8 />
      <LinkMargin />
    </div>
  );
}

function Group4() {
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

function Img4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background1 />
      </div>
    </div>
  );
}

function Heading2() {
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
        <Heading2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Dental clinics, nutrition consultants, mental health</p>
        <p className="css-4hzbpn">practices, day care centers.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Intake, scheduling, reminders, and client</p>
        <p className="css-4hzbpn">communication.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group5() {
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
      <Group5 />
    </div>
  );
}

function ImgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img5 />
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

function Img6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group6 />
    </div>
  );
}

function ImgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img6 />
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

function Img7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group7 />
    </div>
  );
}

function ImgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img7 />
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

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <List1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[17.5px] relative w-full">
        <Container10 />
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin3 />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link1 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[29px] relative rounded-[24px] shrink-0 w-[389.33px]" data-name="2">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin2 />
      <Heading3Margin1 />
      <Container15 />
      <LinkMargin1 />
    </div>
  );
}

function Img8() {
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

function Background2() {
  return (
    <div className="bg-[#ffedd5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img8 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background2 />
      </div>
    </div>
  );
}

function Heading3() {
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
        <Heading3 />
      </div>
    </div>
  );
}

function Container16() {
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

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[3.625px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Trial leads, class schedules, and membership</p>
        <p className="css-4hzbpn">conversions.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
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

function Img9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group8 />
    </div>
  );
}

function ImgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img9 />
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

function Img10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group9 />
    </div>
  );
}

function ImgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img10 />
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

function Img11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group10 />
    </div>
  );
}

function ImgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img11 />
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

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <List2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container17 />
        <Container19 />
        <Container21 />
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

function Link2() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin5 />
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link2 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[29px] relative rounded-[24px] shrink-0 w-[389.34px]" data-name="3">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin4 />
      <Heading3Margin2 />
      <Container22 />
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

function Group11() {
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

function Img12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group11 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img12 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background3 />
      </div>
    </div>
  );
}

function Heading4() {
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
        <Heading4 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Coaching institutes, training programs, tutors,</p>
        <p className="css-4hzbpn">learning centers.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Enrollment conversations and schedule</p>
        <p className="css-4hzbpn">coordination.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group12() {
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
      <Group12 />
    </div>
  );
}

function ImgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img13 />
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

function Img14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group13 />
    </div>
  );
}

function ImgMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img14 />
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

function Img15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group14 />
    </div>
  );
}

function ImgMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img15 />
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

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <List3 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[28px] relative w-full">
        <Container24 />
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin7 />
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link3 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[29px] rounded-[24px] top-[530.25px] w-[389.33px]" data-name="4">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin6 />
      <Heading3Margin3 />
      <Container29 />
      <LinkMargin3 />
    </div>
  );
}

function Img16() {
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

function Background4() {
  return (
    <div className="bg-[#fef9c3] content-stretch flex h-[43px] items-center justify-center relative rounded-[8px] shrink-0 w-[40px]" data-name="Background">
      <Img16 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background4 />
      </div>
    </div>
  );
}

function Heading5() {
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
        <Heading5 />
      </div>
    </div>
  );
}

function Container30() {
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[3.25px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Booking inquiries and guest support at scale.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
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

function Img17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group15 />
    </div>
  );
}

function ImgMargin12() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img17 />
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

function Img18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group16 />
    </div>
  );
}

function ImgMargin13() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img18 />
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

function Img19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group17 />
    </div>
  );
}

function ImgMargin14() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img19 />
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

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <List4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[28px] relative w-full">
        <Container31 />
        <Container33 />
        <Container35 />
      </div>
    </div>
  );
}

function Margin9() {
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
      <Margin9 />
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link4 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[421.33px] p-[29px] rounded-[24px] top-[529px] w-[389.33px]" data-name="5">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin8 />
      <Heading3Margin4 />
      <Container36 />
      <LinkMargin4 />
    </div>
  );
}

function Group18() {
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

function Img20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group18 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img20 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background5 />
      </div>
    </div>
  );
}

function Heading6() {
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
        <Heading6 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Real estate brokerages, agents, property</p>
        <p className="css-4hzbpn">management companies.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Lead capture, qualification, and viewing</p>
        <p className="css-4hzbpn">coordination.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group19() {
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
      <Group19 />
    </div>
  );
}

function ImgMargin15() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img21 />
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

function Img22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group20 />
    </div>
  );
}

function ImgMargin16() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img22 />
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

function Img23() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group21 />
    </div>
  );
}

function ImgMargin17() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img23 />
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

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <List5 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container38 />
        <Container40 />
        <Container42 />
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

function Link5() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin11 />
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link5 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[842.66px] p-[29px] rounded-[24px] top-[530.25px] w-[389.34px]" data-name="6">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin10 />
      <Heading3Margin5 />
      <Container43 />
      <LinkMargin5 />
    </div>
  );
}

function Group22() {
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

function Img24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group22 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img24 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Background6 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Container44 />
      </div>
    </div>
  );
}

function Heading7() {
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
        <Heading7 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Architecture firms, interior design studios,</p>
        <p className="css-4hzbpn">design/build teams.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Client onboarding and vendor/product sourcing.</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group23() {
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
      <Group23 />
    </div>
  );
}

function ImgMargin18() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img25 />
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

function Img26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group24 />
    </div>
  );
}

function ImgMargin19() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img26 />
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

function Img27() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group25 />
    </div>
  );
}

function ImgMargin20() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img27 />
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

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <List6 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[22.75px] relative w-full">
        <Container46 />
        <Container48 />
        <Container50 />
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin13 />
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link6 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[29px] rounded-[24px] top-[1051.5px] w-[389.33px]" data-name="7">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin12 />
      <Heading3Margin6 />
      <Container51 />
      <LinkMargin6 />
    </div>
  );
}

function Img28() {
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

function Background7() {
  return (
    <div className="bg-[#cce0ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img28 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background7 />
      </div>
    </div>
  );
}

function Heading8() {
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
        <Heading8 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Small factories, OEMs, workshops, industrial</p>
        <p className="css-4hzbpn">suppliers.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Procurement, documentation, and internal</p>
        <p className="css-4hzbpn">workflows.</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
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

function Img29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group26 />
    </div>
  );
}

function ImgMargin21() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img29 />
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

function Img30() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group27 />
    </div>
  );
}

function ImgMargin22() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img30 />
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

function Img31() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group28 />
    </div>
  );
}

function ImgMargin23() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img31 />
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <List7 />
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container53 />
        <Container55 />
        <Container57 />
      </div>
    </div>
  );
}

function Margin15() {
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
      <Margin15 />
    </div>
  );
}

function LinkMargin7() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link7 />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[421.33px] p-[29px] rounded-[24px] top-[1051.5px] w-[389.33px]" data-name="8">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin14 />
      <Heading3Margin7 />
      <Container58 />
      <LinkMargin7 />
    </div>
  );
}

function Img32() {
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

function Background8() {
  return (
    <div className="bg-[#ffc8c8] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img32 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background8 />
      </div>
    </div>
  );
}

function Heading9() {
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
        <Heading9 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Car dealerships, service centers, repair garages.</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Service bookings and quote follow-ups.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
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

function Img33() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group29 />
    </div>
  );
}

function ImgMargin24() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img33 />
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

function Img34() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group30 />
    </div>
  );
}

function ImgMargin25() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img34 />
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

function Img35() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group31 />
    </div>
  );
}

function ImgMargin26() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img35 />
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <List8 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[45.5px] relative w-full">
        <Container60 />
        <Container62 />
        <Container64 />
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

function Link8() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin17 />
    </div>
  );
}

function LinkMargin8() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link8 />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[842.66px] p-[29px] rounded-[24px] top-[1051.5px] w-[389.34px]" data-name="9">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin16 />
      <Heading3Margin8 />
      <Container65 />
      <LinkMargin8 />
    </div>
  );
}

function Group32() {
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

function Img36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group32 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#becfff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img36 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background9 />
      </div>
    </div>
  );
}

function Heading10() {
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
        <Heading10 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Law firms, legal consultancies, immigration</p>
        <p className="css-4hzbpn">consultancies, document services.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Client intake and consultation scheduling.</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group33() {
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
      <Group33 />
    </div>
  );
}

function ImgMargin27() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img37 />
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

function Img38() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group34 />
    </div>
  );
}

function ImgMargin28() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img38 />
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

function Img39() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group35 />
    </div>
  );
}

function ImgMargin29() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img39 />
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

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <List9 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[22.75px] relative w-full">
        <Container67 />
        <Container69 />
        <Container71 />
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin19 />
    </div>
  );
}

function LinkMargin9() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link9 />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[29px] rounded-[24px] top-[1544.5px] w-[389.33px]" data-name="10">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin18 />
      <Heading3Margin9 />
      <Container72 />
      <LinkMargin9 />
    </div>
  );
}

function Group36() {
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

function Img40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group36 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#b9ffd3] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img40 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background10 />
      </div>
    </div>
  );
}

function Heading11() {
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
        <Heading11 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Recruitment agencies, staffing firms, HR service</p>
        <p className="css-4hzbpn">providers.</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Candidate screening and pipeline coordination.</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group37() {
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
      <Group37 />
    </div>
  );
}

function ImgMargin30() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img41 />
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

function Img42() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group38 />
    </div>
  );
}

function ImgMargin31() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img42 />
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

function Img43() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group39 />
    </div>
  );
}

function ImgMargin32() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img43 />
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

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <List10 />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[22.75px] relative w-full">
        <Container74 />
        <Container76 />
        <Container78 />
      </div>
    </div>
  );
}

function Margin21() {
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
      <Margin21 />
    </div>
  );
}

function LinkMargin10() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link10 />
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[421.33px] p-[29px] rounded-[24px] top-[1544.5px] w-[389.33px]" data-name="11">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin20 />
      <Heading3Margin10 />
      <Container79 />
      <LinkMargin10 />
    </div>
  );
}

function Group40() {
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

function Img44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <Group40 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f9ddca] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img44 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Background11 />
      </div>
    </div>
  );
}

function Heading12() {
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
        <Heading12 />
      </div>
    </div>
  );
}

function Container80() {
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

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[3.25px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[22.75px]">Lead operations and conversion workflows.</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
      </div>
    </div>
  );
}

function Group41() {
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
      <Group41 />
    </div>
  );
}

function ImgMargin33() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img45 />
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

function Img46() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group42 />
    </div>
  );
}

function ImgMargin34() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img46 />
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

function Img47() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group43 />
    </div>
  );
}

function ImgMargin35() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img47 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <List11 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container81 />
        <Container83 />
        <Container85 />
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

function Link11() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin23 />
    </div>
  );
}

function LinkMargin11() {
  return (
    <div className="relative shrink-0 w-[331.34px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link11 />
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[842.66px] p-[29px] rounded-[24px] top-[1544.75px] w-[389.34px]" data-name="12">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin22 />
      <Heading3Margin11 />
      <Container86 />
      <LinkMargin11 />
    </div>
  );
}

function Container87() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Img48() {
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

function Background12() {
  return (
    <div className="bg-[#e4f0ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Img48 />
    </div>
  );
}

function Margin24() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Container87 />
        <Background12 />
      </div>
    </div>
  );
}

function Heading13() {
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
        <Heading13 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">NGOs, charities, associations, community</p>
        <p className="css-4hzbpn">organizations.</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Includes</p>
      </div>
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Donor/supporter communication and event</p>
        <p className="css-4hzbpn">operations.</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase">
        <p className="css-ew64yg leading-[16px]">Best for</p>
      </div>
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Common automations</p>
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

function Img49() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group44 />
    </div>
  );
}

function ImgMargin36() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img49 />
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

function Img50() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group45 />
    </div>
  );
}

function ImgMargin37() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img50 />
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

function Img51() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Img">
      <Group46 />
    </div>
  );
}

function ImgMargin38() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-[2px] relative shrink-0 w-[14px]" data-name="Img:margin">
      <Img51 />
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

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <List12 />
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container89 />
        <Container91 />
        <Container93 />
      </div>
    </div>
  );
}

function Margin25() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">→</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black">
        <p className="css-ew64yg leading-[20px]">See workflows</p>
      </div>
      <Margin25 />
    </div>
  );
}

function LinkMargin12() {
  return (
    <div className="relative shrink-0 w-[331.33px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <Link12 />
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[2048px_842.67px_2px_0] items-start p-[29px] rounded-[24px]" data-name="13">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.03)]" />
      <Margin24 />
      <Heading3Margin12 />
      <Container94 />
      <LinkMargin12 />
    </div>
  );
}

function Container95() {
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

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start px-[24px] py-[80px] relative size-full" data-name="Section">
      <Container1 />
      <Container95 />
    </div>
  );
}