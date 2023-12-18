import NoImage from "../assets/b1924dce177345b5485bb5490ab3441f.jpg";
const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return NoImage;
  }
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
