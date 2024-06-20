import UserIcon from "/public/user.svg";
import CalendarIcon from "/public/calendar.svg";
import LocationIcon from "/public/location.svg";
import CallIcon from "/public/call.svg";
import EmailIcon from "/public/email.svg";
import GraduateIcon from "/public/graduate.svg";

export default function About() {
  return (
    <>
      <div className="section-2">
        <div className="section-second">
          <p className="section-title">ABOUT ME</p>
          <div className="wrap">
            <div className="wrap-content">
              <UserIcon width="2rem" height="2rem" />
              <div>
                <p>이름</p>
                <p>정현승</p>
              </div>
            </div>
            <div className="wrap-content">
              <CalendarIcon width="2rem" height="2rem" />
              <div>
                <p>생년월일</p>
                <p>1998.09.01</p>
              </div>
            </div>
            <div className="wrap-content">
              <LocationIcon width="2rem" height="2rem" />
              <div>
                <p>주소지</p>
                <p>경기도 수원시</p>
              </div>
            </div>
            <div className="wrap-content">
              <CallIcon width="2rem" height="2rem" />
              <div>
                <p>연락처</p>
                <p>010-2994-8697</p>
              </div>
            </div>
            <div className="wrap-content">
              <EmailIcon width="2rem" height="2rem" />
              <div>
                <p>이메일</p>
                <p>zecaumr@naver.com</p>
              </div>
            </div>
            <div className="wrap-content">
              <GraduateIcon width="2rem" height="2rem" />
              <div>
                <p>학력</p>
                <p>세종대학교</p>
                <p>(전자정보통신공학과)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
