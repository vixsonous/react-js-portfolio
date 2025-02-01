import { useMemo, useState } from "react";
import { useAppSelector } from "../../store";

export interface SkillContent {
  svg: JSX.Element;
  title: string;
  content: string;
  children: JSX.Element[];
}

export function useSkillCardHook() {
  const theme = useAppSelector((state) => state.theme.theme);
  const [mouseOver, setMouseOver] = useState(false);
  const [init, setInit] = useState(false);
  const [viewSkills, setViewSkills] = useState(false);
  const [viewMouseOver, setViewMouseOver] = useState(false);

  return {
    mouseOver,
    setMouseOver,
    init,
    setInit,
    viewSkills,
    setViewSkills,
    viewMouseOver,
    setViewMouseOver,
    theme,
  };
}

export function useSkillCardHelper({
  setMouseOver,
  setViewSkills,
  setViewMouseOver,
}: ReturnType<typeof useSkillCardHook>) {
  const actions = useMemo(
    () => ({
      isMouseOver() {
        setMouseOver(true);
      },
      notMouseOver() {
        setMouseOver(false);
      },
      isViewSkills() {
        setViewSkills(true);
      },
      notViewSkills() {
        setViewSkills(false);
      },
      isViewMouseOver() {
        setViewMouseOver(true);
      },
      notViewMouseOver() {
        setViewMouseOver(false);
      },
    }),
    []
  );

  return actions;
}
