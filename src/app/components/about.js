import UserIcon from "/public/user.svg";
import CalendarIcon from "/public/calendar.svg";
import LocationIcon from "/public/location.svg";
import CallIcon from "/public/call.svg";
import EmailIcon from "/public/email.svg";
import GraduateIcon from "/public/graduate.svg";
import InfoItem from "./InfoItem";

export default function About() {
  return (
    <>
      <div className="section-2">
        <div className="container2">
          <div className="section-title">ABOUT ME</div>
          <div className="wrap">
            <InfoItem Icon={UserIcon} label="이름" value="정현승" />
            <InfoItem Icon={CalendarIcon} label="생년월일" value="1998.09.01" />
            <InfoItem
              Icon={LocationIcon}
              label="주소지"
              value="경기도 수원시"
            />
            <InfoItem Icon={CallIcon} label="연락처" value="010-2994-8697" />
            <InfoItem
              Icon={EmailIcon}
              label="이메일"
              value="zecaumr@naver.com"
            />
            <InfoItem
              Icon={GraduateIcon}
              label="학력"
              value="세종대학교"
              additionalValue="(전자정보통신공학과)"
            />
          </div>
        </div>
      </div>
    </>
  );
}
