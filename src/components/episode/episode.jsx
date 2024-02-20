const Episode = ({episode}) => {
  const {num, title, guest} = episode
  return (
    <div className="episode">
      <div className="episode__num">{num}</div>
      <div className="episode__body">
        <div className="episode__title">{title}</div>
        <div className="episode__guest">{guest}</div>
      </div>
    </div>
    
  );
    }
    
    export default Episode;