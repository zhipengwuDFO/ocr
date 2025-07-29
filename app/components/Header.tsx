import React from "react";


import Image from "next/image";
import logo from "../../public/images/sig-blk-en.svg";

import Link from "next/link";

type Props = {};

const Header = (props: Props) => {


  return (
    
    <div className="p-4 border-b border-gray-200 flex justify-between">
      <Link href="/" className="w-1/3">
        <Image height={33} src={logo} alt="Logo" />
      </Link>

      
    </div>
  );
};

export default Header;
