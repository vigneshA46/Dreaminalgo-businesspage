import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div style={{display:'flex',alignItems:'center',gap:'1rem', overflow: "hidden",borderRadius: "1.5rem"}} >
      <Image
        src={`images/dreaminlogo_bgrem.png`}
        alt="logo"
        width={2}
        height={50}
        style={{ width: "4rem", height: "auto", borderRadius:'2rem',transform: "scale(1.5)" }}
        quality={100}        
      />
      <p style={{fontSize:'1.5rem',fontWeight:'500'}} >Dreamin <span>Traders</span></p>
      </div>
    </Link>
  );
};

export default Logo;
