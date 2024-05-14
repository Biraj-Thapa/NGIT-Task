const Title = ({ titleText }) => {
    return titleText ? (
      <div className="text-white">{titleText}</div>
    ) : (
      <div className="h-4 bg-gradient-to-br from-rose-400 to-rose-300 rounded mb-2 w-[100%] shadow-lg"></div>
    );
  };
  
  export default Title;