import FeaturesSection  from "./features_section";
import HeroSection from "./hero_section";
import CalltoactionSection from "./calltoaction_section";

export default function HomePage(){
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <CalltoactionSection />
        </div>
    )
}