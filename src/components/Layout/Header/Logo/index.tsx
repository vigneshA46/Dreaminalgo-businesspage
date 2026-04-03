import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div style={{display:'flex',alignItems:'center',gap:'1rem'}} >
      <Image
        src={`images/dreaminlogo.jpg`}
        alt="logo"
        width={2}
        height={50}
        style={{ width: "4rem", height: "auto", borderRadius:'2rem' }}
        quality={100}
      />
      <p style={{fontSize:'1.5rem',fontWeight:'500'}} >Dreamin <span>Traders</span></p>
      </div>
    </Link>
  );
};

export default Logo;
