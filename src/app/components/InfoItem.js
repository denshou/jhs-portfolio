const InfoItem = ({ Icon, label, value, additionalValue }) => {
  return (
    <div className="wrap-content">
      <div className="info-area">
        <Icon width="2rem" height="2rem" />
        <div className="info">
          <p className="info-label">{label}</p>
          <p className="info-value">{value}</p>
          {additionalValue && <p className="info-value">{additionalValue}</p>}
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
