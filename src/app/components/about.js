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
              <div className="info-area">
                <UserIcon width="2rem" height="2rem"/>
                <div className="info">
                  <p className="info-label">이름</p>
                  <p className="info-value">정현승</p>
                </div>
              </div>
            </div>
            <div className="wrap-content">
              <div className="info-area">
                <CalendarIcon width="2rem" height="2rem" />
                <div className="info">
                  <p className="info-label">생년월일</p>
                  <p className="info-value">1998.09.01</p>
                </div>
              </div>
            </div>
            <div className="wrap-content">
              <div className="info-area">
                <LocationIcon width="2rem" height="2rem" />
                <div className="info">
                  <p className="info-label">주소지</p>
                  <p className="info-value">경기도 수원시</p>
                </div>
              </div>
            </div>
            <div className="wrap-content">
              <div className="info-area">
                <CallIcon width="2rem" height="2rem" />
                <div className="info">
                  <p className="info-label">연락처</p>
                  <p className="info-value">010-2994-8697</p>
                </div>
              </div>
            </div>
            <div className="wrap-content">
              <div className="info-area">
                <EmailIcon width="2rem" height="2rem" />
                <div className="info">
                  <p className="info-label">이메일</p>
                  <p className="info-value">zecaumr@naver.com</p>
                </div>
              </div>
            </div>
            <div className="wrap-content">
              <div className="info-area">
                <GraduateIcon width="2rem" height="2rem" />
                <div className="info">
                  <p className="info-label">학력</p>
                  <p className="info-value">세종대학교</p>
                  <p className="info-value">(전자정보통신공학과)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
