import { useAppSelector } from "../../store"

export const getTheme = () => {
  return useAppSelector(state => state.theme.theme);
}