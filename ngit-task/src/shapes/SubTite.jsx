const SubTitle = ({ subTitleText }) => {
    return subTitleText ? (
      <div className="text-xs text-white">{subTitleText}</div>
    ) : (
      <div className="h-3 bg-gradient-to-br from-rose-400 to-rose-300 rounded w-1/2 shadow-lg"></div>
    );
  };
  
  export default SubTitle;