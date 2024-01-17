import { useGLTF, Float, Lightformer, Text, Html, ContactShadows, Environment, MeshTransmissionMaterial } from "@react-three/drei"
import { suspend } from "suspend-react"

export default function IntroText(props)
{
    return <div className="intro-wrapper">
        <h1 className="intro-title" ><span className="outline">Hey, I'm </span>Cain Burt</h1>
        <div className="intro-role" >Software Developer</div>
    </div>
    // return (
    //     <Text fontSize={2} letterSpacing={-0.025}  color="black" {...props}>
    //         {"Hey, I'm Cain Burt"}
    //         <Html style={{ color: "transparent", fontSize: "33.5em" }} transform>
    //         </Html>
    //     </Text>
    // )
        
}