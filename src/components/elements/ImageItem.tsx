import { memo, ReactNode, useCallback, useState } from "react";

export default memo(function ImageItem({
  url,
  description,
  title,
  img,
  scrollY
}: {
  url: string,
  description: string,
  title: ReactNode,
  img: string,
  scrollY: number
}) {

  const [hovered, setHovered] = useState(false);
  const setMouseOver = useCallback(() => {
    setHovered(true);
  }, []);

  const setMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <a target="_blank" href={url} className="split-image-effect--container min-w-[375px] h-[500px]">
      <img style={{ objectPosition: `${scrollY * -.5}% 50%` }} className="w-full h-full cursor-pointer object-cover grayscale hover:grayscale-0" src={img} alt="" />
      <div onMouseOver={setMouseOver} onMouseLeave={setMouseLeave} style={{ background: `radial-gradient(circle, #353B3C 0%, #1F1F1F 90%)` }} className="w-full h-full cursor-pointer object-cover grayscale hover:grayscale-0">
        <div className="flex flex-col p-4">
          {title}
          <span style={{ opacity: hovered ? 1 : 0 }} className="w-full p-4 transition-opacity duration-500 text-white font-extralight text-sm">
            {description}
          </span>
        </div>
      </div>
    </a>
  )
})