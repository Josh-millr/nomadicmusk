class StringFormater {
    shorten({ str, strLenght = 50 }) {
      return str.slice(0, strLenght);
    }
    newsTitle({ str, strLength = 50 }) {
      let newsSource = str.slice(str.lastIndexOf("-"), str.length - 1);
      let newsInfo = str.slice(0, str.lastIndexOf("-"));
  
      let newsinfoFormated =
        newsInfo.length > strLength
          ? newsInfo.substring(0, strLength) + ". . ."
          : newsInfo;
  
      let newsStringConstruct = (
        <h3 className="text-base text-[#8ab4f8] hover:underline md:text-lg">
          {newsinfoFormated}
          <br />
          {newsSource}
        </h3>
      );
      return newsStringConstruct;
    }
  }