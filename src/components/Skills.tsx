import { useAppSelector } from "../store";
import CoverAnimSubtitleText from "./text/CoverAnimSubtitleText";

export default function Skills() {

    const theme = useAppSelector(state => state.theme.theme);

    return (
        <main className="relative">
            <h1 className="self-center block">
                <CoverAnimSubtitleText show={true} dispText='Hello!' textColor={theme.primary}/>
            </h1>
        </main>
    )
}